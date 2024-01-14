import React from "react";
import proficiencyData from "../../Constants/proficiencyData";
import myInformation from "../../Constants/myInformation";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const TechnicalProficiency = () => {
    const fadeInVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      };

    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, rootMargin: "0px 0px 500px 0px" });
    
    useEffect(() => {
        if (inView) {
          controls.start("visible");
        }
      }, [controls, inView]);

    return(
        <div className="flex flex-col items-center justify-between py-4 md:py-20 px-16 md:px-40">
            {/* about proficiency text */}
            <div className="flex flex-col items-center justify-center gap-3 mb-12">
                <p className="text-white text-2xl font-bold text-center">{myInformation[0].proficiency.title}</p>
                <p className="text-gray-300 text-sm leading-relaxed text-center">{myInformation[0].proficiency.description1}<br />{myInformation[0].proficiency.description2}</p>
            </div>
            {/* cards */}
            <div className="flex flex-col items-center justify-between gap-8 shadow-sm">
                {
                    proficiencyData.map((data, idx) => (
                        <motion.div 
                            key={idx} 
                            className="w-full flex flex-col md:flex-row items-center justify-between gap-8 bg-gray-700 rounded p-8"
                            variants={fadeInVariants}
                            initial="hidden"
                            animate={controls}
                            transition={{ duration: 0.5, delay: idx * 0.33 }}
                            ref={ref}
                        >
                            <div className="basis-1/4 flex flex-col items-center justify-center md:items-start md:justify-start gap-2 text-indigo-400">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d={data.icon} />
                                </svg>
                                <p className="text-sm font-medium">{data.title}</p>
                            </div>
                            <div>
                                <p className="text-gray-300 text-sm leading-relaxed font-normal">{data.description}</p>
                            </div>
                            <Link 
                                className="text-indigo-400"
                                target="_blank"
                                to="https://www.geeksforgeeks.org/are-data-structures-and-algorithms-important-for-web-developers/"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:translate-x-[2px] hover:translate-y-[-2px] transition-all duration-300">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </Link>
                        </motion.div>
                    ))
                }
            </div>
        </div>
    )
}

export default TechnicalProficiency;