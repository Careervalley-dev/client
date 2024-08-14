import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Banner from "../components/ExploreCityPage/Banner";
import { MdKeyboardArrowUp } from "react-icons/md";
import { IoMdCloseCircleOutline } from "react-icons/io";
import collegesData from "../data/colleges.json";



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

  useEffect(() => {
    let updatedColleges = [...collegesData];
    if (city) {
      updatedColleges = updatedColleges.filter(
        (college) => college.city.toLowerCase() === city.toLowerCase()
      );
    }
    if (programType) {
      updatedColleges = updatedColleges.filter(
        (college) =>
          college.programType.toLowerCase() === programType.toLowerCase()
      );
    }
    setFilteredColleges(updatedColleges);
  }, [city, programType]);

  const toggleDropdown = (key) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const handleFilterChange = (filterType, value) => {
    let updatedColleges = [...collegesData];

    switch (filterType) {
      case "city":
        updatedColleges = updatedColleges.filter(
          (college) => college.city.toLowerCase() === value.toLowerCase()
        );
        break;
      case "state":
        updatedColleges = updatedColleges.filter(
          (college) => college.state.toLowerCase() === value.toLowerCase()
        );
        break;
      case "course":
        updatedColleges = updatedColleges.filter(
          (college) => college.course.toLowerCase() === value.toLowerCase()
        );
        break;
      case "programType":
        updatedColleges = updatedColleges.filter(
          (college) => college.programType.toLowerCase() === value.toLowerCase()
        );
        break;
      case "collegeType":
        updatedColleges = updatedColleges.filter(
          (college) => college.collegeType.toLowerCase() === value.toLowerCase()
        );
        break;
      case "stream":
        updatedColleges = updatedColleges.filter(
          (college) => college.stream.toLowerCase() === value.toLowerCase()
        );
        break;
      case "courseDuration":
        updatedColleges = updatedColleges.filter(
          (college) =>
            college.courseDuration.toLowerCase() === value.toLowerCase()
        );
        break;
      default:
        break;
    }

    setFilteredColleges(updatedColleges);
    setSelectedFilters((prevState) => ({ ...prevState, [filterType]: value }));
    toggleDropdown(filterType);
  };

  const removeFilter = (filterType) => {
    setSelectedFilters((prevState) => {
      const newSelectedFilters = { ...prevState };
      delete newSelectedFilters[filterType];
      return newSelectedFilters;
    });

    setFilteredColleges([...collegesData]);
  };

  const dropdownOptions = {
    // city: ["Bangalore", "Delhi", "Mumbai", "Kolkata", "Hyderabad", "Chennai"],
    // state: ["Karnataka", "Delhi NCR", "Maharashtra", "Telangana", "West Bengal", "Tamil Nadu"],
    course: ["B.Tech", "M.B.A", "B.B.A", "B.Sc", "B.Com", "B.C.A", "B.A", "M.Tech", "L.L.B"],
    programType: ["Undergraduate", "Postgraduate"],
    collegeType: ["Public", "Private"],
    stream: ["Management", "Engineering", "Science", "Commerce", "Arts", "Computer Application", "Law"],
    courseDuration: ["4 years", "2 years", "3 years"],
  };

  return (
    <div className="">
      <Banner cityName={city} />
      <div className="px-10 lg:px-20 pt-20 font-dosis relative">
        <div className="w-full flex justify-between items-center mb-4">
          <p className="text-3xl">{`${programType} colleges in ${city}`}</p>
        </div>

        <div className="flex flex-col gap-x-4">
          <div className="">
            <div className="mt-10 pb-5 flex flex-row justify-between">
              <div className="flex relative overflow-x-auto overflow-y-none">
                {Object.keys(dropdownOptions).map((filterType) => (
                  <div key={filterType} className="flex gap-y-4 group mb-4">
                    <button
                      onClick={() => toggleDropdown(filterType)}
                      className="relative bg-[#235950] text-white px-4 py-2 flex mx-2 my-2 justify-between rounded-md gap-x-3 items-center focus:outline-none"
                    >
                      {filterType.charAt(0).toUpperCase() + filterType.slice(1)}{' '}
                      <MdKeyboardArrowUp className={`transform transition-transform duration-300 ${dropdownOpen[filterType] ? "rotate-90" : ""
                        }`} />
                    </button>
                    {dropdownOpen[filterType] && (
                      <div className="inset-0 top-[-10px] flex flex-col items-start overflow-y-auto max-h-60 z-10">
                        <ul className="bg-white border border-gray-200 rounded-md shadow-lg">
                          {dropdownOptions[filterType].map((option) => (
                            <li
                              key={option}
                              className={`cursor-pointer hover:bg-gray-100 p-2 ${selectedFilters[filterType] === option
                                  ? "bg-blue-100"
                                  : ""
                                }`}
                            >
                              <button
                                onClick={() => handleFilterChange(filterType, option)}
                                className="w-full text-left px-4 py-2"
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

            <div className="mt-10 overflow-x-auto">
              <h2 className="text-lg font-semibold mb-4">Selected Filters:</h2>
              <div className="flex gap-x-4">
                {Object.entries(selectedFilters).length > 0 ? (
                  Object.entries(selectedFilters).map(
                    ([filterType, value], index) => (
                      <div
                        key={index}
                        className="flex items-center ml-3 justify-between mb-4 w-[150px] ring-black ring-1 p-2 rounded-lg"
                      >
                        <span>{`${filterType.charAt(0).toUpperCase() +
                          filterType.slice(1)
                          }: ${value}`}</span>
                        {value && (
                          <button
                            onClick={() => removeFilter(filterType)}
                            className="ml-4 text-red-500 rounded-md"
                          >
                            <IoMdCloseCircleOutline />
                          </button>
                        )}
                      </div>
                    )
                  )
                ) : (
                  <p>No filters selected.</p>
                )}
              </div>
            </div>
          </div>

          <div className="w-full">
            {filteredColleges.length > 0 ? (
              <table className="table-auto overflow-x-auto my-12 w-full">
                <thead>
                  <tr>
                    <th className="px-4 py-2 w-10">CV Rank</th>
                    <th className="px-4 py-2 w-[2000px]">Name</th>
                    <th className="px-4 py-2">Stream</th>
                    <th className="px-4 py-2 w-32">Course</th>
                    <th className="px-4 py-2">Program Type</th>
                    <th className="px-4 py-2">College Type</th>
                    <th className="px-4 py-2">Course Duration</th>
                    <th className="px-4 py-2">Fees</th>
                    <th className="px-4 py-2">Review</th>
                    <th className="px-4 py-2">Criteria</th>
                    <th className="px-4 py-2">Ranking</th>

                  </tr>
                </thead>
                <tbody>
                  {filteredColleges.map((college, index) => (
                    <tr key={index}>
                      <td className="border px-4 py-2">{index}</td>
                      <td className="border px-4 py-2">
                        <div>
                          <Link to="#" className="hover:text-[#2A675C]">{college.name}</Link>
                          <p>{college.city}, {college.state}</p>
                        </div>
                      </td>
                      <td className="border px-4 py-2">{college.stream}</td>
                      <td className="border px-4 py-2">{college.course}</td>
                      <td className="border px-4 py-2">{college.programType}</td>
                      <td className="border px-4 py-2">{college.collegeType}</td>
                      <td className="border px-4 py-2">{college.courseDuration}</td>
                      <td className="border px-4 py-2">{college.fees}</td>
                      <td className="border px-4 py-2">{college.review}</td>
                      <td className="border px-4 py-2">{college.admissionList}</td>
                      <td className="border px-4 py-2">{college.review}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="flex flex-col items-center my-20">
                {/* <NoResultsSvg className="h-64 w-64 mb-4" /> */}
                <p className="text-2xl">No Colleges Found</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreCityPage;