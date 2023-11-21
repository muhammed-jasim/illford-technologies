import Image from "next/image";
import "../about/about.css"


const About = () => {
  return (
    <div className="about-container">
      <div className="about-image-div">
        <img src="/images/about.png" alt="" className="about-image" />
      </div>

      <div className="about">
        <div className="about-content">
          <p> About Us</p>
        </div>
        <div className="about-main">
          <img
            className="about-img-mock"
            src="/images/about-page-mock.png"
            alt="about-page-mock"
          />

          <p className="about-our-company">
            <span className="text-wrapper">
              About our company
              <br />
            </span>
            <span className="about-text">
              Get to Audience with Targeted
              <br />
              Ads on Associative media
            </span>
          </p>
          <div className="overlap-1">
            <p className="about-mission">
              Our mission is to provide the best possible service and products
              that are in line with your business goals, while ensuring a
              seamless user experience. We aim to be at the forefront of digital
              marketing by providing innovative solutions for small and medium
              enterprises.
            </p>
            <div className="about-service">
              <p>• Wholesale/Retail server provider</p>
              <p>• Digital Marketing Services</p>
              <p>• Web Design & Development</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default About;
