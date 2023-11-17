import "../app/page.css";
import arrow from "../public/home-arrow.svg";
import Image from "next/image";
export default function Home() {
  return (
    // Home section
    <div className="home-section">
      <div className="home-image-div">
        <img src="/images/hom-img.png" alt="" className="home-image" />
      </div>
      <div className="home-content">
        <p className="first-content">We're</p>
        <p className="second-content">Crafting digital narratives</p>
        <p className="third-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="home-btn-div">
          <button className="home-btn">
            GET STARTNOW <Image src={arrow} className="home-arrow-svg" />
          </button>
        </div>
      </div>
    
      {/* about section */}

      <div className="about-section-div">
        <div className="about-section">
          <p className="about-us">ABOUT US</p>
          <h1>WHO WE ARE</h1>
          <p>
            We are a dynamic and innovative technology company that is committed
            to revolutionizingthe industry with cutting-edge solutions,our team
            of experts is hard at work developing game-changing products that
            will take the market by storm.
          </p>
          <h4>Words from the CEO</h4>
        </div>
      </div>
    </div>
    
  );
}
