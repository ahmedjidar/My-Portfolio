import React from "react";
import { Link } from "react-router-dom";
import { showcase, summary } from "../../Constants/showcase";
import myInformation from "../../Constants/myInformation";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const ProjectShowcase = () => {
    const fadeInVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      };

    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, rootMargin: "0px 0px 1600px 0px" });
      
    useEffect(() => {
          if (inView) {
            controls.start("visible");
          }
        }, [controls, inView]);

    return(
        <div className="flex flex-col items-center justify-between py-4 md:py-20 px-16 md:px-40 md:mt-12">
            {/* showcase textual content */}
            <div className="flex flex-col items-center justify-center gap-3 mb-12">
                <p className="text-white text-2xl font-bold text-center">{myInformation[0].showcase.title}</p>
                <p className="text-gray-300 text-sm text-center leading-relaxed">{myInformation[0].showcase.description1}<br />{myInformation[0].showcase.description2}</p>
            </div>
            {/* projects */}
            <div className="flex flex-wrap items-center justify-center gap-12">
                {
                    showcase.map((item, idx) => (
                        <div key={idx} className="flex flex-col md:flex-row items-start justify-start gap-4">
                            <motion.div             
                                className="flex flex-col"
                                variants={fadeInVariants}
                                initial="hidden"
                                animate={controls}
                                ref={ref}
                                transition={{ duration: 0.5, delay: idx * 0.2 }}
                            >
                                {/* cover */}
                                <div                             
                                    className="p-3 rounded-t-xl ring-1 ring-indigo-400 bg-gradient-to-t from-white to-indigo-800"
                                >
                                    <motion.div
                                        variants={fadeInVariants}
                                        initial="hidden"
                                        animate={controls}
                                        ref={ref}
                                        transition={{ duration: 0.9, delay: idx * 0.8 }}         
                                    >
                                        <img 
                                            src={item.cover} 
                                            alt="Project Cover" 
                                            className="rounded-xl w-full h-auto object-cover opacity-95 shadow-md"
                                        />
                                    </motion.div>
                                </div>
                                {/* text section of the card */}
                                <div 
                                    className="flex items-center justify-center gap-4 bg-gradient-to-r from-violet-500 to-indigo-600 rounded-b-xl ring-1 ring-indigo-400 px-6 py-4"
                                >
                                    <div className="flex flex-col items-center justify-between gap-1">
                                        <p className="text-white text-pretty text-center text-lg font-semibold">{item.title}</p>
                                        <p className="text-white text-sm text-pretty font-light text-center leading-relaxed">{item.description}</p>
                                        <Link
                                            to={item.link}
                                            className="flex items-start justify-between gap-2 text-white font-medium mt-4"
                                        >
                                            <p>See Repo</p>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 hover:translate-x-[2px] hover:translate-y-[-2px] transition-all duration-300">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                            {/* learning & technologies */}
                        </div>
                    ))
                }
                <div className="flex flex-col bg-gray-700 rounded gap-3 p-4 shadow-md">
                    <p className="text-white text-pretty text-xl font-medium">{summary.title}</p>
                    <p className="text-gray-300 text-sm leading-relaxed text-pretty">{summary.description}</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectShowcase;


