import Image from "next/image";
import "../about/about.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../Components/Footer";

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
            src="/images/about-page-mock.webp"
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
            <div className="learn-more-btn-div">
              <button>
                Learn More
                <i className="bi bi-arrow-right service-arrow"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="main-overlap-2">
        <div className="overlap-2">
          <div className="overlap-2-content">
            <p className="learn-more-optimize">
              <span className="text-wrapper-2">
                Learn More
                <br />
              </span>
              <span className="text-wrapper-3">
                Optimize Your Digital <br /> Marketing Campaings To Ensure
                <br /> The Best Result
              </span>
            </p>
            <p className="text-wrapper-4">
              With a robust industry tenure exceeding 5 years, we have
              cultivated a profound knowledge base that positions us as industry
              leaders ready to cater to your unique needs. At Illford
              Technologies , our journey is marked by continuous evolution and a
              commitment to excellence. Our seasoned team, well-versed in the
              latest industry trends, thrives on innovation and is dedicated to
              ensuring your success. Choose us for a client-centric approach,
              where transparent communication and collaboration converge to
              deliver not just services, but enduring partnerships.
            </p>
            <p className="text-wrapper-5">
              <i className="bi bi-check"></i>
              Best Team Work
              <br />
              <br />
              <i className="bi bi-check"></i>
              Legal Certification
            </p>
          </div>
          <img
            className="about-service-mock"
            src="/images/about-grp.webp"
            alt="about-learnmore"
          />
        </div>
      </div>
      <div className="our-award">
        <div className="our-award-div1">
          <p className="our-award-p">
            <span className="our-award-p1">
              Our Awards
              <br />
            </span>
            <span className="our-award-p2">Our Achievements</span>

            <br />
            <span className="our-award-p3">
              We are honored to be recognized with numerous awards and
              accolades.
            </span>
          </p>
          <div className="achievements-container">
            <div className="achievement-item">
              <p className="achievement-number">112</p>
              <p className="achievement-label">Completed Projects</p>
            </div>

            <div className="achievement-item">
              <p className="achievement-number">3</p>
              <p className="achievement-label">Years</p>
            </div>

            <div className="achievement-item">
              <p className="achievement-number">800</p>
              <p className="achievement-label">Coding Hours</p>
            </div>

            <div className="achievement-item">
              <p className="achievement-number">20</p>
              <p className="achievement-label">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>

      <div className="our-team">
        <div className="our-team-div1">
          <p className="our-team-p">
            <span className="our-team-p1">
              Our Team
              <br />
            </span>
            <span className="our-team-p2">We Are Ready to serve</span>
          </p>
        </div>
        <div className="our-team-img">
          <img
            className="about-team-mock"
            src="/images/our-team1.webp"
            alt="about-learnmore"
          />
          <img
            className="about-team-mock"
            src="/images/our-team2.webp"
            alt="about-learnmore"
          />
          <img
            className="about-team-mock"
            src="/images/our-team3.webp"
            alt="about-learnmore"
          />
        </div>
      </div>

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
              src="images/testimonial-img-2.webp"
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
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
            </div>
          </div>
          <div className="testimonials">
            <img
              src="/images/testimonial-img-1.webp"
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
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-blog-main-div">
        <div className="home-blog-heading">
          <p>Recent</p>
          <h2>Blog Post</h2>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4 blog-card">
          <div className="col">
            <div className="card">
              <img src="images/blog-1.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">
                  Grow Your Business with A Digital Marketing Strategy
                </p>
                <button className="home-blog-btn">Read More</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="images/blog-2.jpg" className="card-img-top" alt="" />
              <div className="card-body">
                <p className="card-text">
                  Digital Marketing: Stay Relevant To The Empowered consumer
                </p>
                <button className="home-blog-btn">Read More</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="images/blog-3.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">
                  5 Inexpensive Online Tools Get Your Business Off The Ground
                </p>
                <button className="home-blog-btn">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
