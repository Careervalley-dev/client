import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Banner from "../components/ExploreCityPage/Banner";
import { MdKeyboardArrowUp } from "react-icons/md";
import { IoMdCloseCircleOutline } from "react-icons/io";
import collegesData from "../data/colleges.json";
import Loader from '../components/common/loader/Loader';


// Helper function to convert a string to camel case
const toCamelCase = (str) => {
  return str
    .toLowerCase()
    .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) =>
      index === 0 ? match.toLowerCase() : match.toUpperCase()
    )
    .replace(/\s+/g, '');
};

const ExploreCityPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const city = queryParams.get("city") || "";
  const programType = queryParams.get("programType") || "";
  const [filteredColleges, setFilteredColleges] = useState(collegesData);
  const [dropdownOpen, setDropdownOpen] = useState({});
  const [selectedFilters, setSelectedFilters] = useState({
    city: city,
    programType: programType,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    applyFilters(selectedFilters);
  }, [selectedFilters]);

  const toggleDropdown = (key) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const handleFilterChange = (filterType, value) => {
    setSelectedFilters((prevState) => ({ ...prevState, [filterType]: value }));
    toggleDropdown(filterType);
  };

  const removeFilter = (filterType) => {
    setSelectedFilters((prevState) => {
      const newSelectedFilters = { ...prevState };
      delete newSelectedFilters[filterType];
      return newSelectedFilters;
    });
  };

  const applyFilters = (filters) => {
    let updatedColleges = [...collegesData];

    // Apply the city filter first if it's selected
    if (filters.city) {
      updatedColleges = updatedColleges.filter(
        (college) => college.city.toLowerCase() === filters.city.toLowerCase()
      );
    }

    // Apply other filters only on the colleges in the selected city
    Object.keys(filters).forEach((filterType) => {
      if (filterType !== "city" && filters[filterType]) {
        updatedColleges = updatedColleges.filter((college) =>
          college[filterType].toLowerCase().includes(filters[filterType].toLowerCase())
        );
      }
    });

    setFilteredColleges(updatedColleges);
  };

  const handleCollegeClick = (collegeUrl) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      window.open(collegeUrl, "_blank");
    }, 2000);
  };

  const dropdownOptions = {
    course: ["B.Tech", "M.B.A", "B.B.A", "B.Sc", "B.Com", "B.C.A", "B.A", "M.Tech", "L.L.B"],
    programType: ["Undergraduate", "Postgraduate"],
    collegeType: ["Public", "Private"],
    stream: ["Management", "Engineering", "Science", "Commerce", "Arts", "Computer Application", "Law"],
    duration: ["4 years", "2 years", "3 years"],
  };

  return (
    <div className="">
      <Banner cityName={city} />
      <div className="px-4 lg:px-20 pt-20 font-dosis relative">
        <div className="w-full flex justify-between items-center mb-4">
          <p className="text-xl lg:text-3xl">{`${programType} colleges in ${city}`}</p>
        </div>

        <div className="flex flex-col gap-x-4">
          <div className="">
            <div className="flex flex-col lg:flex-row justify-between">
              <div className="w-full flex items-center">
                <div id="slider" className="flex flex-wrap">
                  {Object.keys(dropdownOptions).map((filterType) => (
                    <div
                      key={filterType}
                      className="flex flex-col gap-y-4 group relative"
                    >
                      <button
                        onClick={() => toggleDropdown(filterType)}
                        className="relative w-[120px] lg:w-[150px] bg-[#235950] text-white px-2 lg:px-4 py-2 flex mx-2 my-2 justify-between rounded-md gap-x-3 items-center focus:outline-none"
                      >
                        {filterType.charAt(0).toUpperCase() +
                          filterType.slice(1)}
                        <MdKeyboardArrowUp
                          className={`transform transition-transform duration-300 ${dropdownOpen[filterType] ? "rotate-180" : ""
                            }`}
                        />
                      </button>
                      {dropdownOpen[filterType] && (
                        <div className="absolute bg-white border border-gray-200 rounded-md shadow-lg z-50 mt-2 top-[50px] left-[10px] lg:left-[20px] w-[120px] lg:w-[150px] max-w-[300px] overflow-y-auto max-h-60">
                          <ul>
                            {dropdownOptions[filterType].map((option) => (
                              <li
                                key={option}
                                className={`cursor-pointer hover:bg-gray-100 p-2 ${selectedFilters[filterType] === option
                                  ? "bg-blue-100"
                                  : ""
                                  }`}
                              >
                                <button
                                  onClick={() =>
                                    handleFilterChange(filterType, option)
                                  }
                                  className="w-full text-left px-2 lg:px-4 py-2"
                                >
                                  {option}
                                  {selectedFilters[filterType] === option && (
                                    <span
                                      className="float-right text-red-500 cursor-pointer"
                                      onClick={() => removeFilter(filterType)}
                                    >
                                      &times;
                                    </span>
                                  )}
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <h2 className="text-lg font-semibold mb-4">Selected Filters:</h2>
              <div className="flex gap-x-4 flex-wrap">
                {Object.entries(selectedFilters)
                  .filter(([filterType]) => filterType !== "city")
                  .map(([filterType, value], index) => (
                    <div
                      key={index}
                      className="flex ml-2 items-center justify-between mb-4 w-[120px] lg:w-[150px] ring-black ring-1 p-2 rounded-lg"
                    >
                      <span className="text-xs lg:text-base">{value}</span>
                      {value && (
                        <button
                          onClick={() => removeFilter(filterType)}
                          className="ml-2 lg:ml-4 text-red-500 rounded-md"
                        >
                          <IoMdCloseCircleOutline />
                        </button>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          </div>

          <div className="w-full my-6">
            <h2 className="text-xl lg:text-2xl font-semibold mb-4">Results:</h2>
            {loading ? (
              <Loader />
            ) : filteredColleges.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-8">
                {filteredColleges.map((college, index) => (
                  <div
                    key={index}
                    className="border rounded-md shadow-lg p-4 transform transition-transform duration-300 hover:scale-105"
                  >
                    <div className="flex items-center mb-4">
                      <img
                        src={college.imageUrl}
                        alt={college.name}
                        className="h-[50px] w-[50px] object-cover mr-4 rounded-full"
                      />
                      <div className="font-dosis">
                        <button
                          onClick={() => handleCollegeClick(college.collegeUrl)}
                          className="text-lg text-left font-bold text-[#235950] hover:underline"
                        >
                          {college.name}
                        </button>
                        <p className="text-sm text-gray-500">
                          {college.city}, {college.state}
                        </p>
                        <p className="text-sm text-gray-500">
                          {college.programType.charAt(0).toUpperCase() + college.programType.slice(1).toLowerCase()} - {college.course}
                        </p>
                        <p className="text-sm text-gray-500">
                          Duration: {college.duration}
                        </p>
                        <p className="text-sm text-gray-500">
                          Fees: {college.fees}
                        </p>
                        <p className="text-sm text-gray-500">
                          Ranking: {college.rank}, ({college.ranking_org})
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-red-500">No results found for the selected filters.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreCityPage;
