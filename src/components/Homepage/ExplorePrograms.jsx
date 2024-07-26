import React, { useState } from "react";

const ExplorePrograms = () => {
 const [activeTab, setActiveTab] = useState("B.Tech");

 const tabs = [
    "B.Tech",
    "B.Sc",
    "B.Com",
    "BBA",
    "BCA",
    "BA",
    "M.B.A",
    "M.Tech",
 ];

 const handleTabClick = (tab) => {
    setActiveTab(tab);
 };

 const getCardsForTab = (tab) => {
    // Example image URLs for each card. Replace these with your actual image URLs.
    const images = {
      "Ranking": "https://i.postimg.cc/13bbzwk3/anking-1.png",
      "Find Colleges": "https://i.postimg.cc/C1nGxfVS/anking-2.png",
      "Course Finder": "https://i.postimg.cc/QtD8HR2C/anking.png",
      "Exams": "https://i.postimg.cc/hPDXC73v/anking-3.png",
      "College Predictor": "https://i.postimg.cc/gjT5ChdR/college-predictor.png",
      "Compare Colleges": "https://i.postimg.cc/FRnDzQqX/compare.png",
    };

    switch (tab) {
      case "B.Tech":
      case "B.Sc":
      case "B.Com":
      case "BBA":
      case "BCA":
      case "BA":
      case "M.B.A":
      case "M.Tech":
        return Object.keys(images).map(title => ({ title, image: images[title], tab }));
      default:
        return [];
    }
 };

 return (
    <div className="container mx-auto py-12 lg:py-12 px-6 lg:px-24">
      <h2 className="heading font-bold mb-4 flex justify-start">Explore Programs</h2>
      <div className="flex space-x-4 mb-6 font-anta overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`px-4 text mb-2 py-2 rounded ${
              activeTab === tab ? "bg-[#235950] text-white" : "bg-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="scrollable-container grid grid-cols-2 lg:grid-cols-3 gap-4">
        {getCardsForTab(activeTab).map((card, index) => (
          <div key={index} className="bg-white p-4 gap-x-6 rounded shadow-lg flex">
            <div>
              <h3 className="font-dosis text-2xl font-bold mb-2">{card.title}</h3>
              <p className="text">Coming Soon!</p>
            </div>
            <div>
              <img src={card.image} alt={card.title} className="w-22 h-22 lg:w-36 lg:h-36"/>
            </div>
          </div>
        ))}
      </div>
    </div>
 );
};

export default ExplorePrograms;
