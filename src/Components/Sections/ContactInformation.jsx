import React from "react";
import myInformation from "../../Constants/myInformation";
import { Container, Row, Col } from "react-bootstrap";
import { contactInformation, services } from "../../Constants/contactInformation";
import Select from 'react-select'
import makeAnimated from 'react-select/animated';

const ContactInformation = () => {
    const animatedComponents = makeAnimated();

    return(
        <div className="flex flex-col items-center justify-between py-4 md:py-20 px-16 md:px-40 md:my-12">
            {/* contact-header textual content */}
            <div className="flex flex-col items-center justify-center gap-3 mb-12">
                <p className="text-white text-2xl font-bold text-center">{myInformation[0].contact.title}</p>
                <p className="text-gray-300 text-sm text-center text-pretty leading-relaxed">{myInformation[0].contact.description}</p>
            </div>
            {/* contact section */}
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
                {/* form */}
                <form
                    method=""
                    action="" 
                    className="md:basis-3/4"
                >
                    <div className="flex flex-wrap items-center justify-start">
                        <Container fluid>
                            <Row className="hidden md:block">
                                <Col>
                                    <div className="flex flex-col items-start justify-center mb-4">
                                        <p className="text-gray-100 font-semibold text-start text-pretty leading-relaxed">Shoot me a message</p>
                                        <p className="text-gray-300 text-sm text-start text-pretty leading-relaxed">Available to provide professional services and support.</p>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div>
                                        <label htmlFor="full-name" className="block text-sm font-medium leading-6 text-gray-300">
                                            Full name
                                        </label>
                                        <div className="mt-2">
                                            <input
                                            type="text"
                                            name="full-name"
                                            id="full-name"
                                            autoComplete="given-name"
                                            placeholder="Enter your full name"
                                            className="block w-full rounded bg-transparent ring-1 ring-gray-600 border-0 py-2 px-3 text-white placeholder:text-gray-500 sm:text-sm sm:leading-6 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                            />
                                        </div>
                                    </div>
                                </Col>
                                <Col className="hidden md:block">
                                    <div>
                                        <label htmlFor="Email" className="block text-sm font-medium leading-6 text-gray-300">
                                            Email
                                        </label>
                                        <div className="mt-2">
                                            <input
                                            type="text"
                                            name="Email"
                                            id="Email"
                                            autoComplete="given-name"
                                            placeholder="Enter your e-m@il"
                                            className="block w-full rounded bg-transparent ring-1 ring-gray-600 border-0 py-2 px-3 text-white placeholder:text-gray-500 sm:text-sm sm:leading-6 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                            />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            {/* for mobile */}
                            <Row className="block md:hidden mt-4">
                                <Col>
                                    <div>
                                        <label htmlFor="Email" className="block text-sm font-medium leading-6 text-gray-300">
                                            Email
                                        </label>
                                        <div className="mt-2">
                                            <input
                                            type="text"
                                            name="Email"
                                            id="Email"
                                            autoComplete="given-name"
                                            placeholder="Enter your e-m@il"
                                            className="block w-full rounded border-0 bg-transparent ring-1 ring-gray-600 py-2 px-3 text-white placeholder:text-gray-500 sm:text-sm sm:leading-6 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                            />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="mt-4">
                                <Col>
                                    <label htmlFor="services" className="block text-sm font-medium leading-6 text-gray-300 mb-2">
                                        Desired Service
                                    </label>
                                    <Select
                                        options={services}
                                        components={animatedComponents}
                                        isMulti
                                        name="services"
                                        id="services"
                                        styles={{
                                            control: (provided) => ({
                                              ...provided,
                                              background: 'transparent',
                                              padding: '2px 0px',
                                              border: '1px solid rgb(75 85 99)', // You can adjust the color
                                              borderRadius: '.5rem',
                                              boxShadow: 'none',
                                              '&:hover': {
                                                border: '2px solid rgb(129 140 248)', // Adjust hover color if needed
                                              },
                                            }),
                                            menu: (provided) => ({
                                              ...provided,
                                              background: 'white', // Background color for the dropdown
                                            }),
                                          }}
                                    />    
                                </Col>
                            </Row>
                            <Row className="mt-4">
                                <Col>
                                    <div className="col-span-full">
                                        <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-300">
                                            Message
                                        </label>
                                        <div className="mt-2">
                                            <textarea
                                            id="message"
                                            name="message"
                                            rows={3}
                                            className="block w-full rounded border-0 bg-transparent ring-1 ring-gray-600 py-2 px-3 text-white placeholder:text-gray-500 sm:text-sm sm:leading-6 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                            defaultValue={''}
                                            placeholder="Describe your message"
                                            />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="mt-4">
                                <Col>
                                    <button 
                                        type="sumbit"
                                        className="text-white text-sm font-medium rounded py-2 px-3 bg-indigo-500 hover:bg-indigo-600"
                                    >
                                        Send Now
                                    </button>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </form>
                {/* businness info */}
                <div className="flex flex-col items-start justify-center gap-4 md:w-1/2">
                    <div className="flex flex-col items-start justify-center mb-4">
                        <p className="text-gray-100 font-semibold text-start text-pretty leading-relaxed">My contact information</p>
                        <p className="text-gray-300 text-sm text-start text-pretty leading-relaxed">Where you can manually get in touch.</p>
                    </div>    
                    {
                        contactInformation.map((i, idx) => (
                            <div
                                key={idx} 
                                className="flex flex-col items-start justify-start gap-2"
                            >
                                <p 
                                    className="text-sm text-pretty text-gray-100 font-bold"
                                >
                                    {i.title}
                                </p>
                                <div className="flex items-center justify-start gap-1">
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        fill="none" viewBox="0 0 24 24" 
                                        strokeWidth={1.5} 
                                        stroke="currentColor" 
                                        className="w-6 h-6 text-indigo-400"
                                    >
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            d={i.iconPath} 
                                        />
                                    </svg>
                                    <p 
                                        className="text-sm text-pretty text-gray-300 font-light px-2 py-1 rounded bg-gray-700"
                                    >
                                        {i.info}
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ContactInformation;