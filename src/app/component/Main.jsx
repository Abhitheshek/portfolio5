"use client"
import React, { useEffect } from "react";
import App from "./App";
import Avatar from "./Avatar";

import Goal from "./Goal.jsx";
// import Typewriter from 'typewriter-effect/dist/core';

import { IoMdMenu, IoMdClose, IoLogoLinkedin } from "react-icons/io";
import { useState } from "react";
import TicTacToe from "./TicTacToe.jsx";
// import { AnimatedTestimonialsDemo } from "./components/ui/Testimonial.jsx";
import ContactUs from "./Contectus.jsx";
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Mywork from "./Mywork.jsx";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Test = () => {

    const [open, setopen] = useState(false)

    const { scrollYProgress } = useScroll();
    const [isMobile, setIsMobile] = useState(false);

    const leftCardX = useTransform(scrollYProgress, [0, 0.3], [-1000, 0]);
    const rightCardX = useTransform(scrollYProgress, [0, 0.3], [1000, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setIsMobile(window.innerWidth < 1024);
            const handleResize = () => {
                setIsMobile(window.innerWidth < 1024);
            };
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    // useEffect(() => {
    //     if (typeof window !== "undefined") {
    //         new Typewriter('#typed', {
    //             strings: [' Fronted Developer', ' Backend Developer', ' Creative thinker', ' BathRoom Singer'],
    //             autoStart: true,
    //             loop: true,
    //             cursor: '|',
    //             delay: 75,
    //         });
    //     }
    // }, []);

    return (
        <>

            <div className=" main overflow-x-hidden  w-screen h-screen bg-gradient-to-br from-stone-800 to-slate-600  ">
                {/* Navbar */}
                <nav className="sticky top-0 z-40 flex items-center justify-between lg:px-6 px-3 lg:py-4 py-2 bg-black bg-opacity-70 backdrop-blur-md rounded-md lg:m-4 m-2">
                    <h1 className="md:block font-serif hidden text-xl font-bold text-orange-600 cursor-pointer">AbhiTheShek</h1>
                    <IoMdMenu onClick={() => setopen(prev => !prev)} className="md:hidden h-8 w-10 text-white" />

                    <ul className="md:flex hidden space-x-8 text-black font-medium">
                        <li><a href="#home" className="hover:text-orange-700 text-white">Home</a></li>
                        <li><a href="#about" className="hover:text-orange-700 text-white">About</a></li>
                        <li><a href="#work" className="hover:text-orange-700 text-white">Work</a></li>
                        <li><a href="#contact" className="hover:text-orange-700 text-white">Contact</a></li>
                    </ul>
                    <a href="#contact">
                    <button className="bg-orange-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-orange-500">Hire me</button>
                    </a>
                    
                </nav>

                {open && (
                    <div className="md:hidden h-[70vh] w-full absolute top-20 p-2 z-50">

                        <div className="h-full w-full flex flex-col items-center justify-center gap-5 bg-gradient-to-br from-stone-600 to-slate-700 bg-opacity-5 backdrop-blur-xl rounded-md text-white   ">
                            <IoMdClose onClick={() => setopen(prev => !prev)} className="absolute top-6 right-6 text-3xl rounded-full m-2 border " />
                            <div className="flex w-full  flex-col gap-4 items-center justify-center text-black font-semibold font-serif px-4">
                                <div className="w-full text-center"><a href="#home"
                                onClick={() => setopen(prev => !prev)}
                                 ><div className="hover:text-orange-700 text-white  py-3 rounded-xl w-full bg-orange-500 ">Home
                                    </div></a></div>
                                    <div className="w-full text-center"><a href="#about"
                                onClick={() => setopen(prev => !prev)}
                                 ><div className="hover:text-orange-700 text-white  py-3 rounded-xl w-full bg-orange-500 ">About
                                    </div></a></div>
                                    <div className="w-full text-center"><a href="#work"
                                onClick={() => setopen(prev => !prev)}
                                 ><div className="hover:text-orange-700 text-white  py-3 rounded-xl w-full bg-orange-500 ">Work
                                    </div></a></div>
                                    <div className="w-full text-center"><a href="#contact"
                                onClick={() => setopen(prev => !prev)}
                                 ><div className="hover:text-orange-700 text-white  py-3 rounded-xl w-full bg-orange-500 ">Contact
                                    </div></a></div>

                                    <div className="text-center mt-6">
                                                  
                                                  <div className="flex justify-center space-x-4">
                                                    <a
                                                       href="https://www.instagram.com/quantumabhishek?igsh=MXRpOHVndWJibWh3eA%3D%3D"
                                                      className="bg-white p-3 rounded-full hover:bg-red-500/20 hover:text-red-600 transition-all"
                                                    >
                                                      <FaInstagram className='text-red-500 h-6 w-6' />
                                                    </a>
                                                    <a
                                                          href="https://x.com/AbhishekQu93255?t=ByVpKhA45LWHCCoRRPqZig&s=09"
                                                      className="bg-white p-3 rounded-full hover:bg-blue-500/20 hover:text-blue-600 transition-all"
                                                    >
                                                    <FaTwitter className='text-blue-500 h-6 w-6' />
                                                    </a>
                                                    <a
                                                      href="https://www.linkedin.com/in/abhishek-yadav-b2a96027a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                                      className="bg-white p-3 rounded-full hover:bg-blue-500/20 hover:text-blue-500 transition-all"
                                                    >
                                                      <IoLogoLinkedin className='text-blue-700 h-6 w-6' />
                                                    </a>
                                                    <a
                                                     href="https://github.com/Abhitheshek"
                                                      className="bg-white p-3 rounded-full hover:bg-slate-500/20 hover:text-white transition-all"
                                                    >
                                                     <FaGithub className='h-6 w-6' />
                                                    </a>
                                                  </div>
                                                </div>
                            </div>

                        </div>
                    </div>
                )}

                <div className="w-full min-h-[100vh] lg:px-4  px-2 mb-4 flex flex-col gap-3  ">

                    {/* page1 */}
                    <div id="home" className="  w-full min-h-[90vh] flex flex-col  md:flex-row  items-start  md:text-left  justify-center bg-gradient-to-br from-stone-900 to-slate-800  rounded-lg pb-6  ">
                        <div className=" flex flex-col justify-center  items-end left h-full md:w-1/2 w-full ml-8 mt-10">
                            <div className="detail font-bold">
                                <span className=" text-white inline-block lg:text-5xl md:text-4xl text-3xl pt-12 md:pb-6 lg:pb-5">Hii,There</span>
                                <div className="space-x-2 mb-4">
                                    <span className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold">I'm</span>
                                    <span className="text-orange-600 text-2xl sm:text-3xl lg:text-4xl">Abhishek</span>
                                    <span className="text-white text-2xl sm:text-3xl lg:text-4xl">Yadav</span>
                                </div>
                                <div className="mb-4">
                                    <span className="text-white text-2xl sm:text-3xl lg:text-3xl">I'm a </span>
                                    {/* Desktop/Tablet Version */}
                                    <br className="lg:hidden " />
                                    <span className="text-orange-700  md:inline-block text-2xl sm:text-3xl" id="typed">
                                        Developer
                                    </span>
                                   
                                </div>
                                <div className="text-lg sm:text-xl text-orange-900 mb-6 max-w-md mx-auto lg:mx-0">
                                    More Than Code: My Creative Process
                                </div>
                                <a href="/UnderConstruction.jsx">
                                    <button className="text-sm inline-block bg-orange-700 px-5 py-3 rounded-lg hover:bg-orange-500 shadow-lg transition ">
                                        Download CV
                                    </button>
                                </a>
                            </div>

                        </div>
                        <div className=" Right  hidden h-full w-1/2 mr-4 md:flex items-center justify-center">
                            <Avatar />
                        </div>
                        <div className=" Right md:hidden h-full w-full pt-10 mr-4 flex items-center justify-center">
                            <img src="./view-3d-man-holding-laptop-Photoroom.png" alt="img" />
                        </div>

                    </div>

                   <AnimatePresence>
                        <div id="about" className="  w-full min-h-full flex flex-col lg:flex-row items-center justify-center lg:bg-gradient-to-br from-stone-900 to-slate-800 bg-opacity-10 backdrop-blur-md rounded-lg md:gap-2 gap-0">
                            <motion.div
                                className="left h-full  w-full md:w-full lg:w-1/2 lg:ml-4"
                                style={!isMobile ? { x: leftCardX, opacity } : {}}
                                initial={{ x: isMobile ? 0 : -1000, opacity: 0 }}
                                animate={isMobile ? { x: 0, opacity: 1 } : {}}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <div className="profile-card xl:h-[40vh]  md:min-h-[80vh] w-full backdrop-blur-lg bg-opacity-10 bg-gradient-to-br from-stone-700 to-slate-800  border-2 rounded-lg border-blue-600 p-4 xl:p-4 md:py-16 sm:p-4">
                                    <motion.div
                                        className="flex items-center mb-4"
                                        initial={{ y: -50, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.5 }}
                                        viewport={{ once: true }}
                                    >
                                        <motion.img
                                            whileHover={{ scale: 1.1 }}
                                            alt="Profile picture of a cartoon character"
                                            className="rounded-full mr-4"
                                            height="100"
                                            src="https://storage.googleapis.com/a1aa/image/y1EuIwDW95bxEJPQzVjEo9GSS7nEdIBZrStdyz2qgDxucg6E.jpg"
                                            width="100"
                                        />
                                        <div>
                                            <motion.p
                                                initial={{ x: -50, opacity: 0 }}
                                                whileInView={{ x: 0, opacity: 1 }}
                                                transition={{ delay: 0.2 }}
                                                viewport={{ once: true }}
                                            >
                                                Name: <span className="font-bold text-white">Abhishek Yadav</span>
                                            </motion.p>
                                            <motion.p
                                                initial={{ x: -50, opacity: 0 }}
                                                whileInView={{ x: 0, opacity: 1 }}
                                                transition={{ delay: 0.3 }}
                                                viewport={{ once: true }}
                                            >
                                                Age: <span className="font-bold text-white">20</span>
                                            </motion.p>
                                            <motion.p
                                                initial={{ x: -50, opacity: 0 }}
                                                whileInView={{ x: 0, opacity: 1 }}
                                                transition={{ delay: 0.4 }}
                                                viewport={{ once: true }}
                                            >
                                                From: <span className="font-bold text-white">India</span>
                                            </motion.p>
                                        </div>
                                    </motion.div>

                                    <motion.h2
                                        className="font-bold text-lg mb-2"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: 0.5 }}
                                        viewport={{ once: true }}
                                    >
                                        SKILLS
                                    </motion.h2>

                                    <div>
                                        {/* WebGL Skill */}
                                        <motion.p
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            transition={{ delay: 0.6 }}
                                            viewport={{ once: true }}
                                            className="mb-2"
                                        >
                                            ReactJS
                                        </motion.p>
                                        <div className="skills-bar bg-[#34cdfc] rounded-lg">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: "80%" }}
                                                transition={{ duration: 1, delay: 0.7 }}
                                                viewport={{ once: true }}
                                                className="bg-[#fc9801] h-2 rounded-lg"
                                            />
                                        </div>

                                        {/* ReactJS Skill */}
                                        <motion.p
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            transition={{ delay: 0.8 }}
                                            viewport={{ once: true }}
                                            className="my-1"
                                        >
                                            NextJS
                                        </motion.p>
                                        <div className="skills-bar bg-[#34cdfc] rounded-lg">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: "70%" }}
                                                transition={{ duration: 1, delay: 0.9 }}
                                                viewport={{ once: true }}
                                                className="bg-[#fc9801] h-2 rounded-lg"
                                            />
                                        </div>

                                        {/* JavaScript Skill */}
                                        <motion.p
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            transition={{ delay: 1.0 }}
                                            viewport={{ once: true }}
                                            className="my-1"
                                        >
                                            JavaScript
                                        </motion.p>
                                        <div className="skills-bar bg-[#34cdfc] rounded-lg">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: "60%" }}
                                                transition={{ duration: 1, delay: 1.1 }}
                                                viewport={{ once: true }}
                                                className="bg-[#fc9801] h-2 rounded-lg"
                                            />
                                        </div>

                                        {/* HTML + CSS Skill */}
                                        <motion.p
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            transition={{ delay: 1.2 }}
                                            viewport={{ once: true }}
                                            className="my-1"
                                        >
                                            HTML + CSS
                                        </motion.p>
                                        <div className="skills-bar bg-[#34cdfc] rounded-lg">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: "90%" }}
                                                transition={{ duration: 1, delay: 1.3 }}
                                                viewport={{ once: true }}
                                                className="bg-[#fc9801] h-2 rounded-lg"
                                            />
                                        </div>

                                        {/* Backend Skill */}
                                        <motion.p
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            transition={{ delay: 1.4 }}
                                            viewport={{ once: true }}
                                            className="my-1"
                                        >
                                            Backend
                                        </motion.p>
                                        <div className="skills-bar bg-[#34cdfc] rounded-lg">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: "50%" }}
                                                transition={{ duration: 1, delay: 1.5 }}
                                                viewport={{ once: true }}
                                                className="bg-[#fc9801] h-2 rounded-lg"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex flex-col justify-center items-center Right h-full lg:w-1/2 w-full lg:mr-4"
                                style={!isMobile ? { x: rightCardX, opacity } : {}}
                                initial={{ x: isMobile ? 0 : 1000, opacity: 0 }}
                                animate={isMobile ? { x: 0, opacity: 1 } : {}}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <div className="inner rounded-lg w-full xl:h-[40vh]   md:min-h-[80vh] flex flex-wrap gap-4 items-center justify-center  backdrop-blur-lg bg-opacity-10 bg-gradient-to-br from-stone-700 to-slate-800 border-2 border-blue-600 xl:py-12 lg:p-8 p-4 mt-6 mb-6">
                                    {[
                                        { src: "./webIcon/html-5.png", alt: "HTML Icon" },
                                        { src: "./webIcon/css-3.png", alt: "CSS Icon" },
                                        { src: "./webIcon/js.png", alt: "JavaScript Icon" },
                                        { src: "./webIcon/Material UI.png", alt: "Material UI Icon" },
                                        { src: "./webIcon/Tailwind CSS.png", alt: "Tailwind CSS Icon" },
                                        { src: "./webIcon/Python.png", alt: "Python Icon" },
                                        { src: "./webIcon/React.png", alt: "React Icon" },

                                        { src: "./webIcon/TypeScript.png", alt: "TypeScript Icon" },
                                        { src: "./webIcon/Node.js.png", alt: "Node.js Icon" },
                                        { src: "./webIcon/NPM.png", alt: "NPM Icon" },
                                        { src: "./webIcon/Express.png", alt: "Express Icon" },
                                        { src: "./webIcon/Postman.png", alt: "Postman Icon" },
                                        { src: "./webIcon/Nodemon.png", alt: "Nodemon Icon" },
                                        { src: "./webIcon/MongoDB.png", alt: "MongoDB Icon" },
                                        { src: "./webIcon/Mongoose.js.png", alt: "Mongoose.js Icon" },
                                        { src: "./webIcon/Three.js.png", alt: "Three.js Icon" },
                                        { src: "./webIcon/Next.js.png", alt: "Next.js Icon" },
                                        { src: "./webIcon/Blender.png", alt: "Blender Icon" },
                                    ].map((icon, index) => (
                                        <motion.div
                                            key={index}

                                            id="skillicon"
                                            className="lg:p-2 p-4 sm:p-3   hover:bg-white "
                                            whileHover={{
                                                scale: 1.1,
                                                rotate: 5,
                                                transition: { duration: 0.2 }
                                            }}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{
                                                opacity: 1,
                                                y: 0,
                                                transition: {
                                                    delay: index * 0.1,
                                                    duration: 0.5
                                                }
                                            }}
                                            viewport={{ once: true }}
                                        >
                                            <img
                                                src={icon.src}
                                                alt={icon.alt}
                                                className="h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16"
                                            />
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </AnimatePresence> {/* page2 */}
                    
                    {/* page3 */}
                    {/* <div className=" relative  items-center justify-center w-full  min-h-screen flex  rounded-lg md:ml-12 ml-6">
                        <Carousel />
                    </div> */}

                    {/* page4 */}

                    <div id="work">
                        <Mywork />
                    </div>

                    {/* page4 */}
                    <div className="w-full  h-screen hidden md:flex bg-gradient-to-br from-stone-900 to-slate-800 bg-opacity-10 backdrop-blur-md rounded-lg ">
                        <div className="w-full h-screen">
                            <App />
                        </div>

                    </div>

                    {/* page5 */}
                    <div className="w-full min-h-screen md:flex-row justify-center items-center flex flex-col   bg-gradient-to-br from-stone-900 to-slate-800 bg-opacity-10 backdrop-blur-md  rounded-lg ">
                        <Goal></Goal>

                    </div>

                    {/* page7 */}
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="w-full min-h-screen font-sans justify-center items-center md:flex flex-col    bg-white bg-opacity-10 backdrop-blur-md  rounded-lg ">

                        <TicTacToe />

                    </motion.div>

                   

                    <div id="contact" className="w-full min-h-screen  justify-center items-center md:flex flex-col bg-gradient-to-br from-stone-900 to-slate-800     bg-opacity-10 backdrop-blur-md  rounded-lg ">

                        <ContactUs />

                    </div>

                </div >

            </div>

        </>
    );
};

export default Test;

