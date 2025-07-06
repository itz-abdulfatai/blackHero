// import Ribbons from "./react-bitz/ribbons";
import { div as MotionDiv } from "framer-motion/client";
import ScrambledText from "./react-bitz/Scramble";
import SplashCursor from "./react-bitz/splash";
import TrueFocus from "./react-bitz/TrueFocus";

function Hero({
  quote,
  type = "true-focus",
  //   enableRebbons = false,
  enableSplash = false,
}: {
  quote?: string;
  enableRibbons?: boolean;
  enableSplash?: boolean;
  type?: string;
}) {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center h-[calc(100vh-4rem)]"
    >
      {quote && type === "true-focus" && (
        <TrueFocus sentence={quote} manualMode={true} borderColor="#dcf763" />
      )}

      {quote && type === "scramble" && (
        // <div className=" px-5 w-full">
        <ScrambledText radius={30} duration={3}>
          {quote}
        </ScrambledText>
        // </div>
      )}

      {enableSplash && <SplashCursor />}

      {/* {enableRibbons && <Ribbons colors={["#dcf763"]} />} */}

      {quote && type === "none" && (
        <MotionDiv className="text-xl">{quote}</MotionDiv>
      )}
    </section>
  );
}

export default Hero;
