import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchEventsByStatus, fetchEventById, registerForEvent } from "../redux/features/eventSlice";
import Banner from "../components/EventsPage/Banner";
import Modal from "react-modal";
import { SlCalender } from "react-icons/sl";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import { GiAbstract004 } from "react-icons/gi";
import Heading from "../components/common/Heading";
import Loader from '../components/common/loader/Loader';

Modal.setAppElement("#root");

const EventsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const queryParams = new URLSearchParams(location.search);
  const initialTab = queryParams.get("tab") || "Upcoming";

  const [activeTab, setActiveTab] = useState(initialTab);
  const [modal1IsOpen, setModal1IsOpen] = useState(false);
  const [modal2IsOpen, setModal2IsOpen] = useState(false);
  const [confirmationModalIsOpen, setConfirmationModalIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const { events, event, status, error } = useSelector((state) => state.events);
  const { user, token, isLoggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    setActiveTab(queryParams.get("tab") || "Upcoming");
  }, [location.search]);

  useEffect(() => {
    dispatch(fetchEventsByStatus(activeTab));
  }, [dispatch, activeTab]);

  const openModal1 = async (eventId) => {
    await dispatch(fetchEventById(eventId));
    setSelectedEvent(event);
    setModal1IsOpen(true);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
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

  console.log(selectedEvent);

  const closeModal2 = () => {
    setModal2IsOpen(false);
  };

  const closeConfirmationModal = () => {
    setConfirmationModalIsOpen(false);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    navigate(`/events?tab=${tab}`);
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
    <div className="relative">
      <Banner />
      <div className="container mx-auto px-4 py-12">
        <div className="p-4 bg-white flex flex-col justify-center items-center">
          <Heading normalText="Our" highlightText="Events" />
          <p className="text-xl text-justify mb-4 px-8 mt-6 font-cat">
            At The Career Valley, each event and initiative is in the direction of empowering students. Whatever we do is outside the box and is centered around the idea of benefiting students in multifarious ways. Below is a summary of our signature events that reinforce our vision.
          </p>
        </div>

        {status === 'loading' && <Loader />}
        {/* {error && <p className="text-red-500">Error: {error.message}</p>} */}
        <div className="flex justify-center my-12">
          <button
            className={`px-4 py-2 font-dosis rounded-lg ${activeTab === "Upcoming" ? "bg-[#235950] text-white" : "bg-gray-200 text-gray-700"
              }`}
            onClick={() => handleTabChange("Upcoming")}
          >
            Upcoming Events
          </button>
          <button
            className={`px-4 py-2 ml-4 font-dosis rounded-lg ${activeTab === "Recent" ? "bg-[#235950] text-white" : "bg-gray-200 text-gray-700"
              }`}
            onClick={() => handleTabChange("Recent")}
          >
            Recent Events
          </button>
        </div>

        <div className="flex justify-center items-center bg-white py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grids-col-3 gap-y-12 gap-x-10">
            {events.map((event, index) => (
              <div
                key={index}
                className="relative flex w-80 flex-col rounded-xl bg-[#e8f1f0] bg-clip-border text-white shadow-xl"
              >
                <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-black shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                  <img src={event.image} alt={event.title} />
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
                  {activeTab === "Upcoming" && (
                    <p className="flex items-center gap-x-2 text-black font-cat text-base font-light leading-relaxed antialiased">
                      <FaRegClock />
                      {event.time}
                    </p>
                  )}
                </div>
                <div className="flex p-6 pt-0 gap-x-4">
                  <button
                    data-ripple-light="true"
                    type="button"
                    onClick={() => openModal1(event._id)}
                    className="select-none rounded-lg bg-[#235950] py-3 px-6 text-center align-middle font-dosis text-xs font-bold uppercase text-white shadow-md shadow-[#235950]/20 transition-all hover:shadow-lg hover:shadow-[#235950]/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  >
                    Read More
                  </button>
                  {activeTab === "Upcoming" && (
                    <button
                      data-ripple-light="true"
                      type="button"
                      onClick={() => openModal2(event)}
                      className="select-none rounded-lg bg-[#235950] py-3 px-6 text-center align-middle font-dosis text-xs font-bold uppercase text-white shadow-md shadow-[#235950]/20 transition-all hover:shadow-lg hover:shadow-[#235950]/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    >
                      Register now
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

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
                  {activeTab === "Upcoming" && (
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
                  )}
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
              className="bg-red-600 text-white hover:bg-red-800 px-4 py-2 rounded"
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

export default EventsPage;
