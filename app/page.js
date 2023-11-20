import "../app/page.css";
import arrow from "../public/home-arrow.svg";
import Image from "next/image";
export default function Home() {
  return (
    // Home section
    <>
      <div className="home-section">
        <div className="home-image-div">
          <img src="/images/hom-img.png" alt="" className="home-image" />
        </div>
        <div className="home-content-div">
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
        </div>

        {/* about section */}

        <div className="about-section-div">
          <div className="about-section">
            <p className="about-us">About Us</p>
            <h1 className="who-we-are">
              Who <span>We Are</span>
            </h1>
            <p className="about-text">
              We are a dynamic and innovative technology company that is
              committed to revolutionizingthe industry with cutting-edge
              solutions,our team of experts is hard at work developing
              game-changing products that will take the market by storm.
            </p>
            <h4 className="ceo-words">Words from the CEO</h4>
          </div>
        </div>

        {/* service section */}

        <div className="service-section-div">
          <div className="home-service-section">
            <div className="service-intro">
              <p className="home-service-first-tsxt">our</p>
              <h1>Services</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <div className="services">
                <div className="home-service-item">
                  <img src="/images/digital-marketing-dot.png" alt="" />
                  <p>Wholesale/Retail server provider</p>
                </div>
                <div className="home-service-item">
                  <img src="/images/wholsale&retail.png" alt="" />
                  <p>Digital Marketing Solution Partner</p>
                </div>
                <div className="home-service-item">
                  <img src="/images/webdev-dot.png" alt="" />
                  <p>Web Developments and & App developments</p>
                </div>
                <div className="learn-more-btn-div">
                  <button>
                    Learn More
                    <i className="bi bi-arrow-right service-arrow"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="home-service-img">
              <img src="/images/service_page.png" alt="" />
            </div>
          </div>
        </div>
        <div className="home-service-explore">
          <p>EXPLORE ALL TECHNICAL SERVICES</p>
        </div>

        {/* portfolio-section */}

        <div className="home-portfolio-div">
          <div className="home-portfolio-img-div">
            <img
              src="/images/portfolio-img.png"
              alt=""
              className="home-portfolio-img"
            />
          </div>
          <div className="home-portfolio-content-div">
            <div className="home-portfolio-content">
              <p>
                Dive-in to learn about our <br /> marketing portfolio and <br />{" "}
                creative skills.
              </p>
              <button className="home-portfolio-btn">Contact Us</button>
            </div>
          </div>
        </div>

        {/* testimonial section */}

        <div className="home-testimonial-div">
          <div className="home-testimonial-heading">
            <p>Testimonials</p>
            <h2>
              Our <span className="happy-clients">Happy Clients</span>
            </h2>
          </div>
          <div className="home-testimonial">
            <div className="testimonials">
              <img
                src="images/testimonial-img-2.jpg"
                alt=""
                className="testimonials-img"
              />

              <p className="testimonial-talk">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna ali
              </p>
              <div className="testimonial-ratings">
                <p className="testimonial-name">Amelia</p>
                <div className="rating-start">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </div>
              </div>
            </div>
            <div className="testimonials">
              <img
                src="/images/testimonial-img-1.jpg"
                alt=""
                className="testimonials-img"
              />

              <p className="testimonial-talk">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna ali
              </p>
              <div className="testimonial-ratings">
                <p className="testimonial-name">Robert Cook</p>
                <div className="rating-start">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
