import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import experience from '../Constants/experience';

const ExperienceDetailsModal = (props) => {
  return (
    <div className='mx-4'>
      <Modal 
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header 
            closeButton
            className='bg-gray-700'
        >
            <Modal.Title
                className='text-white text-pretty leading-relaxed font-semibold'
            >
                Achievements & Other
            </Modal.Title>
        </Modal.Header>
        <Modal.Body
            className='bg-gray-700'
        >
            <div className='flex flex-col items-start justify-start gap-2'>
                {
                    props.detailsOf.achievements.map((content, index) => (
                        <div 
                            key={index}
                            className='flex items-start justify-start gap-2'
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-indigo-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <p className="text-gray-300 text-pretty leading-relaxed">
                                {content}
                            </p>
                        </div>
                    ))
                }
            </div>
            <div className='flex items-center justify-start gap-2 mt-4'>
                {
                    props.detailsOf.about.map((content, index) => (
                        <p
                            key={index} 
                            className="text-white text-sm font-medium rounded bg-indigo-400 bg-opacity-15 p-2"
                        >
                            {content}
                        </p>
                    ))
                }
            </div>
        </Modal.Body>
        <Modal.Footer
            className='bg-gray-700'
        >
          <button
            className='text-gray-300 hover:text-white font-medium hover:bg-gray-300 hover:bg-opacity-15 rounded p-2'
            onClick={props.onHide}
            >
                Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ExperienceDetailsModal;