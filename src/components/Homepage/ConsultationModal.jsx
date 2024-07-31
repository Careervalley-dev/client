import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { FiX } from "react-icons/fi";
import { FaArrowRight, FaArrowDown } from "react-icons/fa";

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

const ConsultationModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Registration Modal"
      className="modal-content2"
      overlayClassName="modal-overlay"
    >
      <div className="modal-header">
        <button onClick={onClose} className="hover:bg-[white]/50 p-3 rounded-md">
          <FiX className="text-[20px] text-white hover:text-[#235950]"/>
        </button>
      </div>
      <div className="modal-body">
        <section className="bg-gradient-to-r from-[#235950] to-[#1e3c3b] py-16 px-6 text-white">
          <div className="container mx-auto">
            <h3 className="hidden lg:block text-4xl font-bold text-center mb-8">
              Book a One-on-One Consultation
            </h3>
            <h3 className="block lg:hidden text-4xl font-bold text-center mb-8">
              Book a <br />
              One-on-One <br />
              Consultation!
            </h3>
            <p className="text-lg leading-relaxed text-center mb-8">
              Schedule a personal consultation with our experts to get tailored
              advice and guidance.
            </p>

            <div className="flex flex-col lg:flex-row justify-center items-center gap-x-9">
              <div className="flex flex-col justify-center mb-8">
                <a
                  href="mailto:contact@career-valley.com"
                  className="bg-white flex flex-col lg:flex-row justify-center items-centers text-[#235950] py-2 px-6 rounded-lg hover:bg-gray-200 transition-all book-now-container"
                >
                  <span className="book-now-text">Book Now</span>
                  <FaArrowRight className="book-now-arrow hidden ml-5 lg:inline-block" />
                  <FaArrowDown className="book-now-arrow inline-block lg:hidden" />                
                </a>
              </div>
              <div className="text-center">
                <p className="text-lg mb-2">
                  Email:{" "}
                  <a
                    href="mailto:contact@career-valley.com"
                    className="underline"
                  >
                  divya@thecareervalley.com                  
                </a>
                </p>
                <p className="text-lg">
                  Phone:{" "}
                  <a href="tel:+1234567890" className="underline">
                    +91 8309-071632
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <style jsx="true">{`
          .book-now-container {
            position: relative;
            display: flex;
            align-items: center;
          }

          .book-now-text {
            position: relative;
            padding-bottom: 2px;
          }

          .book-now-arrow {
            animation: bounce 1.5s infinite;
          }

          @keyframes bounce {
            0%,
            20%,
            50%,
            80%,
            100% {
              transform: translateY(0);
            }
            40% {
              transform: translateY(-8px);
            }
            60% {
              transform: translateY(-4px);
            }
          }

          @media (min-width: 1024px) {
            @keyframes bounce {
              0%,
              20%,
              50%,
              80%,
              100% {
                transform: translateX(0);
              }
              40% {
                transform: translateX(8px);
              }
              60% {
                transform: translateX(4px);
              }
            }
          }
        `}</style>
      </div>
    </Modal>
  );
};

export default ConsultationModal;
