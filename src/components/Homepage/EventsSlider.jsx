import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect, useRef } from "react";
import Modal from "react-modal";
import { SlCalender } from "react-icons/sl";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { fetchEventsByStatus, fetchEventById, registerForEvent } from "../../redux/features/eventSlice";
import { useLocation, useNavigate } from "react-router-dom";
import Heading from "../common/Heading";
import { useSelector, useDispatch } from "react-redux";
import Loader from '../../components/common/loader/Loader';
import { GiAbstract004 } from "react-icons/gi";




Modal.setAppElement("#root");

const NextArrow = ({ onClick }) => {
  return (
    <button
      className="absolute flex justify-center items-center right-[10px] top-[-30px] lg:top-4 lg:right-4 bg-[#235950] text-white p-2 rounded-md shadow-lg hover:bg-gray-700 focus:outline-none z-10"
      onClick={onClick}
    >
      <MdKeyboardArrowRight />
    </button>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <button
      className="absolute flex justify-center items-center top-[-30px] right-[60px] lg:top-4 lg:right-16 bg-[#235950] text-white p-2 rounded-md shadow-lg hover:bg-gray-700 focus:outline-none z-10"
      onClick={onClick}
    >
      <MdKeyboardArrowLeft />
    </button>
  );
};

const EventsSlider = () => {
  const [modal1IsOpen, setModal1IsOpen] = useState(false);
  const [modal2IsOpen, setModal2IsOpen] = useState(false);
  const [confirmationModalIsOpen, setConfirmationModalIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const { events, event, status, error } = useSelector((state) => state.events);
  const { user, token, isLoggedIn } = useSelector((state) => state.auth);

  const sliderRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();



  useEffect(() => {
    dispatch(fetchEventsByStatus("Upcoming"));
  }, [dispatch]);

  console.log(events);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    customPaging: (i) => <div className="w-8 h-1 bg-[#235950] mx-1"></div>,
    appendDots: (dots) => (
      <div>
        <ul className="flex justify-center mt-4">{dots}</ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
  };

  const openModal1 = async (eventId) => {
    await dispatch(fetchEventById(eventId));
    setSelectedEvent(event);
    setModal1IsOpen(true);
  };

  const closeModal1 = () => {
    setModal1IsOpen(false);
  };

  const openModal2 = (event) => {
    if (isLoggedIn) {
      setSelectedEvent(event);
      setConfirmationModalIsOpen(true);
    } else {
      navigate('/auth/login', { state: { from: location } });
    }
  };

  const closeModal2 = () => {
    setModal2IsOpen(false);
  };

  const closeConfirmationModal = () => {
    setConfirmationModalIsOpen(false);
  };

  const goToEventsPage = () => {
    navigate("/events");
  };

  const handleRegister = async () => {
    if (isLoggedIn && selectedEvent) {
      await dispatch(registerForEvent({ eventId: selectedEvent._id, token }));
      closeConfirmationModal();
    }
  };

  useEffect(() => {
    if (modal1IsOpen && event) {
      setSelectedEvent(event);
    }
  }, [modal1IsOpen, event]);

  return (
    <div>
      <Heading normalText="Our upcoming" highlightText="Events!"/>
      {status === 'loading' && <Loader />}
      <div className="container h-[600px] flex justify-center items-center lg:mx-auto px-4 relative">
        <div className="flex justify-between items-center mt-8 absolute top-1 lg:top-1 right-[160px] lg:right-[110px]">
          <button
            onClick={goToEventsPage}
            className="flex justify-center items-center bg-[#235950] text-white p-2 rounded-md shadow-lg hover:bg-gray-700 focus:outline-none z-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
        </div>

        <Slider
          ref={sliderRef}
          {...settings}
          className="lg:py-12 w-[400px] md:w-[768px] lg:w-[1300px]"
        >
          {events.map((event, index) => (
            <div key={index} className="flex justify-center items-center">
              <div className="flex justify-center items-center pt-9 z-99 h-[450px]">
                <div className="relative flex w-60 lg:w-80 flex-col justify-center rounded-xl bg-[#e8f1f0] bg-clip-border text-white shadow-xl">
                  <div className="relative mx-4 -mt-6 h-30 lg:h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-black shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                    <img src={event.image} />
                  </div>
                  <div className="p-6 font-anta">
                    <h5 className="mb-2 text-black block font-dosis text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                      {event.title}
                    </h5>
                    <p className="flex items-center gap-x-2 text-black font-cat text-base font-light leading-relaxed antialiased">
                      <SlCalender /> {formatDate(event.date)}
                    </p>
                    <p className="flex items-center gap-x-2 text-black font-cat text-base font-light leading-relaxed antialiased">
                      <IoLocationOutline />
                      {event.location}
                    </p>
                    <p className="flex items-center gap-x-2 text-black font-cat text-base font-light leading-relaxed antialiased">
                      <FaRegClock />
                      {event.time}
                    </p>
                  </div>
                  <div className=" flex p-6 pt-0 gap-x-4">
                    <button
                      data-ripple-light="true"
                      type="button"
                      onClick={() => openModal1(event._id)}
                      className="select-none rounded-lg bg-[#235950] py-3 px-4 lg:px-6 text-center align-middle font-dosis text-xs font-bold uppercase text-white shadow-md shadow-[#235950]/20 transition-all hover:shadow-lg hover:shadow-[#235950]/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    >
                      Read More
                    </button>
                    <button
                      data-ripple-light="true"
                      type="button"
                      onClick={() => openModal2(event)}
                      className="select-none rounded-lg bg-[#235950] py-3 px-4 lg:px-6 text-center align-middle font-dosis text-xs font-bold uppercase text-white shadow-md shadow-[#235950]/20 transition-all hover:shadow-lg hover:shadow-[#235950]/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    >
                      Register now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <Modal
          isOpen={modal1IsOpen}
          onRequestClose={closeModal1}
          contentLabel="Event Details"
          className="modal-content-1"
          overlayClassName="modal-overlay-1"
        >
          {selectedEvent && (
            <div className="flex flex-col justify-between gap-x-10 overflow-y-auto">
              <div className="flex justify-center items-center">
                <img
                  src={selectedEvent.image}
                  alt="Event"
                  className="w-[500px]"
                />
              </div>
              <div className="">
                <h2 className="lg:text-3xl mt-4 text-2xl font-bold font-dosis">
                  {selectedEvent.title}
                </h2>
                <div className="flex flex-col lg:flex-row gap-x-6">
                  <p className="flex items-center gap-x-2 text-lg font-cat">
                    <SlCalender className="text-[16px]" />
                    {formatDate(selectedEvent.date)}
                  </p>
                  <p className="flex items-center gap-x-2 text-lg font-cat">
                    <IoLocationOutline className="text-[16px]" />
                    {selectedEvent.location}
                  </p>
                  <p className="flex items-center gap-x-2 text-lg font-cat">
                    <FaRegClock className="text-[16px]" />
                    {selectedEvent.time}
                  </p>
                  <p className="flex items-center gap-x-2 text-lg font-cat">
                    <GiAbstract004 className="text-[16px]" />
                    {selectedEvent.programType}
                  </p>
                  <p className="flex items-center gap-x-2 text-lg font-cat">
                    <GiAbstract004 className="text-[16px]" />
                    {selectedEvent.eventType}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-md text-justify my-4 font-cat">
                  {selectedEvent.desc}
                </p>

                <div className="flex justify-between items-center">
                  <button
                    onClick={closeModal1}
                    className="select-none rounded-lg bg-red-600 hover:bg-red-800 py-3 px-6 text-center align-middle font-dosis text-xs font-bold uppercase text-white shadow-md shadow-red-600/20 transition-all hover:shadow-lg hover:shadow-red-600/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  >
                    Close
                  </button>
                  
                    <button
                      data-ripple-light="true"
                      type="button"
                      onClick={() => {
                        setSelectedEvent(event);
                        openModal2(event);
                      }}
                      className="select-none rounded-lg bg-[#235950] hover:bg-[#438d80] py-3 px-6 text-center align-middle font-dosis text-xs font-bold uppercase text-white shadow-md shadow-[#235950]/20 transition-all hover:shadow-lg hover:shadow-[#235950]/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    >
                      Register now
                    </button>
                </div>
              </div>
            </div>
          )}
        </Modal>

        <Modal
          isOpen={confirmationModalIsOpen}
          onRequestClose={closeConfirmationModal}
          contentLabel="Confirm Registration"
          className="modal-content-1"
          overlayClassName="modal-overlay-1"
        >
          <h2 className="text-2xl font-bold">Confirm Registration</h2>
          <p className="mt-4 text">Are you sure you want to register for this event?</p>
          {error && <p className="text-red-500">Error: {error.message}</p>}
          <div className="flex justify-end mt-6 gap-x-4">
            <button
              className="bg-red-600 hover:bg-red-800 text-white px-4 py-2 rounded"
              onClick={closeConfirmationModal}
            >
              Cancel
            </button>
            <button
              className="bg-[#235950] hover:bg-[#438d80] px-4 py-2 text-white rounded"
              onClick={handleRegister}
            >
              Confirm
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default EventsSlider;
