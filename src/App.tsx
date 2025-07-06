import Hero from "./components/hero";
import Header from "./Header";

function App() {
  return (
    <>
      <Header />
      <Hero
        quote="Your inspirational quote goes here."
        // type="scramble"
        enableRibbons
        // enableSplash
      />
      {/* ...existing code... */}
    </>
  );
}

export default App;
