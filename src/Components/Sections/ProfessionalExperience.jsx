import React, { useState } from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import ExperienceDetailsModal from '../../Common/ExperienceDetailsModal';
import { XMarkIcon } from '@heroicons/react/24/outline';
import 'react-vertical-timeline-component/style.min.css';
import myInformation from "../../Constants/myInformation";
import experience from "../../Constants/experience";


const ProfessionalExperience = () => {
    const [show, setShow] = useState(false);
    const [selectedExperience, setSelectedExperience] = useState(experience[0]);

    const handleShow = (experience) => {
        setSelectedExperience(experience);
        setShow(true);
    };

    return(
        <div className="flex flex-col items-center justify-between py-4 md:py-20 px-16 md:px-40 md:mt-12">
            {/* experience textual content */}
            <div className="flex flex-col items-center justify-center gap-3 mb-12">
                <p className="text-white text-2xl font-bold text-center">{myInformation[0].experience.title}</p>
                <p className="text-gray-300 text-sm text-center text-pretty leading-relaxed">{myInformation[0].experience.description1}<br />{myInformation[0].experience.description2}</p>
            </div>
            {/* experience timeline */}
            <div>
            <VerticalTimeline>
                {
                    experience.map((x, idx) => (
                            <VerticalTimelineElement
                                key={idx}
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: x.colorStyle, color: '#fff' }}
                                contentArrowStyle={{ borderRight: `7px solid  ${x.colorStyle}` }}
                                date={x.duration}
                                iconStyle={{ background: x.colorStyle, color: '#fff' }}
                                icon={
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" className="w-6 h-6 text-white">
                                        <path strokeLinecap="round" strokeLinejoin="round" d={x.iconPath} />
                                    </svg>
                                }
                                position={x.position}
                            >
                                <div>
                                    <h3 className="vertical-timeline-element-title text-white text-pretty leading-relaxed font-semibold">{x.title}</h3>
                                    <h4 className="vertical-timeline-element-subtitle text-white text-xs text-pretty leading-relaxed mt-2">{x.company} at {x.location}</h4>
                                    <h3 className="text-white text-sm text-pretty leading-relaxed font-normal mt-4">
                                        + {x.description}
                                    </h3>
                                </div>
                                <button 
                                    onClick={() => handleShow(x)}
                                    className="flex items-start justify-start gap-1 hover:rounded hover:bg-gray-300 hover:bg-opacity-15 p-2 mt-4"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                                    </svg>
                                    <h3 className="text-sm font-medium">More details</h3>
                                </button>
                            </VerticalTimelineElement>
                        ))
                    }
                </VerticalTimeline>
                <ExperienceDetailsModal 
                    show={show}
                    onHide={() => setShow(false)}
                    detailsOf={selectedExperience}
                />
            </div>
        </div>
    )
}

export default ProfessionalExperience;


