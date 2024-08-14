import React from "react";
import BannerUg from "../../components/Colleges/BannerUg";
import CityCard from "../../components/Colleges/CityCard";
import Heading from "../../components/common/Heading";

const cities = [
  {
    name: "Delhi",
    image:
      "https://lh5.googleusercontent.com/proxy/Wjn-MZbtcTiGNoeguVIHalSW8ACnEK8aQKGeg47MacSlJHLitMkIsyGghAR1ZNlh1A8mKYcOhhd51ZFwzU8EBxqByuIiGNoBLC4DFR68wHOhye6SHpXywLUZUtZzPQVScZwaSu2jHRvwdko0o6m66RxcstOFQG8=w675-h390-n-k-no",
    desc: "The City of Djinns",
  },
  {
    name: "Bangalore",
    image:
      "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRXjcbwh-SdzesUJH5O5h0derIEzWKwIAw7fww-C1oEqll6eQTGRqdrvTP5-bsQI68QfH6QndHBBc7afPW4_C4sxAg7nw3IuGQni8CNfA",
    desc: "The IT Capital of India",
  },
  {
    name: "Hyderabad",
    image:
      "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQuF6-kR1wyR_EAxK6NkVw8uPjUTbOCx4Xak58WAXLmVy_I2TxtF4YNPRu_CULsUo3ywsa_plGv1ZwU66eIL7uWs6qoC5K8-GXvEuU5qxQ",
    desc: "The City of Pearls",
  },
  {
    name: "Kolkata",
    image:
      "https://lh5.googleusercontent.com/p/AF1QipNsIVE7E2eQ_MI9RFNeE9i96IK8fTY8RtX41tDX=w675-h390-n-k-no",
    desc: "The City of Joy",
  },
  {
    name: "Chennai",
    image:
      "https://lh5.googleusercontent.com/proxy/EiVJG2gdyJBb2WJquLIf3gwltNLXdllN-Orr10h_JMOn9dZHny9BNN9DgbhbIT7G7-QIYlEtsgqNWg0Ndd--kN0xdszS_UClDWeZSniZLOOgHA4RueawA7aP3Zfj6gXkEgivrbcz0IfSCOXR6X0Ypkq5D84XuRA=w675-h390-n-k-no",
    desc: "The Detroit of Asia",
  },
  {
    name: "Mumbai",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Chhatrapati_shivaji_terminus%2C_esterno_01.jpg/218px-Chhatrapati_shivaji_terminus%2C_esterno_01.jpg",
    desc: "The City of Dreams",
  },
  // {
  //   name: "Pune",
  //   image:
  //     "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Pune_Palace.jpg/225px-Pune_Palace.jpg",
  //   desc: "The Oxford of the East",
  // },
  // {
  //   name: "Madurai",
  //   image:
  //     "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQ4Hv3wOkhOaVKtsOubMagJqyKG1ZEMdvPmyCjrCEnSlc6o4AR_IRO0gkRfsiZR6b5_80ADpj8bzkKXatHcPGtYdHdRCDBZVhWO0IMElA",
  //   desc: "The City that never sleeps",
  // },
];

const UndergraduatePage = () => {
  return (
    <div>
      <BannerUg />
      <div className="container flex flex-col justify-center items-center mx-auto px-4 py-12">
        <Heading normalText="Undergraduate" highlightText="Program" />
        {/* <h1 className="text-4xl font-bold text-center mb-6">Undergraduate</h1> */}
        <p className="text-lg text-gray-700 leading-relaxed mt-6 mb-12 text-center">
          Discover the best undergraduate colleges across major cities in India.
          Explore various programs and find the perfect fit for your academic
          and career aspirations.
        </p>
        <div className="grid place-items-center gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {cities.map((city, index) => (
            <CityCard
              imgLink={city.image}
              title={city.name}
              desc={city.desc}
              pageUrl={`/explorecity?city=${city.name}&programType=Undergraduate`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UndergraduatePage;
