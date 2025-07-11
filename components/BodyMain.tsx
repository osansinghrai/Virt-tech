"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useState } from "react";

const BodyMain = () => {
  const [showContentFirst, setShowContentFirst] = useState(false);

  const hoverHandlerFirst = () => {
    setShowContentFirst(!showContentFirst);
  };
  const [showContentSecond, setShowContentSecond] = useState(false);

  const hoverHandlerSecond = () => {
    setShowContentSecond(!showContentSecond);
  };

  const [showContentThird, setShowContentThird] = useState(false);

  const hoverHandlerThird = () => {
    setShowContentThird(!showContentThird);
  };

  return (
    <div className="ml-40 mt-8">
      {/* Container Header */}
      <header className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold text-gray-700">
          Your SkillShikshya Journey
        </h1>
        <h1 className="text-4xl font-extrabold flex gap-2">
          <span className="text-[#1DA077]">Step</span>
          <span className="text-gray-700">In.</span>
          <span className="text-[#1DA077]">Skill</span>
          <span className="text-gray-700">Up</span>
          <span className="text-[#1DA077]">Stand</span>
          <span className="text-gray-700">Out.</span>
          <span className="text-4xl">🚀</span>
        </h1>
      </header>
      <body>
        <div className="flex gap-20 mt-14">
          {/* container first */}
          <div
            className="relative z-20 w-[600px] h-80 cursor-pointer"
            onMouseEnter={hoverHandlerFirst}
            onMouseLeave={hoverHandlerFirst}
          >
            <div className="bg-[#F45B5B] w-full h-full rounded-4xl relative overflow-hidden">
              <img
                src="Group.png"
                alt="Illustration"
                className="absolute -left-[6rem] z-10 animate-subtle-bounce"
              />
              <div className="absolute flex flex-col justify-items-center text-white top-10 left-50 text-right mr-10 z-20">
                <h1 className="text-4xl font-extrabold mt-4">
                  Start with Clarity
                </h1>
                <h2 className="text-2xl font-semibold mt-2 mb-6">
                  Step into a better learning path.
                </h2>
                <h2 className="text-md">
                  Overwhelmed by too many learning options? SkillShikshya
                  provides a clear, curated roadmap from the start. Whether
                  you're a beginner or upskilling, we have a path tailored to
                  your growth.
                </h2>
              </div>
              {showContentFirst && (
                <div className="absolute inset-0 bg-[#F45B5B] rounded-4xl flex justify-between items-center z-30">
                  <>
                    <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 bg-white rounded-full h-20 w-20 flex items-center justify-center shadow-lg">
                      <ArrowLeft className="text-black h-6 w-6" />
                    </div>

                    <div className="absolute left-[4px] top-[12rem] transform -translate-y-1/2">
                      <img
                        src="people.png"
                        alt="People illustration"
                        className="w-[19rem] h-auto"
                      />
                    </div>

                    <div className="absolute right-8 top-[8rem] transform -translate-y-1/2 text-white text-right">
                      <h1 className="text-4xl font-bold mb-2 pr-4">
                        Clarity unlocked—
                      </h1>
                      <h2 className="text-2xl text-right w-[18rem]">
                        stickers, sips, and skills
                        <br />
                        all in one go!
                      </h2>
                    </div>

                    <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 bg-white rounded-full h-20 w-20 flex items-center justify-center shadow-lg">
                      <ArrowRight className="text-black h-6 w-6" />
                    </div>
                  </>
                </div>
              )}
            </div>
          </div>

          {/* container second */}
          <div
            className="relative z-20 w-[600px] h-80 cursor-pointer"
            onMouseEnter={hoverHandlerSecond}
            onMouseLeave={hoverHandlerSecond}
          >
            <div className="bg-[#5492A0] w-full h-full rounded-4xl relative overflow-hidden">
              <img
                src="Group1.png"
                alt="Illustration"
                className="absolute -right-[2rem] z-10 animate-subtle-bounce"
              />
              <div className="absolute flex flex-col justify-items-center text-white top-10 left-10 text-left mr-50 z-20">
                <h1 className="text-4xl font-extrabold mt-4">Learn by Doing</h1>
                <h2 className="text-2xl font-semibold mt-2 mb-6">
                  Practical skills, real projects.
                </h2>
                <h2 className="text-md">
                  Theory is great, but action is better. At SkillShikshya, you
                  learn by doing. Hands-on projects and real-world scenarios
                  help you build, break, and create—leading to true mastery.
                </h2>
              </div>
              {showContentSecond && (
                <div className="absolute inset-0 bg-[#5492A0] rounded-4xl flex justify-between items-center z-30">
                  <>
                    <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 bg-white rounded-full h-20 w-20 flex items-center justify-center shadow-lg">
                      <ArrowLeft
                        className="text-black h-6 w-6"
                        onClick={hoverHandlerSecond}
                      />
                    </div>

                    <div className="absolute right-[4px] top-[12rem] transform -translate-y-1/2">
                      <img
                        src="people1.png"
                        alt="People illustration"
                        className="w-[36rem] h-auto"
                      />
                    </div>

                    <div className="absolute left-12 top-[4rem] transform -translate-y-1/2 text-white text-left">
                      <h1 className="text-2xl font-bold mb-2 pr-4">
                        Focused faces--learning
                        <br />
                        mode: ON!
                      </h1>
                    </div>

                    <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 bg-white rounded-full h-20 w-20 flex items-center justify-center shadow-lg">
                      <ArrowRight
                        className="text-black h-6 w-6"
                        onClick={hoverHandlerThird}
                      />
                    </div>
                  </>
                </div>
              )}
              {showContentThird && (
                <div className="absolute inset-0 bg-[#5492A0] rounded-4xl flex justify-between items-center z-30">
                  <>
                    <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 bg-white rounded-full h-20 w-20 flex items-center justify-center shadow-lg">
                      <ArrowLeft
                        className="text-black h-6 w-6"
                        onClick={hoverHandlerThird}
                      />
                    </div>

                    <div className="absolute right-[4px] top-[12rem] transform -translate-y-1/2">
                      <img
                        src="people2.png"
                        alt="People illustration"
                        className="w-[36rem] h-auto"
                      />
                    </div>

                    <div className="absolute left-12 right-12 top-[4rem] transform -translate-y-1/2 text-white text-justify">
                      <h1 className="text-2xl font-bold mb-2 pr-4">
                        Laptops, lessons, and a whole lot of growth!
                      </h1>
                    </div>

                    <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 bg-white rounded-full h-20 w-20 flex items-center justify-center shadow-lg">
                      <ArrowRight className="text-black h-6 w-6" />
                    </div>
                  </>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Container third */}
        <div className="flex gap-20 mt-14">
          <div className="relative z-20 w-[600px] h-80 cursor-pointer">
            <div className="bg-[#6C64A8] w-full h-full rounded-4xl relative overflow-hidden">
              <img
                src="Group2.png"
                alt="Illustration"
                className="absolute -left-[6rem] z-10 top-16 animate-subtle-bounce"
              />
              <div className="absolute flex flex-col justify-items-center text-white top-10 left-24 text-right mr-10 z-20">
                <h1 className="text-4xl font-extrabold">
                  Get Mentored & Supported
                </h1>
                <h2 className="text-2xl font-semibold mt-2 mb-6">
                  You're not learning alone.
                </h2>
                <h2 className="text-md pl-36">
                  Stuck or need feedback? SkillShikshya’s community of mentors
                  and learners has your back with live support, interactive
                  discussions, and expert insights. You’re never on your own.
                </h2>
              </div>
            </div>
          </div>

          {/* Container fourth */}

          <div className="relative z-20 w-[600px] h-80 cursor-pointer">
            <div className="bg-[#A88964] w-full h-full rounded-4xl relative overflow-hidden">
              <img
                src="Group3.png"
                alt="Illustration"
                className="absolute -right-[3rem] z-10 top-16 animate-subtle-bounce"
              />
              <div className="absolute flex flex-col justify-items-center text-white top-10 right-24 left-6 text-left mr-10 z-20">
                <h1 className="text-4xl font-extrabold">Achieve & Showcase</h1>
                <h2 className="text-2xl font-semibold mt-2 mb-6">
                  Build your portfolio, get job-ready.
                </h2>
                <h2 className="text-md pr-36">
                  Your journey ends with achievement. Each completed project
                  builds a portfolio showcasing your skills and job readiness,
                  bringing you closer to that dream job, promotion, or your own
                  venture.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default BodyMain;
