import { useEffect, useRef, useState } from "react";
import Hero, { type TypeType } from "./components/hero";
import Header from "./Header";
import Popup from "./components/Popup";

function App() {
  const [showPopup, setShowPopup] = useState(false);
  // console.log(showPopup);

  const [quote, setQuote] = useState<string | undefined>(
    "Someone out there is holding their breath hoping you fail, Make sure they suffocate."
  );
  const [type, setType] = useState<TypeType | undefined>("true-focus");
  // const [enableSplash, setEnableSplash] = useState(false);

  const quoteRef = useRef<HTMLInputElement | null>(null);
  const typeRef = useRef<HTMLSelectElement>(null);

  // Local state for popup
  // const [popupQuote, setPopupQuote] = useState(quote);
  // const [popupType, setPopupType] = useState<TypeType>(type);
  // const [popupEnableSplash, setPopupEnableSplash] = useState(enableSplash);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === "q") {
        // setPopupQuote(quote);
        // setPopupType(type);
        // setPopupEnableSplash(enableSplash);
        setShowPopup((v) => !v);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleApply = () => {
    const qouteValue = quoteRef?.current?.value;
    const typeValue = typeRef?.current?.value;

    // console.log(qouteValue);
    // console.log(typeValue);
    setQuote(qouteValue);
    setType(typeValue as TypeType);
    setShowPopup(false);
  };

  return (
    <>
      <Header />
      <Hero quote={quote} type={type} showPopup={showPopup} />
      <Popup
        show={showPopup}
        onClose={() => setShowPopup(false)}
        quoteRef={quoteRef}
        typeRef={typeRef}
        // quote={popupQuote}
        // setQuote={setPopupQuote}
        // type={popupType}
        // setType={setPopupType}
        onApply={handleApply}
      />
    </>
  );
}

export default App;
