import React, { useEffect, useState, useRef } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useIntersectionObserver } from "../../../hooks/useIntersectionObserver";
import SVG from "../../../assets/Vector.png";
import { motion } from "framer-motion";
import Heading from "../../common/Heading";
import ConsultationModal from "../ConsultationModal";

const StyledCard = styled(Card)(({ theme }) => ({
  transition: "transform 0.3s, box-shadow 0.3s",
  backgroundColor: "white",
  color: "green",
  border: "2px solid #235950",
  boxShadow: "0px 4px 8px rgba(255, 255, 255, 0.3)",
  "&:hover": {
    transform: "scale(1.03)",
    boxShadow: "0px 8px 16px rgba(255, 255, 255, 0.5)",
  },
}));

const Container = styled(Box)(({ theme }) => ({
  backgroundColor: "#235950/50",
  color: "",
  padding: "16px",
  position: "relative",
}));

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollPosition;
};

const events = [
  {
    id: 1,
    title: "Education Fairs and Open Houses",
    description:
      "Attend our exclusive education fairs and open houses, where you can directly interact with representatives from universities and B-Schools.",
    additionalInfo:
      "It's an excellent opportunity to gather comprehensive information, clarify doubts, and make informed decisions about your educational journey.",
    link: "/events?tab=upcoming",
    linkText: "Explore our events!",
    imgSrc:
      "https://res.cloudinary.com/du3i8e0se/image/upload/v1722275884/Firefly_education_fair_graphic_illustration_49011-removebg-preview_ftpwnx.png",
  },
  {
    id: 2,
    title: "Expert Guidance",
    description:
      "Our team of experienced education consultants is committed to providing personalized guidance tailored to your unique needs.",
    additionalInfo:
      "We understand that every student has different aspirations and requirements, and we're here to help you find the perfect educational fit.",
    link: "#",
    linkText: "Book a Consultation Now!",
    imgSrc:
      "https://res.cloudinary.com/du3i8e0se/image/upload/v1722275884/Firefly_education_fair_graphic_illustration_27543-removebg-preview_ncpnwc.png",
  },
  {
    id: 3,
    title: "Wide Range of Options",
    description:
      "Career Valley offers a vast portfolio of Indian and global universities and B-Schools, ensuring that you have access to a diverse range of programs and specializations.",
    additionalInfo:
      "We'll help you explore and choose the best educational institution that aligns with your goals.",
    link1: "/colleges/ug",
    linkText1: "UG Options",
    link2: "/colleges/pg",
    linkText2: "PG Options",
    imgSrc:
      "https://res.cloudinary.com/du3i8e0se/image/upload/v1722275884/Firefly_wide_range_of_career_options_graphic_illustration_like_engineer__doctor__lawyer__manager_511__1_-removebg-preview_m83how.png",
  },
  {
    id: 4,
    title: "Unparalleled Support",
    description:
      "We believe in comprehensive support throughout your educational journey. From initial consultations to application assistance and beyond, we'll be there to provide guidance, advice, and assistance at every step.",
    additionalInfo:
      "We're committed to ensuring that your educational experience is smooth and successful.",
    link: "/contact",
    linkText: "Contact Us!",
    imgSrc:
      "https://res.cloudinary.com/du3i8e0se/image/upload/v1722275885/Firefly_wide_range_of_career_options_graphic_illustration_like_engineer__doctor__lawyer__manager_511__2_-removebg-preview_y1trcf.png",
  },
];

const getLeftPosition = () => {
  const width = window.innerWidth;
  if (width < 545) return "7.6%";
  else if (width >= 546 && width <= 760) return "6.1%";
  else if (width >= 761 && width <= 1024) return "4.85%";
  return "48.67%";
};

const isDesktopView = () => window.innerWidth >= 1024;

