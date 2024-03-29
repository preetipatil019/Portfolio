import React from "react";
import WorkImg from "../assets/Swiggy_img.jpg"
import YoutubeImg from "../assets/Youtube_img.jpg"
import QuizImg from "../assets/Quiz_img.webp"

const Work = () => {
    return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
        <div className="max-w-[1000px] mx-auto flex flex-col justify-center  w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600" >Work</p>
                <p className="py-6">Check out some of my recent work</p>
            </div>
            {/* card container*/}
            <div  className="grid sm:grid-col-2 md:grid-col-3 md:grid-flow-col gap-4">
                {/* card item -grid item*/}
            <div style={{backgroundImage:`url(${QuizImg})`}} className="bg-no-repeat shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto w-auto content-div">
                 {/* hover effect */}
                    <div className="opacity-0 group hover:opacity-100">
                        <span className="text-4xl  font-bold tracking-wider font-sans">
                            React JS Application
                        </span>
                        <div className="pt-8 text-center">
                           <a href="https://preeti-baliga-my-quiz-app.netlify.app/">
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                    Demo
                                </button>
                            </a>
                            <a href="https://github.com/preetipatil019/my-quiz-app">
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                    Code
                                </button>
                            </a>
                        </div>
                    </div>
                    </div>
                {/* card2 */}
                 <div style={{backgroundImage:`url(${YoutubeImg})`}} className="bg-no-repeat shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                 {/* hover effect */}
                    <div className="opacity-0 group hover:opacity-100">
                        <span className="text-4xl font-bold tracking-wider font-sans">
                            React JS Application
                        </span>
                        <div className="pt-8 text-center">
                           <a href="https://preetiyoutube.netlify.app/">
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                    Demo
                                </button>
                            </a>
                            <a href="https://github.com/preetipatil019/reactyoutubepro">
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                    Code
                                </button>
                            </a>
                        </div>
                    </div>
                    </div>
                      {/* card2 */}
                          <div style={{backgroundImage:`url(${WorkImg})`}} className="bg-no-repeat shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                 {/* hover effect */}
                    <div className="opacity-0 group hover:opacity-100">
                        <span className="text-4xl font-bold tracking-wider font-sans">
                            React JS Application
                        </span>
                        <div className="pt-8 text-center">
                           <a href="https://preetiswiggy.netlify.app/">
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                    Demo
                                </button>
                            </a>
                            <a href="https://github.com/preetipatil019/reactswiggypro">
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                    Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default Work;