import React from "react";
import { Link } from "react-router-dom";
import statsData from "../../Constants/stats";
import headerData from "../../Constants/headerData";
import socialMediaIcons from "../../Constants/socialMediaIconsPaths";
import pfp from '../../assets/me.png';
import { motion } from "framer-motion";

const ProfileOverview = () => {
    const fadeInVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      };

    return(
        <motion.div 
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 py-12 md:py-20 px-16">
            {/* for mobile */}
            <div className="block md:hidden">
                    <img 
                        src={pfp} 
                        alt="Ahmed Amin Jidar"
                        className="w-48 h-48 object-cover rounded-full bg-gray-700 ring-4 ring-gray-300 shadow-md"
                    />
            </div>
            {/* hero header text */}
            <div className="flex flex-col items-center md:items-start justify-between gap-4 mt-6">
                <p className="text-white text-2xl md:text-4xl text-center md:text-left font-semibold">
                    {headerData.bigHeaderText}
                </p>
                <p className="hidden md:block text-gray-300 text-sm leading-relaxed font-normal w-3/4">
                    {headerData.description}
                </p>
                {/* for mobile */}
                <p className="block md:hidden text-gray-300 text-sm text-center leading-relaxed font-normal w-3/4">
                    {headerData.description} 
                </p>
                <div className="flex items-center justify-start gap-4 mt-10">
                    {
                        statsData.map((stat, idx) => (
                            <motion.div 
                                key={idx} 
                                variants={fadeInVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{ duration: 0.5, delay: idx * 0.4 }}
                                className="flex flex-col gap-2 items-center md:items-start justify-center"
                            >
                                <p className="text-white text-sm font-semibold">{stat.title}</p>
                                <p className="text-gray-300 text-xs font-light pb-2 border-b-2 border-b-indigo-500">{stat.description}</p>
                            </motion.div>
                        ))
                    }
                </div>
                <div className="w-full flex items-center justify-center gap-8 mt-16">
                    {
                        socialMediaIcons.map((icon, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeInVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{ duration: 0.5, delay: idx * 0.5 }}
                            >
                                <Link to={icon.link} className="flex items-center justify-center gap-2 rounded-full bg-gray-700 p-3
                                hover:bg-indigo-600 transition-all duration-100 cursor-pointer">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-white"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d={icon.iconPath} />
                                    </svg>
                                    {/* <p className="text-gray-300 text-sm font-medium">{icon.iconTitle}</p> */}
                                </Link>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
            {/* hero picture */}
            <div className="w-96 h-auto hidden md:block">
                    <img 
                        src={pfp} 
                        alt="Ahmed Amin Jidar"
                        className="w-full h-auto object-contain rounded-full bg-gray-700 hover:bg-gray-600  
                        border-b-8 hover:border-b-indigo-500 hover:border-t-8 transition-all duration-500
                        shadow-md"
                    />
            </div>
        </motion.div>
    )
}

export default ProfileOverview;