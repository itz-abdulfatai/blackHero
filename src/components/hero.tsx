// import Ribbons from "./react-bitz/ribbons";
import { div as MotionDiv } from "framer-motion/client";
import ScrambledText from "./react-bitz/Scramble";
import SplashCursor from "./react-bitz/splash";
import TrueFocus from "./react-bitz/TrueFocus";
import { useEffect, useState } from "react";

function Hero({
  quote,
  type = "true-focus",
  enableSplash = false,
  showPopup,
}: PupopType) {
  const [enableSplashWithKey, setEnableSplashWithKey] = useState(enableSplash);
  // enable splash when i click space bar
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === "Space" && !showPopup) {
        // Trigger splash effect
        setEnableSplashWithKey((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showPopup]);
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center h-[calc(100vh-4rem)]"
    >
      {quote && type === "true-focus" && (
        <TrueFocus
          sentence={quote}
          manualMode={true}
          borderColor="#dcf763"
          blurAmount={3}
          pauseBetweenAnimations={0}
        />
      )}

      {quote && type === "scramble" && (
        // <div className=" px-5 w-full">
        <ScrambledText radius={30} duration={3}>
          {quote}
        </ScrambledText>
        // </div>
      )}

      {enableSplashWithKey && <SplashCursor />}

      {/* {enableRibbons && <Ribbons colors={["#dcf763"]} />} */}

      {quote && type === "none" && (
        <MotionDiv className="text-xl">{quote}</MotionDiv>
      )}
    </section>
  );
}

export default Hero;

export type PupopType = {
  quote?: string;
  enableRibbons?: boolean;
  enableSplash?: boolean;
  type?: TypeType;
  showPopup?: boolean;
};

export type TypeType = "none" | "true-focus" | "scramble";