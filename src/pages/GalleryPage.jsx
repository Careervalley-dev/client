import React, { useState } from "react";
import Gallery from "../components/GalleryPage/Gallery";
import Modal from "react-modal";
import Heading from "../components/common/Heading";

// Ensure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root"); // Replace '#yourAppElementId' with the actual id of your app's root element

const GalleryPage = () => {
  const [modalImage, setModalImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const data = [
    "https://i.postimg.cc/qvtqJv1S/IMG-0946.jpg",
    "https://i.postimg.cc/ZnT04PQx/IMG-1135.jpg",
    "https://i.postimg.cc/Bn1ZWw6G/IMG-0895.jpg",
    "https://i.postimg.cc/NjVymHyQ/IMG-1269.jpg",
    "https://i.postimg.cc/5yny0Ydd/IMG-1133.jpg",
    "https://i.postimg.cc/WpX10kKx/IMG-0911.jpg",
    "https://i.postimg.cc/P5BxPncx/IMG-0944.jpg",
    "https://i.postimg.cc/sDg1Lc7V/IMG-1180.jpg",
    "https://i.postimg.cc/CMNzJtZP/IMG-1227.jpg",
  ];

  const handleImageClick = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="pt-[180px] container mx-auto flex flex-col justify-center items-center py-8 px-4">
      <Heading normalText="Our" highlightText="Gallery!" />
      {/* <h2 className="text-4xl font-bold font-dosis text-[28px] mb-4 bg-white">Gallery</h2> */}
      <div className="mt-6">
        <Gallery images={data} onImageClick={handleImageClick} />
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className="flex justify-center items-center h-[300px] lg:h-[500px] w-[400px] lg:w-[900px] top-[10%] fixed z-10 inset-0"
        style={{
          content: {
            margin: "auto",
            padding: "10px",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "auto",
          },
        }}
      >
        {modalImage && (
          <img
            src={modalImage}
            alt="Modal Image"
            className="w-full h-full object-contain rounded-md"
          />
        )}
      </Modal>
    </div>
  );
};

export default GalleryPage;
