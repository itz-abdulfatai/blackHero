import { useState, useEffect } from "react";
import Hero, { type TypeType } from "./components/hero";
import Header from "./Header";
import Popup from "./components/Popup";

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [quote, setQuote] = useState<string>(
    "Someone out there is holding their breath hoping you fail, Make sure they suffocate."
  );
  const [type, setType] = useState<TypeType>("true-focus");
  const [enableSplash, setEnableSplash] = useState(false);

  // Local state for popup
  const [popupQuote, setPopupQuote] = useState(quote);
  const [popupType, setPopupType] = useState<TypeType>(type);
  const [popupEnableSplash, setPopupEnableSplash] = useState(enableSplash);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === "q") {
        setPopupQuote(quote);
        setPopupType(type);
        setPopupEnableSplash(enableSplash);
        setShowPopup((v) => !v);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [quote, type, enableSplash]);

  const handleApply = () => {
    setQuote(popupQuote);
    setType(popupType);
    setEnableSplash(popupEnableSplash);
    setShowPopup(false);
  };

  return (
    <>
      <Header />
      <Hero
        quote={quote}
        type={type}
        enableSplash={enableSplash}
        enableRibbons
      />
      <Popup
        show={showPopup}
        onClose={() => setShowPopup(false)}
        quote={popupQuote}
        setQuote={setPopupQuote}
        type={popupType}
        setType={setPopupType}
        onApply={handleApply}
      />
    </>
  );
}

export default App;
