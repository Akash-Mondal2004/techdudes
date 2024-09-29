import React from 'react'
import './home.css'
import img1 from "./images/homeimage.png";
import img2 from "./images/companylogo1.png";
import img3 from "./images/companylogo2.png";
import img4 from "./images/companylogo3.png";
import img5 from "./images/companylogo4.png";
import trustimg from "./images/trustt.png";
import newway from "./images/newway.png";
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
const Home = () => {
    return (
        <div className='home'>
            {/* <div className='container'>
                <div class="row">
                    <div class="col-2 text-left">
                        <h1 >The only learning platform that helps you score better marks and support self-growth.</h1>
                        <p>Study with a self-aware adaptive system, understand, remember, and master subjects without worry, and know your academic strengths and weaknesses to truly succeed.</p>
                        <div className="homebutton">
                            <a href="" class="button-64">Start Now - Its Free</a>
                            <a href="" class="button-64">Book a Demo </a>
                        </div>
                    </div>

                    <div class="col-2">
                        <img src={img1} />
                    </div>
                </div>
            </div> */}
            <div className="About-container">
                <div className="container m-auto px-6 text-gray-600">
                    <div className="space-y-6 md:space-y-0 md:flex gap-x-18 lg:items-center lg:gap-12">
                        
                        <div className="md:7/12 lg:w-6/12 title">
                            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl heading ">
                            The only learning platform that helps you score better marks and support self-growth.
                            </h2>
                            <p className="mt-6 text-gray-600 text-left">
                            Study with a self-aware adaptive system, understand, remember, and master subjects without worry, and know your academic strengths and weaknesses to truly succeed.
                            </p>
                            <div className="flex items-center ml-4 mt-9">
                                <Link
                                    to="/loginuser"
                                    className="abc text-black bg-white-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 focus:outline-none"
                                >
                                   Get started
                                </Link>
                                <Link
                                    to="/createuser"
                                    className=" login text-black    hover:bg-red-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 ml-2 focus:outline-none"
                                >
                                    Book a demo
                                </Link>
                            </div>

                        </div>
                        <div className="md:5/12 lg:w-6/12">
                            <img
                                src={img1}
                                alt="image"
                            />
                        </div>
                    </div>

                </div>
            </div>
            <div class="slider">
                <div class="slide-track">
                    <div class="slide">
                        <img src={img2} alt="" />
                    </div>
                    <div class="slide">
                        <img src={img3} alt="" />
                    </div>
                    <div class="slide">
                        <img src={img4} alt="" />
                    </div>
                    <div class="slide">
                        <img src={img5} alt="" />
                    </div>
                    <div class="slide">
                        <img src={img2} alt="" />
                    </div>
                    <div class="slide">
                        <img src={img3} alt="" />
                    </div>
                </div>
            </div>
            <div className="py-16 bg-white"></div>
            <div className="About-container">
                <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                    <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                        <div className="md:5/12 lg:w-6/12">
                            <img
                                src={trustimg}
                                alt="image"
                            />
                        </div>
                        <div className="md:7/12 lg:w-6/12 title">
                            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl heading ">
                                Traditional Ways of Studying, <span className='text-#3d6cca'>Quite Frustrating</span>
                            </h2>
                            <p className="mt-6 text-gray-600 text-left">
                                Challenges of Traditional Studying
                            </p>
                            <ol className="mt-4 text-gray-600 text-left list-decimal list-inside">
                                <li >Monotony: Repetitive and unengaging study methods can lead to boredom.</li>
                                <li>Passive Learning: Methods like rote memorization often lead to shallow understanding.</li>
                                <li>Limited Interaction: Studying alone can limit discussion and different perspectives.</li>
                                <li>Time Management: It can be difficult to balance study time with other responsibilities</li>
                                <li>Lack of Resources: Sometimes traditional methods do not provide enough variety in materials and perspectives</li>
                            </ol>

                        </div>

                    </div>

                </div>
            </div>
            <div className="About-container mt-10">
                <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                    <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                       
                        <div className="md:7/12 lg:w-6/12 title">
                            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl heading ">
                            Disover New Online Stress-free learning Solutions with ORION
                            </h2>
                            <p className="mt-6 text-gray-600 text-left">
                            Benefits of Hyggex Learning Solutions
                            </p>
                            <ul className="mt-4 text-gray-600 text-left list-disc">
                                <li >Monotony: Repetitive and unengaging study methods can lead to boredom.</li>
                                <li>Passive Learning: Methods like rote memorization often lead to shallow understanding.</li>
                                <li>Limited Interaction: Studying alone can limit discussion and different perspectives.</li>
                                <li>Time Management: It can be difficult to balance study time with other responsibilities</li>
                                <li>Lack of Resources: Sometimes traditional methods do not provide enough variety in materials and perspectives</li>
                            </ul>

                        </div>
                        <div className="md:5/12 lg:w-6/12">
                            <img
                                src={newway}
                                alt="image"
                            />
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}
export default Home;
