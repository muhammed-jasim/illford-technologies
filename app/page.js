import "../app/page.css";
import arrow from "../public/home-arrow.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
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
          <div className="home-social">
              <span><i className="bi bi-facebook"></i></span>
              <span><i className="bi bi-instagram"></i></span>
              <span><i className="bi bi-linkedin"></i></span>
              <span><i className="bi bi-twitter-x"></i></span>
              <span><i className="bi bi-youtube"></i></span>
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
              <img src="/images/service-page.png" alt="" />
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
              src="/images/portfolio-img.webp"
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
              <div className="home-portfolio-btn-div"> 
              <a href="#contact"><button className="home-portfolio-btn" >Contact Us</button></a>
              </div>
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
              <div className="testimonials-img-div">
                <img
                  src="images/testimonial-img-2.webp"
                  alt=""
                  className="testimonials-img"
                />
              </div>


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
              <div className="testimonials-img-div">
                <img
                  src="/images/testimonial-img-1.webp"
                  alt=""
                  className="testimonials-img"
                />
              </div>


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
                  <i className="bi bi-star-fill"></i>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>

        {/* blog section */}
        <div className="home-blog-main-div">
          <div className="home-blog-heading">
            <p>Recent</p>
            <h2>Blog Post</h2>
          </div>
          <div className="row row-cols-1 row-cols-md-3 g-4 blog-card">
            <div className="col">
              <div className="card">
                <img
                  src="images/blog-1.jpg"
                  className="card-img-top"
                  alt="..."
                />
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
                <img
                  src="images/blog-3.jpg"
                  className="card-img-top"
                  alt="..."
                />
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

        {/* contact section */}

        <Contact />

        {/* FAQ's section */}

        <div className="faq-main-div">
          <div className="faq-div">
            <div className="faq-heading">
              <h2>FAQ's</h2>
              <p>Some awesome words from awesome people</p>
            </div>
            <div className="questions-ans-div">
              <h2 className="questions">1.What is Illford Digital Company?</h2>
              <p className="answers">
                Illford Digital Company is a reputable digital marketing agency
                that specializes in helping businesses thrive in the online
                world. We provide a wide range of services to enhance your
                online presence and drive results.
              </p>
            </div>
            <div className="questions-ans-div">
              <h2 className="questions">
                2.What services does Illford Digital Company offer?
              </h2>
              <p className="answers">
                Illford Digital Company offers a comprehensive suite of digital
                marketing services, including Search Engine Optimization (SEO),
                Pay-Per-Click Advertising (PPC), Social Media Marketing, Content
                Creation, Web Design, Email Marketing, and more. We have all the
                tools you need for a successful online strategy.
              </p>
            </div>
            <div className="questions-ans-div">
              <h2 className="questions">
                3.How can Illford Digital Company benefit my business?
              </h2>
              <p className="answers">
                Illford Digital Company can benefit your business by increasing
                your brand's visibility, attracting high-quality traffic to your
                website, and converting visitors into customers. We use
                data-driven strategies and creativity to ensure your digital
                marketing efforts lead to success.
              </p>
            </div>
            <div className="questions-ans-div">
              <h2 className="questions">
                4.What sets Illford Digital Company apart from other digital
                marketing agencies?
              </h2>
              <p className="answers">
                What makes Illford Digital Company unique is our innovative
                approach, customer-centric focus, and a team of experts who are
                dedicated to achieving your goals. We're not just another
                agency; we're your strategic partner in the ever-evolving
                digital landscape.
              </p>
            </div>
            <div className="questions-ans-div">
              <h2 className="questions">
                5.Is Illford Digital Company's work measurable and data-driven?
              </h2>
              <p className="answers">
                Absolutely. We firmly believe in data-driven strategies. We
                employ advanced analytics and reporting tools to track the
                performance of our campaigns. Our approach is transparent, and
                we provide you with actionable insights to maximize your
                success.
              </p>
            </div>
            <div className="questions-ans-div">
              <h2 className="questions">
                6.Can Illford Digital Company customize its services to suit my
                business's specific needs?
              </h2>
              <p className="answers">
                Yes, we can. We understand that every business is unique. Our
                team of experts excels at tailoring our services to meet your
                specific goals and challenges. Your success is our top priority,
                and our strategies are adaptable to ensure you get the results
                you need.
              </p>
            </div>
            <div className="questions-ans-div">
              <h2 className="questions">
                7.How does Illford Digital Company stay up-to-date with industry
                trends?
              </h2>
              <p className="answers">
                Staying ahead of the curve is crucial. Illford Digital Company
                continuously monitors the latest trends in the digital marketing
                industry, such as voice search optimization, artificial
                intelligence, video content, and emerging social media
                platforms. We ensure your strategies align with the
                ever-changing landscape.
              </p>
            </div>
            <div className="questions-ans-div">
              <h2 className="questions">
                8.How can I get in touch with Illford Digital Company to discuss
                my digital marketing needs?
              </h2>
              <p className="answers">
                Contacting us is easy. You can reach out through our website,
                email, or phone. We'll be happy to schedule a consultation to
                discuss your goals and create a customized digital marketing
                strategy for your business.
              </p>
            </div>
          </div>
        </div>

        {/* Footer section */}

        <Footer />
      </div>
    </>
  );
}