export default function TimelineComponent() {
  const scrollPosition = useScrollPosition();
  const itemRefs = useRef([]);
  const connectorRefs = useRef([]);
  const dotRefs = useRef([]);
  const separatorRefs = useRef([]);
  const [activeDotIndex, setActiveDotIndex] = useState(null);
  const [leftPosition, setLeftPosition] = useState(getLeftPosition());
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  // Update the left position on resize
  useEffect(() => {
    const handleResize = () => {
      setLeftPosition(getLeftPosition());
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //use intersection observer to detect when the svg crosses a timiline dot
  useIntersectionObserver(
    dotRefs.current,
    (entry) => {
      const index = parseInt(entry.target.dataset.index, 10);
      if (entry.isIntersecting) {
        setActiveDotIndex(index);
      }
    },
    {
      threshold: 0.5,
    }
  );

  return (
    <div>
      <Heading normalText="Why Join" highlightText="Us"/>
      <Container>
        <div>
          <img
            src={SVG}
            alt="Rocket"
            id="rocket-image"
            className="h-[35px]"
            style={{
              position: "absolute",
              left: leftPosition,
              top: "0px",
              transition: "top 0.3s",
              transform: `translateY(${Math.min(
                scrollPosition * 0.7,
                isDesktopView() ? 1475 : 2200
              )}px)`,
              zIndex: "9",
            }}
          />
        </div>

        {/* desktop timeline */}
        <Timeline
          position="alternate"
          sx={{
            display: { xs: "none", md: "none", lg: "block" },
          }}
        >
          {events.map((item, index) => (
            <TimelineItem
              key={item.id}
              ref={(el) => (itemRefs.current[index] = el)}
              className="timeline-item hidden lg:block"
            >
              <TimelineOppositeContent
                className="hidden lg:block"
                sx={{
                  m: "auto 0",
                  color: "#2A675C",
                  textAlign: "left",
                }}
                variant="body2"
              >
                <div className="flex justify-center items-center">
                  <img src={item.imgSrc} className="h-[350px] floating" />
                </div>
              </TimelineOppositeContent>

              <TimelineSeparator
                ref={(el) => (separatorRefs.current[index] = el)}
                sx={{ position: "relative" }}
              >
                <TimelineConnector
                  className="timeline-connector hidden lg:block"
                  ref={(el) => (connectorRefs.current[index] = el)}
                  sx={{
                    bgcolor: "grey",
                    height: "150px",
                  }}
                />
                <TimelineDot
                  className="timeline-dot list-none"
                  ref={(el) => (dotRefs.current[index] = el)}
                  sx={{
                    bgcolor: activeDotIndex === index ? "#235950" : "white",
                    color: activeDotIndex === index ? "white" : "#2A675C",
                    transform:
                      activeDotIndex === index ? "scale(1.05)" : "scale(1)",
                    transition: "all 0.3s ease-in-out",
                  }}
                  data-index={index}
                >
                  <p className="hidden lg:block">
                    <SchoolOutlinedIcon />
                  </p>
                </TimelineDot>
                <TimelineConnector
                  className="timeline-connector hidden lg:block"
                  ref={(el) => (connectorRefs.current[index] = el)}
                  sx={{
                    bgcolor: "grey",
                    height: "150px",
                  }}
                />
              </TimelineSeparator>

              <TimelineContent
                className="hidden lg:block"
                sx={{ py: "12px", px: 2 }}
              >
                <StyledCard sx={{ mt: "45px" }}>
                  <CardContent>
                    <Typography
                      variant="h6"
                      component="span"
                      sx={{
                        textAlign: "left",
                        fontWeight: "bold",
                        color: "#2A675C",
                        marginBottom: 2,
                      }}
                    >
                      <p>{item.title}</p>
                    </Typography>
                    <Typography
                      variant="body1"
                      component="p"
                      sx={{
                        textAlign: "justify",
                        marginBottom: 2,
                        color: "#2A675C",
                      }}
                    >
                      {item.description}
                    </Typography>
                    <Typography
                      variant="body2"
                      component="p"
                      sx={{
                        textAlign: "justify",
                        color: "#2A675C",
                      }}
                    >
                      {item.additionalInfo}
                    </Typography>
                    {item.link && (
                      <div className="mt-8">
                        <Link
                          to={item.link}
                          onClick={item.id === 2 ? openModal : null}
                          className="text-[#2A675C]  bg-white px-6 py-3 mb-4 md:mb-0 rounded-md shadow-lg hover:bg-[#24594e] ring-1 ring-[#235950] hover:ring-1 hover:ring-white hover:text-white transition duration-300 ease-in-out"
                        >
                          {item.linkText}
                        </Link>
                      </div>
                    )}
                    {item.link1 && item.link2 && (
                      <div className="flex justify-between mt-6">
                        <Link
                          to={item.link1}
                          className="text-[#2A675C] bg-white px-6 py-3 mb-4 md:mb-0 rounded-md shadow-lg hover:bg-[#24594e] ring-1 ring-[#235950] hover:ring-1 hover:ring-white hover:text-white transition duration-300 ease-in-out"
                        >
                          {item.linkText1}
                        </Link>
                        <Link
                          to={item.link2}
                          className="text-[#2A675C] bg-white px-6 py-3 mb-4 md:mb-0 rounded-md shadow-lg hover:bg-[#24594e] ring-1 ring-[#235950] hover:ring-1 hover:ring-white hover:text-white transition duration-300 ease-in-out"
                        >
                          {item.linkText2}
                        </Link>
                      </div>
                    )}
                  </CardContent>
                </StyledCard>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>

        {/* Mobile & Tablet Timeline */}
        <Timeline
          className="block"
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
            display: { xs: "block", lg: "none" },
          }}
        >
          {events.map((item, index) => (
            <TimelineItem
              key={item.id}
              ref={(el) => (itemRefs.current[index] = el)}
              className="timeline-item flex justify-start items-start"
              sx={{
                flexDirection: "row",
              }}
            >
              <TimelineSeparator
                sx={{ alignSelf: "flex-start" }}
                className="block lg:hidden"
              >
                <TimelineConnector
                  className="block lg:hidden"
                  sx={{
                    borderStyle: "dotted",
                    // borderColor: styles.connectorColor,
                    height: "250px",
                  }}
                />
                <TimelineDot
                  className="timeline-dot list-none"
                  ref={(el) => (dotRefs.current[index] = el)}
                  sx={{
                    bgcolor: activeDotIndex === index ? "#235950" : "white",
                    color: activeDotIndex === index ? "white" : "#2A675C",
                    transform:
                      activeDotIndex === index ? "scale(1.15)" : "scale(1)",
                    transition: "all 0.3s ease-in-out",
                  }}
                  data-index={index}
                >
                  <p className="block lg:hidden">
                    <SchoolOutlinedIcon />
                  </p>
                </TimelineDot>
                <TimelineConnector
                  className="block lg:hidden"
                  sx={{
                    borderStyle: "dotted",
                    // borderColor: styles.connectorColor,
                    height: "250px",
                  }}
                />
              </TimelineSeparator>
              <TimelineContent
                sx={{ py: "12px", px: 2 }}
                className="block lg:hidden"
              >
                <StyledCard className="block lg:hidden">
                  <CardContent className="block lg:hidden">
                    <Typography
                      variant="h6"
                      component="span"
                      sx={{
                        textAlign: "justify",
                        fontWeight: "bold",
                        color: "#2A675C",
                        marginBottom: 2,
                        fontSize: "1rem",
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      component="p"
                      sx={{
                        textAlign: "justify",
                        marginBottom: 2,
                        color: "black",
                        fontWeight: "bold",
                        fontSize: "0.875rem",
                      }}
                    >
                      {item.description}
                    </Typography>
                    <Typography
                      variant="body2"
                      component="p"
                      sx={{
                        textAlign: "justify",
                        marginBottom: 2,
                        color: "black",
                        fontSize: "0.75rem",
                      }}
                    >
                      {item.additionalInfo}
                    </Typography>
                    {item.link && (
                      <Typography
                        variant="body2"
                        component={Link}
                        to={item.link}
                        onClick={item.id === 2 ? openModal : null}
                        className="text-[#2A675C]  bg-white px-6 py-3 mb-4 md:mb-0 rounded-md shadow-lg hover:bg-[#24594e] ring-1 ring-[#235950] hover:ring-1 hover:ring-white hover:text-white transition duration-300 ease-in-out"
                        sx={{}}
                      >
                        {item.linkText}
                      </Typography>
                    )}

                    <div className="flex justify-between">
                      {item.link1 && (
                        <Typography
                          variant="body2"
                          component={Link}
                          to={item.link1}
                          className="text-[#2A675C]  bg-white px-6 py-3 mb-4 md:mb-0 rounded-md shadow-lg hover:bg-[#24594e] ring-1 ring-[#235950] hover:ring-1 hover:ring-white hover:text-white transition duration-300 ease-in-out"
                          sx={{}}
                        >
                          {item.linkText1}
                        </Typography>
                      )}
                      {item.link2 && (
                        <Typography
                          variant="body2"
                          component={Link}
                          className="text-[#2A675C] bg-white px-6 py-3 mb-4 md:mb-0 rounded-md shadow-lg hover:bg-[#24594e] ring-1 ring-[#235950] hover:ring-1 hover:ring-white hover:text-white transition duration-300 ease-in-out"
                          to={item.link2}
                          sx={{}}
                        >
                          {item.linkText2}
                        </Typography>
                      )}
                    </div>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        mt: 6,
                      }}
                    >
                      <img
                        src={item.imgSrc}
                        className="h-[350px] floating"
                        style={{
                          // width: isMobileOrTablet ? "100%" : "auto",
                          height: "150px",
                          objectFit: "contain",
                        }}
                        alt={item.title}
                      />
                    </Box>
                  </CardContent>
                </StyledCard>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
      <ConsultationModal isOpen={modalIsOpen} onClose={closeModal}/>
    </div>
  );
}
