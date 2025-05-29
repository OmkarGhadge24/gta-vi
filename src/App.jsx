import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";
import { FaArrowDown } from "react-icons/fa6";

function App() {
  let [showContent, setShowContent] = useState(false);
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    })
      .to(".vi-mask-group", {
        scale: 10,
        duration: 2,
        delay: -1.8,
        ease: "Expo.easeInOut",
        transformOrigin: "50% 50%",
        opacity: 0,
        onUpdate: function () {
          if (this.progress() >= 0.9 && !showContent) {
            setShowContent(true);
          }
        },
      })
      .to(".svg", {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          document.querySelector(".svg")?.remove();
        },
      });
  });

  useGSAP(() => {
    if (!showContent) return;
    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "Expo.easeInOut",
    });
    gsap.to(".sky", {
      scale: 1.2,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });
    gsap.to(".bg", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });
    gsap.to(".character", {
      scale: 1.1,
      rotate: 0,
      bottom: "-45%",
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });
    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });
    const main = document.querySelector(".main");
    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", {
        x: `${xMove * 0.4}%`,
      });
      gsap.to(".sky", {
        x: xMove,
      });
      gsap.to(".bg", {
        x: xMove * 1.7,
      });
    });
  }, [showContent]);
  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-black">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className="main w-full rotate-[-10deg] scale-[1.4]">
          <div className="landing relative w-full h-screen bg-black">
            {/* Navbar */}
            <div className="navbar absolute top-0 left-0 z-[10] w-full py-8 px-8">
              <div className="logo flex gap-6">
                <div className="lines flex flex-col gap-[4px]">
                  <div className="line w-9 h-1 bg-white"></div>
                  <div className="line w-6 h-1 bg-white"></div>
                  <div className="line w-3 h-1 bg-white"></div>
                </div>
                <h3 className="text-[28px] -mt-[8px] leading-none text-white">
                  Rockstar
                </h3>
              </div>
            </div>
            {/* Images */}
            <div className="imagesdiv overflow-hidden relative w-full h-screen">
              <img
                className="absolute sky scale-[1.4] rotate-[-15deg] top-0 left-0 w-full h-full object-cover"
                src="./sky.png"
                alt=""
              />
              <img
                className="absolute bg scale-[1.8] rotate-[-3deg] top-0 left-0 w-screen h-full object-cover"
                src="./bg.png"
                alt=""
              />
              <div className="text text-white flex flex-col gap-2 absolute top-8 left-1/2 -translate-x-1/2 scale-[1.3] rotate-[-10deg]">
                <h1 className="text-[6rem] leading-none -ml-25">grand</h1>
                <h1 className="text-[6rem] leading-none ml-5">theft</h1>
                <h1 className="text-[6rem] leading-none -ml-25">auto</h1>
              </div>
              <img
                className="absolute character scale-[3] rotate-[-15deg] left-1/2 -translate-x-1/2 -bottom-[100%] w-124 object-cover"
                src="./girlbg.png"
                alt=""
              />
            </div>
            {/* Buttons */}
            <div className="btmbar text-white absolute bottom-0 left-0 w-full py-4 px-8 bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-3 items-center">
                <FaArrowDown className="text-xl" />
                <h3 className="text-lg font-[poppins]">Scroll Down</h3>
              </div>
              <img
                className="absolute h-[45px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                src="./ps5.png"
                alt=""
              />
            </div>
            {/* Info Page */}
            <div className="w-full h-screen flex items-center justify-center bg-black">
              <div className="cntnr flex text-white w-full h-[80%] ">
                <div className="limg relative w-1/2 h-full">
                  <img
                    className="absolute w-110 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    src="./image.png"
                    alt=""
                  />
                </div>
                <div className="rg w-[35%] py-8">
                  <h1 className="text-5xl">Still Running,</h1>
                  <h1 className="text-5xl">Not Hunting</h1>
                  <p className="mt-10 text-sm font-[poppins]">
                    GTA VI redefines open-world freedom with its bold new
                    setting, brought to life with detail like never before.
                  </p>
                  <p className="mt-3 text-sm font-[poppins]">
                    Follow the story of two outlaws navigating a world where
                    every move is a risk, and loyalty can be deadly. From
                    high-speed chases through neon-lit cityscapes to tense
                    showdowns in backwater bayous — this is crime at a new
                    scale.
                  </p>
                  <p className="mt-3 text-sm font-[poppins]">
                    Powered by Rockstar's most advanced game engine yet, GTA VI
                    delivers breathtaking visuals, dynamic characters, and a
                    living world that reacts to your choices. This isn’t just
                    the next chapter — it’s a whole new era.
                  </p>
                  <button className="bg-yellow-500 px-6 py-6 text-black mt-6 text-xl">
                    Download Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
