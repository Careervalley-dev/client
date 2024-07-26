import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Banner from "../components/ExploreCityPage/Banner";
import { MdKeyboardArrowUp } from "react-icons/md";
import { IoMdCloseCircleOutline } from "react-icons/io";
// import { ReactComponent as NoResultsSvg } from "../assets/no-results.svg"; 

const ExploreCityPage = () => {
  const colleges = [
    {
      id: 1,
      name: "Top University A",
      city: "Bangalore",
      state: "Karnataka",
      course: "B.Tech",
      programType: "Undergraduate",
      collegeType: "Public",
      stream: "Computer Science",
      courseDuration: "4 years",
      fees: "$5000",
      review: 4.5,
    },
    {
      id: 2,
      name: "Elite Institute B",
      city: "Delhi",
      state: "Delhi NCR",
      course: "B.Tech",
      programType: "Undergraduate",
      collegeType: "Private",
      stream: "Computer Science",
      courseDuration: "4 years",
      fees: "$8000",
      review: 4.2,
    },
    {
      id: 3,
      name: "Elite Institute B",
      city: "Mumbai",
      state: "Maharashtra",
      course: "MBA",
      programType: "Postgraduate",
      collegeType: "Private",
      stream: "Business Administration",
      courseDuration: "2 years",
      fees: "$8000",
      review: 4.2,
    },
    {
      id: 4,
      name: "Elite Institute B",
      city: "Delhi",
      state: "Delhi NCR",
      course: "MBA",
      programType: "Postgraduate",
      collegeType: "Private",
      stream: "Business Administration",
      courseDuration: "2 years",
      fees: "$8000",
      review: 4.2,
    },
    {
      id: 5,
      name: "Elite Institute B",
      city: "Delhi",
      state: "Delhi NCR",
      course: "MBA",
      programType: "Postgraduate",
      collegeType: "Private",
      stream: "Business Administration",
      courseDuration: "2 years",
      fees: "$8000",
      review: 4.2,
    },
    {
      id: 6,
      name: "Elite Institute B",
      city: "Delhi",
      state: "Delhi NCR",
      course: "MBA",
      programType: "Postgraduate",
      collegeType: "Private",
      stream: "Business Administration",
      courseDuration: "2 years",
      fees: "$8000",
      review: 4.2,
    },
    {
      id: 7,
      name: "Elite Institute B",
      city: "Mumbai",
      state: "Maharashtra",
      course: "MBA",
      programType: "Postgraduate",
      collegeType: "Private",
      stream: "Business Administration",
      courseDuration: "2 years",
      fees: "$8000",
      review: 4.2,
    },
    {
      id: 8,
      name: "Elite Institute B",
      city: "Delhi",
      state: "Delhi NCR",
      course: "MBA",
      programType: "Postgraduate",
      collegeType: "Private",
      stream: "Business Administration",
      courseDuration: "2 years",
      fees: "$8000",
      review: 4.2,
    },
    {
      id: 9,
      name: "Elite Institute B",
      city: "Delhi",
      state: "Delhi NCR",
      course: "MBA",
      programType: "Postgraduate",
      collegeType: "Private",
      stream: "Business Administration",
      courseDuration: "2 years",
      fees: "$8000",
      review: 4.2,
    },
    {
      id: 10,
      name: "Elite Institute B",
      city: "Delhi",
      state: "Delhi NCR",
      course: "MBA",
      programType: "Postgraduate",
      collegeType: "Private",
      stream: "Business Administration",
      courseDuration: "2 years",
      fees: "$8000",
      review: 4.2,
    },
    {
      id: 11,
      name: "Elite Institute B",
      city: "Delhi",
      state: "Delhi NCR",
      course: "MBA",
      programType: "Postgraduate",
      collegeType: "Private",
      stream: "Business Administration",
      courseDuration: "2 years",
      fees: "$8000",
      review: 4.2,
    },
    {
      id: 12,
      name: "Elite Institute B",
      city: "Delhi",
      state: "Delhi NCR",
      course: "MBA",
      programType: "Postgraduate",
      collegeType: "Private",
      stream: "Business Administration",
      courseDuration: "2 years",
      fees: "$8000",
      review: 4.2,
    },
    {
      id: 13,
      name: "Elite Institute B",
      city: "Delhi",
      state: "Delhi NCR",
      course: "MBA",
      programType: "Postgraduate",
      collegeType: "Private",
      stream: "Business Administration",
      courseDuration: "2 years",
      fees: "$8000",
      review: 4.2,
    },
    {
      id: 14,
      name: "Elite Institute B",
      city: "Delhi",
      state: "Delhi NCR",
      course: "MBA",
      programType: "Postgraduate",
      collegeType: "Private",
      stream: "Business Administration",
      courseDuration: "2 years",
      fees: "$8000",
      review: 4.2,
    },
    {
      id: 15,
      name: "Elite Institute B",
      city: "Delhi",
      state: "Delhi NCR",
      course: "MBA",
      programType: "Postgraduate",
      collegeType: "Private",
      stream: "Business Administration",
      courseDuration: "2 years",
      fees: "$8000",
      review: 4.2,
    },
    {
      id: 16,
      name: "Elite Institute B",
      city: "Delhi",
      state: "Delhi NCR",
      course: "MBA",
      programType: "Postgraduate",
      collegeType: "Private",
      stream: "Business Administration",
      courseDuration: "2 years",
      fees: "$8000",
      review: 4.2,
    },
    {
      id: 17,
      name: "Elite Institute B",
      city: "Delhi",
      state: "Delhi NCR",
      course: "MBA",
      programType: "Postgraduate",
      collegeType: "Private",
      stream: "Business Administration",
      courseDuration: "2 years",
      fees: "$8000",
      review: 4.2,
    },
    {
      id: 18,
      name: "Elite Institute B",
      city: "Delhi",
      state: "Delhi NCR",
      course: "MBA",
      programType: "Postgraduate",
      collegeType: "Private",
      stream: "Business Administration",
      courseDuration: "2 years",
      fees: "$8000",
      review: 4.2,
    },
    {
      id: 19,
      name: "Elite Institute B",
      city: "Delhi",
      state: "Delhi NCR",
      course: "MBA",
      programType: "Postgraduate",
      collegeType: "Private",
      stream: "Business Administration",
      courseDuration: "2 years",
      fees: "$8000",
      review: 4.2,
    },
    {
      id: 20,
      name: "Elite Institute B",
      city: "Delhi",
      state: "Delhi NCR",
      course: "MBA",
      programType: "Postgraduate",
      collegeType: "Private",
      stream: "Business Administration",
      courseDuration: "2 years",
      fees: "$8000",
      review: 4.2,
    },
    // Add more colleges as needed...
  ];
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const city = queryParams.get("city") || "";
  const programType = queryParams.get("programType") || "";
  const [filteredColleges, setFilteredColleges] = useState(colleges);
  const [dropdownOpen, setDropdownOpen] = useState({});
  const [selectedFilters, setSelectedFilters] = useState({
    city: city,
    programType: programType,
  });

  useEffect(() => {
    let updatedColleges = [...colleges];
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
  }, [city, programType, colleges]);

  const toggleDropdown = (key) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const handleFilterChange = (filterType, value) => {
    let updatedColleges = [...colleges];

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

  const removeFilter  = (filterType) => {
    setSelectedFilters((prevState) => {
      const newSelectedFilters = { ...prevState };
      delete newSelectedFilters[filterType];
      return newSelectedFilters;
    });

    setFilteredColleges([...colleges]);
  };

  const dropdownOptions = {
    city: ["Bangalore", "Delhi", "Mumbai", "Kolkata", "Madurai", "Pune", "Hyderabad", "Chennai"],
    state: ["Karnataka", "Delhi NCR", "Maharashtra"],
    course: ["B.Tech", "MBA", "PhD"],
    programType: ["Undergraduate", "Postgraduate"],
    collegeType: ["Public", "Private"],
    stream: ["Computer Science", "Business Administration", "Law"],
    courseDuration: ["4 years", "2 years", "3 years"],
  };

  return (
    <div className="">
      <Banner cityName={city}/>
      <div className="px-10 lg:px-20 pt-20 font-dosis relative">
        <div className="w-full flex justify-between items-center mb-4">
          <p className="text-3xl">{`${programType} colleges in ${city}`}</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-x-4">
          <div className="">
            <div className="mt-10 pb-5 flex flex-row lg:flex-col justify-between">
              <div className="flex lg:flex-col relative overflow-x-auto overflow-y-none">
                {Object.keys(dropdownOptions).map((filterType) => (
                  <div key={filterType} className="flex gap-y-4 group mb-4">
                    <button
                      onClick={() => toggleDropdown(filterType)}
                      className="relative bg-[#235950] text-white px-4 py-2 flex mx-2 my-2 justify-between rounded-md gap-x-3 items-center focus:outline-none"
                    >
                      {filterType.charAt(0).toUpperCase() + filterType.slice(1)}{' '}
                      <MdKeyboardArrowUp className={`transform transition-transform duration-300 ${
                          dropdownOpen[filterType] ? "rotate-90" : ""
                        }`}/>
                    </button>
                    {dropdownOpen[filterType] && (
                      <div className="inset-0 top-[-10px] flex flex-col items-start overflow-y-auto max-h-60 z-10">
                        <ul className="bg-white border border-gray-200 rounded-md shadow-lg">
                          {dropdownOptions[filterType].map((option) => (
                            <li
                              key={option}
                              className={`cursor-pointer hover:bg-gray-100 p-2 ${
                                selectedFilters[filterType] === option
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
              <div className="flex lg:flex-col gap-x-4">
                {Object.entries(selectedFilters).length > 0 ? (
                  Object.entries(selectedFilters).map(
                    ([filterType, value], index) => (
                      <div
                        key={index}
                        className="flex items-center ml-3 justify-between mb-4 w-[150px] ring-black ring-1 p-2 rounded-lg"
                      >
                        <span>{`${
                          filterType.charAt(0).toUpperCase() +
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

          <div className="overflow-x-auto w-full">
            {filteredColleges.length > 0 ? (
              <table className="table-auto overflow-x-auto my-12 w-full">
                <thead>
                  <tr>
                    <th className="px-4 py-2 w-10">Rank</th>
                    <th className="px-4 py-2 w-40">Name</th>
                    <th className="px-4 py-2 w-32">City</th>
                    <th className="px-4 py-2 w-32">State</th>
                    <th className="px-4 py-2 w-32">Course</th>
                    <th className="px-4 py-2">Program Type</th>
                    <th className="px-4 py-2">College Type</th>
                    <th className="px-4 py-2">Stream</th>
                    <th className="px-4 py-2">Course Duration</th>
                    <th className="px-4 py-2">Fees</th>
                    <th className="px-4 py-2">Review</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredColleges.map((college, index) => (
                    <tr key={index}>
                      <td className="border px-4 py-2">{college.id}</td>
                      <td className="border px-4 py-2"><Link to="#" className="hover:text-[#2A675C]">{college.name}</Link></td>
                      <td className="border px-4 py-2">{college.city}</td>
                      <td className="border px-4 py-2">{college.state}</td>
                      <td className="border px-4 py-2">{college.course}</td>
                      <td className="border px-4 py-2">{college.programType}</td>
                      <td className="border px-4 py-2">{college.collegeType}</td>
                      <td className="border px-4 py-2">{college.stream}</td>
                      <td className="border px-4 py-2">{college.courseDuration}</td>
                      <td className="border px-4 py-2">{college.fees}</td>
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