import React, { useState, useEffect } from "react";

const TopUniversities = () => {
  const [activeTab, setActiveTab] = useState("B.Tech");
  const [colleges, setColleges] = useState({});

  // Simulate fetching data
  useEffect(() => {
    const fetchData = async () => {
      // This is where you would fetch data from an API
      // For demonstration, we'll use static data
      const data = {
        "B.Tech": [
          {
            rank: 1,
            name: "IIT Madras",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1434977143jpjpjpjpj.jpg?h=30&w=30&mode=stretch",
            city: "Chennai, Tamil Nadu",
            cutoff: "JEE-Advanced Cut off 2023 148",
            deadline: "19 June - 29 Jul 2024",
            fees: "₹2,09,550/1st yr",
          },
          {
            rank: 2,
            name: "IIT Delhi",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/col27802.gif?h=30&w=30&mode=stretch",
            city: "New Delhi, Delhi NCR",
            cutoff: "JEE-Advanced Cut off 2023 429",
            deadline: "27 Apr-07 May 2024",
            fees: "₹2,54,650/1st yr",
          },
          {
            rank: 3,
            name: "IIT Bombay",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1431953162ccgsygdygw.jpg?h=30&w=30&mode=stretch",
            city: "Mumbai, Maharashtra",
            cutoff: "JEE-Advanced Cut off 2023 67",
            deadline: "27 Apr-07 May 2024",
            fees: "₹2,30,550/1st yr",
          },
          {
            rank: 4,
            name: "IIT Kharagpur",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1489041138e2.jpg?h=30&w=30&mode=stretch",
            city: "Kharagpur, West Bengal",
            cutoff: "JEE-Advanced Cut off 2023 632",
            deadline: "27 Apr-07 May 2024",
            fees: "₹2,23,600/1st yr",
          },
          {
            rank: 5,
            name: "IIT Kanpur",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1408554560logo.png?h=30&w=30&mode=stretch",
            city: "Kanpur, UP",
            cutoff: "JEE-Advanced Cut off 2023 238",
            deadline: "19 June - 07 May 2024",
            fees: "₹2,29,200/1st yr",
          },
          {
            rank: 6,
            name: "IIT Roorkee",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1431775682rajiv.jpg?h=30&w=30&mode=stretch",
            city: "Roorkee, Uttarakhand",
            cutoff: "JEE-Advanced Cut off 2023 715",
            deadline: "16 Apr - 07 May 2024",
            fees: "₹2,30,100/1st yr",
          },
          {
            rank: 7,
            name: "BITS Pilani",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1589790676112018648848892482726766654702028085722509n.jpg?h=30&w=30&mode=stretch",
            city: "Pilani, Rajasthan",
            cutoff: "-",
            deadline: "15 Jan - 11 Apr 2024",
            fees: "₹5,71,550/1st yr",
          },
          {
            rank: 8,
            name: "IIT Guwati",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1394864902Indian%20Institute%20of%20Technology%20-%20IIT%20Guwahati.png?h=30&w=30&mode=stretch",
            city: "Guwati, Assam",
            cutoff: "JEE-Advanced Cut off 2023 1124",
            deadline: "27 Apr - 07 May 2024",
            fees: "₹2,85,750/1st yr",
          },
          {
            rank: 9,
            name: "IIT Hyderabad",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/166089612015088476701200pxIndianInstituteofTechnologyHyderabadlogo.png?h=30&w=30&mode=stretch",
            city: "Hyderabad, Telengana",
            cutoff: "JEE-Advanced Cut off 2023 1098",
            deadline: "16 Apr - 07 May 2024",
            fees: "₹2,41,550/1st yr",
          },
          {
            rank: 10,
            name: "CEG, Anna University",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/13941065084.png?h=30&w=30&mode=stretch",
            city: "Chenna, Tamil Nadu",
            cutoff: "-",
            deadline: "5 May - 11 Sept 2024",
            fees: "₹47,550/1st yr",
          },
        ],
        "B.Sc": [
          {
            rank: 1,
            name: "St Stephens College",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/14919074881412841375Logo.jpg?h=30&w=30&mode=stretch",
            city: "New Delhi, Delhi NCR",
            cutoff: "CUET 2023 cut off 754.6",
            deadline: "-",
            fees: "₹24,670/1st yr",
          },
          {
            rank: 2,
            name: "Hindu College",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/col1904.jpg?h=30&w=30&mode=stretch",
            city: "New Delhi, Delhi NCR",
            cutoff: "CUET 2023 Cut off 754.6",
            deadline: "-",
            fees: "₹27,400/1st yr",
          },
          {
            rank: 3,
            name: "Lady Shree Ram College",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1559556886lsrlogo9.jpg?h=30&w=30&mode=stretch",
            city: "New Delhi, Delhi NCR",
            cutoff: "CUET 2023 Cut off 770",
            deadline: "-",
            fees: "₹23,670/1st yr",
          },
          {
            rank: 4,
            name: "Miranda House",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/col3004.jpg?h=30&w=30&mode=stretch",
            city: "New Delhi, Delhi NCR",
            cutoff: "CUET 2023 Cut off 770",
            deadline: "-",
            fees: "₹19,800/1st yr",
          },
          {
            rank: 5,
            name: "Loyola College",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1453696337logoooo.jpg?h=30&w=30&mode=stretch",
            city: "Chennai, Tamil Nadu",
            cutoff: "-",
            deadline: "-",
            fees: "₹12,440/1st yr",
          },
          {
            rank: 6,
            name: "Madras Christian College",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1393668198Madras%20Christian%20College.png?h=30&w=30&mode=stretch",
            city: "Chennai, Tamil Nadu",
            cutoff: "-",
            deadline: "-",
            fees: "₹24,665/1st yr",
          },
          {
            rank: 7,
            name: "Hansraj College",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1491982583logo..png?h=30&w=30&mode=stretch",
            city: "New Delhi, Delhi NCR",
            cutoff: "CUET 2023 cut-off 754.6",
            deadline: "-",
            fees: "-",
          },
          {
            rank: 8,
            name: "Presidency College",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1415341122loojo.png?h=30&w=30&mode=stretch",
            city: "Chennai, Tamil Nadu",
            cutoff: "-",
            deadline: "-",
            fees: "₹24,665/1st yr",
          },
          {
            rank: 9,
            name: "Fergusson College",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1409920983logo%20of.png?h=30&w=30&mode=stretch",
            city: "Pune, Maharashtra",
            cutoff: "-",
            deadline: "-",
            fees: "₹1,270/1st yr",
          },
          {
            rank: 10,
            name: "St. Xaviers College",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1505106340220pxSt.XaviersUniversityKolkatalogo.png?h=30&w=30&mode=stretch",
            city: "Kolkata, West Bengal",
            cutoff: "-",
            deadline: "-",
            fees: "₹1,06,870/1st yr",
          },
        ],
        "BBA": [
          {
            rank: 1,
            name: "TAPMI Manipal",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1473772577logo.jpg?h=30&w=30&mode=stretch",
            city: "Manipal, Karnataka",
            cutoff: "-",
            deadline: "-",
            fees: "₹3,85,000/1st yr",
          },
          {
            rank: 2,
            name: "NMIMS, Bangalore",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1506323241Logo.jpg?h=30&w=30&mode=stretch",
            city: "Bangalore, Karnataka",
            cutoff: "-",
            deadline: "6 Dec 2023-20 May 2024",
            fees: "₹3,15,000/1st yr",
          },
          {
            rank: 3,
            name: "JAGSOM, Bangalore",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1701931072JAGSoMLOgoBlack.png?h=30&w=30&mode=stretch",
            city: "Bangalore, Karnataka",
            cutoff: "-",
            deadline: "-",
            fees: "₹4,00,000/1st yr",
          },
          {
            rank: 4,
            name: "Woxsen School of Business, Hyderabad",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1696856312WoxsenlogoCD.png?h=30&w=30&mode=stretch",
            city: "Hyderabad, Telengana",
            cutoff: "-",
            deadline: "30 Oct 2023-18 May 2024",
            fees: "₹4,25,000/1st yr",
          },
          {
            rank: 5,
            name: "IBS Hyderabad",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1569389684IBSLogowithR1.jpg?h=30&w=30&mode=stretch",
            city: "Hyderabad, Telengana",
            cutoff: "-",
            deadline: "25 Jul 2024",
            fees: "₹2,80,000/1st yr",
          },
          {
            rank: 6,
            name: "Institute of Management, Nirma University, Ahmedabad",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1650620962Management01.jpg?h=30&w=30&mode=stretch",
            city: "Ahmedabad, Gujurat",
            cutoff: "-",
            deadline: "14 Feb-31 May 2024",
            fees: "₹3,56,000/1st yr",
          },
          {
            rank: 7,
            name: "Amity University, Noida",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/14973308071413537745logo.jpg?h=30&w=30&mode=stretch",
            city: "Noida, UP",
            cutoff: "-",
            deadline: "1 Dec-15 May 2024",
            fees: "₹3,09,000/1st yr",
          },
          {
            rank: 8,
            name: "LPU, Jalandhar",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1705314547logo.png?h=30&w=30&mode=stretch",
            city: "Jalandhar, Punjab",
            cutoff: "-",
            deadline: "26 Jan-30 Apr 2024",
            fees: "₹1,60,000/1st yr",
          },
          {
            rank: 9,
            name: "JMIU, New Delhi",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1491558776logo.jpg?h=30&w=30&mode=stretch",
            city: "New Delhi, Delhi NCR",
            cutoff: "-",
            deadline: "20 Feb-30 Mar 2024",
            fees: "₹13,100/1st yr",
          },
          {
            rank: 10,
            name: "UPES, Dhanbad",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1550567037UPESLogo1.png?h=30&w=30&mode=stretch",
            city: "Dehradun, Uttarakhand",
            cutoff: "-",
            deadline: "30/06/2023",
            fees: "₹3,56,000/1st yr",
          },
        ],
        "B.Com": [
          {
            rank: 1,
            name: "Shri Ram College of Commerce",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/14916429701410765919srcclogo.png?h=30&w=30&mode=stretch",
            city: "New Delhi, Delhi NCR",
            cutoff: "CUET cut off 770",
            deadline: "-",
            fees: "₹29,350/1st yr",
          },
          {
            rank: 2,
            name: "Lady Shree Ram College",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1453696337logoooo.jpg?h=30&w=30&mode=stretch",
            city:  "New Delhi, Delhi NCR",
            cutoff:"CUET 2023 cut off 770",
            deadline: "-",
            fees: "₹23,670/1st yr",
          },
          {
            rank: 3,
            name: "Loyola College",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/col1904.jpg?h=30&w=30&mode=stretch",
            city: "Chennai, Tamil Nadu",
            cutoff: "-",
            deadline: "-",
            fees: "₹13,000/1st yr",
          },
          
          {
            rank: 4,
            name: "St. Xavier's College",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1504695740logo.jpg?h=30&w=30&mode=stretch",
            city: "Mumbai, Maharashtra",
            cutoff: "-",
            deadline: "-",
            fees: "₹7,000/1st yr",
          },
          {
            rank: 5,
            name: "Hindu College",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/col1904.jpg?h=30&w=30&mode=stretch",
            city: "New Delhi, Delhi NCR",
            cutoff: "CUET 2023 cut off 762.3",
            deadline: "-",
            fees: "₹26,000/1st yr",
          },
          {
            rank: 6,
            name: "Hansraj College",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1491982583logo..png?h=30&w=30&mode=stretch",
            city: "New Delhi, Delhi NCR",
            cutoff: "CUET 2023 cut off 770",
            deadline: "-",
            fees: "₹23,260/1st yr",
          },
          {
            rank: 7,
            name: "Madras Christian College",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1393668198Madras%20Christian%20College.png?h=30&w=30&mode=stretch",
            city: "Chennai, Tamil Nadu",
            cutoff: "-",
            deadline: "31 May 24",
            fees: "₹83,760/1st yr",
          },
          {
            rank: 8,
            name: "Christ University",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1505110433fvvvvvvvvvvvvvvvvvvvvvvvvvvvvv.png?h=30&w=30&mode=stretch",
            city: "Bangalore, Karnataka",
            cutoff: "-",
            deadline: "8 Dec - 04 May 2024",
            fees: "₹65,000/1st yr",
          },
          {
            rank: 9,
            name: "Narsee Monjee College of Commerce and Economics",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1565326661ezgif.comresize4.png?h=30&w=30&mode=stretch",
            city: "Mumbai, Maharashtra",
            cutoff: "-",
            deadline: "-",
            fees: "₹50,000/1st yr",
          },
          {
            rank: 10,
            name: "RA Podar College of Commerce and Economics",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1416307992naac.png?h=30&w=30&mode=stretch",
            city: "Mumbai, Maharashtra",
            cutoff: "-",
            deadline: "-",
            fees: "₹6,470/1st yr",
          },
        ],
        "BCA": [
          {
            rank: 1,
            name: "Christ University",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1505110433fvvvvvvvvvvvvvvvvvvvvvvvvvvvvv.png?h=30&w=30&mode=stretch",
              city: "Bangalore, Karnataka",
               cutoff: "-",
            deadline: "8 Dec - 04 May 2024",
            fees: "₹1,40,000/1st yr",
          },
          {
            rank: 2,
            name: "Presidency College",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1707471831collegelogo1.jpeg?h=30&w=30&mode=stretch",
             city: "Bangalore, Karnataka",
             cutoff: "-",
            deadline: "-",
            fees: "₹1,20,000/1st yr",
          },
          {
            rank: 3,
            name: "SRM Institute of Science and Technology",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/15807262501569304335phpHattQO.png?h=30&w=30&mode=stretch",
             city: "Chennai, Tamil Nadu",
             cutoff: "-",
            deadline: "09 Jun 24",
            fees: "₹85,500/1st yr",
          },
          {
            rank: 4,
            name: "Symbiosis Institute of Computer Studies and Research",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1506604442download.jpg?h=30&w=30&mode=stretch",
             city: "Pune, Maharashtra",
             cutoff: "-",
            deadline: "13 Dec - 24 May 2024",
            fees: "₹1,95,000/1st yr",
          },
          {
            rank: 5,
            name: "Loyola College",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1453696337logoooo.jpg?h=30&w=30&mode=stretch",
             city: "Chennai, Tamil Nadu",
             cutoff: "-",
            deadline: "-",
            fees: "₹48,940/1st yr",
          },
          {
            rank: 6,
            name: "GLS Institute of Computer Application",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/col32863.png?h=30&w=30&mode=stretch",
             city: "Ahmedabad, Gujarat",
             cutoff: "-",
            deadline: "-",
            fees: "-",
          },
          {
            rank: 7,
            name: "Vellore Institute of Technology",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1604923303Logo.jpg?h=30&w=30&mode=stretch",
             city: "Vellore, Tamil Nadu",
             cutoff: "-",
            deadline: "2 Feb - 31 May 2024",
            fees:"₹57,000/1st yr",
          },
          {
            rank: 8,
            name: "Institute of Business Studies and Research",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/15018524541472038707lgg.jpg?h=30&w=30&mode=stretch",
             city: "Navi Mumbai, Maharashtra",
             cutoff: "-",
            deadline: "-",
            fees: "₹1,30,000/1st yr",
          },
          {
            rank: 9,
            name: "Xavier Institute of Computer Application",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1426676899xica-logo1.jpg?h=30&w=30&mode=stretch",
             city: "Ahmedabad, Gujarat",
             cutoff: "-",
            deadline: "-",
            fees: "₹10,600/1st yr",
          },
          {
            rank: 10,
            name: "DAV College",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1605960024Logo.png?h=30&w=30&mode=stretch",
             city: "Chandigarh, Chandigarh",
             cutoff: "-",
            deadline: "-",
            fees: "₹46,770/1st yr",
          }
        ],
        "BA": [
          {
            rank: 1,
            name: "Lady Shree Ram College",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1559556886lsrlogo9.jpg?h=30&w=30&mode=stretch",
            city: "New Delhi, Delhi NCR",
            cutoff: "CUET 2023 Cut off 708.4",
            deadline: "-",
            fees: "₹19,900/1st yr",
          },{
            rank: 2,
            name: "Loyola College",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1453696337logoooo.jpg?h=30&w=30&mode=stretch",
            city: "Chennai, Tamil Nadu",
            cutoff: "-",
            deadline: "-",
            fees: "₹11,900/1st yr",
          },{
            rank: 3,
            name: "St. Xaviers College",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1505106340220pxSt.XaviersUniversityKolkatalogo.png?h=30&w=30&mode=stretch",
            city: "Mumbai, Maharashtra",
            cutoff: "-",
            deadline: "-",
            fees: "₹7,000/1st yr",
          },{
            rank: 4,
            name: "Christ University",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1505110433fvvvvvvvvvvvvvvvvvvvvvvvvvvvvv.png?h=30&w=30&mode=stretch",
            city: "Bangalore, Karnataka",
            cutoff: "-",
            deadline: "8 Dec - 04 May 2024",
            fees: "₹90,000/1st yr",
          },
          {
            rank: 5,
            name: "Miranda House",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/col3004.jpg?h=30&w=30&mode=stretch",
            city: "New Delhi, Delhi NCR",
            cutoff: "CUET 2023 Cut off 770",
            deadline: "-",
            fees: "₹14,160/1st yr",
          },
          {
            rank: 6,
            name: "Presidency College",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1415341122loojo.png?h=30&w=30&mode=stretch",
            city: "Chennai, Tamil Nadu",
            cutoff: "-",
            deadline: "-",
            fees: "₹1,250/1st yr",
          },
          {
            rank: 7,
            name: "Madras Christian College",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1393668198Madras%20Christian%20College.png?h=30&w=30&mode=stretch",
            city: "Chennai, Tamil Nadu",
            cutoff: "-",
            deadline: "31 May 24",
            fees: "-",
          },
          {
            rank: 8,
            name: "Hindu College",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/col1904.jpg?h=30&w=30&mode=stretch",
            city: "New Delhi, Delhi NCR",
            cutoff: "CUET 2023 Cut off 762.3",
            deadline: "-",
            fees: "₹25,300/1st yr",
          },
          {
            rank: 9,
            name: "Hansraj College",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1491982583logo..png?h=30&w=30&mode=stretch",
            city: "New Delhi, Delhi NCR",
            cutoff: "CUET 2023 Cut off 754.6",
            deadline: "-",
            fees: "₹21,860/1st yr",
          },
          {
            rank: 10,
            name: "Fergusson College",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1409920983logo%20of.png?h=30&w=30&mode=stretch",
            city: "Pune, Maharashtra",
            cutoff: "-",
            deadline: "-",
            fees: "₹12,800/1st yr",
          }
        ], 
        "MBA": [
          {
            rank: 1,
            name: "Indian Institute of Management",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1701684988Screenshot20231204at3.46.10PM.png?h=30&w=30&mode=stretch",
            city: "Ahmedabad, Gujarat",
            cutoff: "CAT 2023 Cut off 99",
            deadline: "10 May 24",
            fees: "₹25,00,000/Total Fees",
          },
          {
            rank: 2,
            name: "Indian Institute of Management",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/col30730.png?h=30&w=30&mode=stretch",
            city: "Bangalore, Karnataka",
            cutoff: "CAT 2023 Cut off 99",
            deadline: "19 June - 31 Jan 2024",
            fees: "₹24,50,000/Total Fees",
          },
          {
            rank: 3,
            name: "Indian Institute of Management, Calcutta",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1488950580d2.png?h=30&w=30&mode=stretch",
            city: "Kolkata, West Bengal",
            cutoff: " CAT 2023 Cut off 99",
            deadline: "2 Aug - 30 Oct 2023",
            fees: "₹13,50,000/Total Fees",
          },
          {
            rank: 4,
            name: "XLRI",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1489041138e2.jpg?h=30&w=30&mode=stretch",
            city: "Jamshedpur, Jharkhand",
            cutoff: "XAT 2023 Cut off 92",
            deadline: "15 July - 10 Feb 2024",
            fees: "₹14,30,000/1st Year Fees",
          },
          {
            rank: 5,
            name: "FMS Delhi",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1389689790logo.gif?h=30&w=30&mode=stretch",
            city: "New Delhi, Delhi NCR",
            cutoff: "CAT 2023 Cut off 98",
            deadline: "15 Jan - 14 Feb 2024",
            fees: "₹1,00,000/1st Year Fees",
          },
          {
            rank: 6,
            name: "SP Jain[SPJIMR]",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1667475461Untitled.png?h=30&w=30&mode=stretch",
            city: "Mumbai, Maharashtra",
            cutoff: "CAT 2023 Cut off 85",
            deadline: "31 Oct - 31 May 2024",
            fees: "₹24,00,000/Total Fees",
          },
          {
            rank: 7,
            name: "Indian Institute of Management",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1408968357iiml.jpg?h=30&w=30&mode=stretch",
            city: "Lucknow, UP",
            cutoff: "CAT 2023 Cut off 85",
            deadline: "20 Nov - 18 Dec 2023",
            fees: "₹10,95,000/1st Year Fees",
          },
          {
            rank: 8,
            name: "Indian Institute of Management",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/15040011233170612211130512732232635840n.jpg?h=30&w=30&mode=stretch",
            city: "Indore, Madhya Pradesh",
            cutoff: "CAT 2023 Cut off 90",
            deadline: "2 Aug - 26 Mar 2024",
            fees: "₹5,00,000/1st Year Fees",
          },
          {
            rank: 9,
            name: "Indian Institute of Management",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1408967753iim.jpg?h=30&w=30&mode=stretch",
            city: "Kozhikode, Kerala",
            cutoff: "CAT 2023 Cut off 97",
            deadline: "1 May - 05 Feb 2024",
            fees: "₹20,50,000/Total Fees",
          },
          {
            rank: 10,
            name: "JBIMS",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1593019342Logo.png?h=30&w=30&mode=stretch",
            city: "Mumbai, Maharashtra",
            cutoff: "CAT 2023 Cut off 96",
            deadline: "7 July - 11 Jan 2024",
            fees: "₹3,50,000/1st Year Fees",
          }
        ],
        "M.Tech": [
          {
            rank: 1,
            name: "IIT Madras",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1434977143jpjpjpjpj.jpg?h=30&w=30&mode=stretch",
            city: "Chennai, Tamil Nadu",
            cutoff: "-",
            deadline: "20 Mar - 19 Apr 2024",
            fees: "₹24,600/1st Year Fees",
          },
          {
            rank: 2,
            name: "IIT Delhi",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/col27802.gif?h=30&w=30&mode=stretch",
            city: "New Delhi, Delhi NCR",
            cutoff: "-",
            deadline: "20 Mar - 04 Apr 2024",
            fees: "₹1,90,300/1st Year Fees",
          },
          {
            rank: 3,
            name: "IIT Bombay",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1431953162ccgsygdygw.jpg?h=30&w=30&mode=stretch",
            city: "Mumbai, Maharashtra",
            cutoff: "-",
            deadline: "20 Mar - 10 Apr 2024",
            fees: "₹59,300/1st Year Fees",
          },
          {
            rank: 4,
            name: "IIT Kharagpur",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1489041138e2.jpg?h=30&w=30&mode=stretch",
            city: "Kharagpur, West Bengal",
            cutoff: "-",
            deadline: "20 Mar - 21 Apr 2024",
            fees: "₹27,650/1st Year Fees",
          },
          {
            rank: 5,
            name: "IIT Kanpur",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1408554560logo.png?h=30&w=30&mode=stretch",
            city: "Kanpur, UP",
            cutoff: "-",
            deadline: "20 Mar - 18 Apr 2024",
            fees: "₹28,700/1st Year Fees",
          },
          {
            rank: 6,
            name: "IIT Roorkee",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1431775682rajiv.jpg?h=30&w=30&mode=stretch",
            city: "Roorkee, Uttarakhand",
            cutoff: "-",
            deadline: "18 Mar - 20 Apr 2024",
            fees: "₹40,100/1st Year Fees",
          },
          {
            rank: 7,
            name: "BITS Pilani",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1589790676112018648848892482726766654702028085722509n.jpg?h=30&w=30&mode=stretch",
            city: "Pilani, Rajasthan",
            cutoff: "-",
            deadline: "6 Mar - 19 Apr 2024",
            fees: "₹5,71,575/1st Year Fees",
          },
          {
            rank: 8,
            name: "IIT Guwati",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/1394864902Indian%20Institute%20of%20Technology%20-%20IIT%20Guwahati.png?h=30&w=30&mode=stretch",
            city: "Guwati, Assam",
            cutoff: "-",
            deadline: "20 Mar - 18 Apr 2024",
            fees: "₹95,750/1st Year Fees",
          },
          {
            rank: 9,
            name: "IIT Hyderabad",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/166089612015088476701200pxIndianInstituteofTechnologyHyderabadlogo.png?h=30&w=30&mode=stretch",
            city: "Hyderabad, Telengana",
            cutoff: "-",
            deadline: "18 Mar - 08 Apr 2024",
            fees: "₹53,550/1st Year Fees",
          },
          {
            rank: 10,
            name: "CEG, Anna University",
            image:
              "https://images.collegedunia.com/public/college_data/images/logos/13941065084.png?h=30&w=30&mode=stretch",
            city: "Chennai, Tamil Nadu",
            cutoff: "-",
            deadline: "-",
            fees: "₹56,260/1st Year Fees",
          }
        ],
      };
      setColleges(data);
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto py-6 lg:py-12 px-6 lg:px-24 mb-8 font-cat">
      <h1 className="text-2xl font-bold heading mb-4">Top 10 colleges</h1>
      <div className="flex justify-start overflow-x-auto">
        {["B.Tech", "B.Sc", "B.Com", "BBA", "BCA", "BA", "MBA", "M.Tech"].map(
          (course) => (
            <button
              key={course}
              onClick={() => setActiveTab(course)}
              className={`px-4 py-2 mb-2 mx-2 rounded-md ${
                activeTab === course ? "bg-[#235950] text-white" : "bg-gray-200"
              }`}
            >
              {course}
            </button>
          )
        )}
      </div>
      <div className="mt-5 overflow-x-auto">
        <table className="table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 w-16">Rank</th>
              <th className="px-4 py-4 w-[350px]">Name</th>
              <th className="px-4 py-2 w-[350px]">Cutoff Score</th>
              <th className="px-4 py-2 w-[300px]">Application Deadline</th>
              <th className="px-4 py-2 w-[250px]">Fees</th>
            </tr>
          </thead>
          <tbody>
            {colleges[activeTab]?.map((college, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{college.rank}</td>
                <td className="border px-4 py-2">
                  <div className="flex gap-x-4">
                    <div>
                      <img src={college.image} className="w-8" alt="7" />
                    </div>
                    <div>
                      <div>{college.name}</div>
                      <div>{college.city}</div>
                    </div>
                  </div>
                </td>
                <td className="border px-4 py-2">{college.cutoff}</td>
                <td className="border px-4 py-2">{college.deadline}</td>
                <td className="border px-4 py-2">{college.fees}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopUniversities;
