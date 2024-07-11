import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet";
import "./Resume.css";
import Faq from "./Faq";
import Testimonial from "./Testimonial";

const Resume = () => {
  return (
    <div>
      <Helmet>
        {/* SEO meta tags */}
        <title>Professional Resume Writing Services - CodingActivist</title>
        <meta
          name="description"
          content="Enhance your resume to impress recruiters with CodingActivist's tailored ATS resume writing services for entry-level jobs. Get personalized resume review, keyword optimization, and more."
        />
        <link rel="canonical" href="https://codingactivist.com/#/resume_service" />
         {/* Open Graph Protocol (OGP) meta tags for social media */}
         <meta property="og:title" content="Professional Resume Writing Services - CodingActivist" />
        <meta property="og:description" content="Enhance your resume to impress recruiters with CodingActivist's tailored ATS resume writing services for entry-level jobs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://codingactivist.com/resume" />
        <meta property="og:image" content="https://codingactivist.com/your-image.jpg" />
        
        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@YourTwitterHandle" />
        <meta name="twitter:title" content="Professional Resume Writing Services - CodingActivist" />
        <meta name="twitter:description" content="Enhance your resume to impress recruiters with CodingActivist's tailored ATS resume writing services for entry-level jobs." />
        <meta name="twitter:image" content="https://codingactivist.com/your-image.jpg" />

        {/* JSON-LD structured data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Resume Writing Services",
              "description": "Tailored ATS resume writing services for entry-level jobs.",
              "provider": {
                "@type": "Organization",
                "name": "CodingActivist",
                "sameAs": "https://codingactivist.com"
              }
              // Add other relevant fields
            }
          `}
        </script>


      </Helmet>
      <nav className="resume_navbar">
        <p className="resume_title">
          Enhance your Resume to Impress Recruiters
        </p>
        <p className="resume_title2">
          Get Tailored ATS Resume Writing services for Entry Level Jobs
        </p>
      </nav>
      <div className="resume_review">
        200+ Jobseekers got benefitted from the service
      </div>
      <div className="resume_line_height"></div>
      <div className="resume_features">
        <table>
          <thead>
            <tr>
              <th>Benefits of CodingActivist</th>
              <th>Free Resume</th>
              <th style={{ backgroundColor: "black", fontWeight: "500" }}>
                CodingActivist Resume
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="xdxdxd">Resume visible to all recruiters</td>
              <td className="tick-cell">&#10003;</td>
              <td className="tick-cell">&#10003;</td>
            </tr>
            <tr>
              <td className="xdxdxd">Personalized Resume Review</td>
              <td>&#10008;</td> {/* Cross symbol */}
              <td className="tick-cell">&#10003;</td> {/* Tick symbol */}
            </tr>
            <tr>
              <td className="xdxdxd">Keyword Optimization</td>
              <td>&#10008;</td> {/* Cross symbol */}
              <td className="tick-cell">&#10003;</td>
            </tr>
            <tr>
              <td className="xdxdxd">ATS-Friendly Formatting</td>
              <td>&#10008;</td> {/* Cross symbol */}
              <td className="tick-cell">&#10003;</td> {/* Tick symbol */}
            </tr>
            <tr>
              <td className="xdxdxd">Job-specific Tailoring</td>
              <td>&#10008;</td> {/* Cross symbol */}
              <td className="tick-cell">&#10003;</td>
            </tr>
            <tr>
              <td className="xdxdxd">Upto 5 Times Revisions</td>
              <td>&#10008;</td>
              <td className="tick-cell">&#10003;</td> {/* Tick symbol */}
            </tr>
            <tr>
              <td className="xdxdxd">Get Active Customer Support</td>
              <td>&#10008;</td>
              <td className="tick-cell">&#10003;</td> {/* Tick symbol */}
            </tr>
            {/* <tr>
              <td>Row 6 Data</td>
              <td>Row 6 Data</td>
              <td>&#10008;</td>
            </tr>
            <tr>
              <td>Row 7 Data</td>
              <td>Row 7 Data</td>
              <td  className="tick-cell">&#10003;</td>
            </tr> */}
          </tbody>
        </table>
        <div className="resume_purchase">
          <section class="purchase" id="buy-now">
            <div>
              <ul>
                <li>
                  <a href="/startup-wordpress/?add-to-cart=121014">
                    <strong>One License</strong>
                    <span class="purchase-description">1 Website</span>
                    <span class="purchase-description">1 Year Updates</span>
                    <span class="purchase-description">
                      1 Year Email Support
                    </span>
                    <big class="purchase-price">$149</big>
                    <span class="purchase-button">Buy Now</span>
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
      <div className="resume_points">
        <h1>
          Candidates who invest in a professionally written resume report:
        </h1>
        <div className="everythingisgrid">
        <div className="icon-container">
          <div className="together_circle">
          <div className="circle"></div>
          <FontAwesomeIcon icon={faChartLine} size="3x" className="chartline" />
          </div>
          
          <h3 style={{color:"darkblue"}}>Get noticed more</h3>
          <p style={{position:"relative",bottom:"2rem",right:"1rem",lineHeight:"1.4",fontWeight:"500"}}>
            Job seekers using TopResume are interviewed 2 to 3 times more often
            than those using self-written resumes.
          </p>
        </div>
        <div className="icon-container">
          <div className="together_circle">
          <div className="circle"></div>
          <FontAwesomeIcon icon={faChartLine} size="3x" className="chartline" />
          </div>
          
          <h3 style={{color:"darkblue"}}>Get noticed more</h3>
          <p style={{position:"relative",bottom:"2rem",right:"1rem"}}>
            Job seekers using TopResume are interviewed 2 to 3 times more often
            than those using self-written resumes.
          </p>
        </div>
        <div className="icon-container">
          <div className="together_circle">
          <div className="circle"></div>
          <FontAwesomeIcon icon={faChartLine} size="3x" className="chartline" />
          </div>
          
          <h3 style={{color:"darkblue"}}>Get noticed more</h3>
          <p style={{position:"relative",bottom:"2rem",right:"1rem"}}>
            Job seekers using TopResume are interviewed 2 to 3 times more often
            than those using self-written resumes.
          </p>
        </div>
        </div>
        
        
      </div>
      <div style={{height:"19rem"}}>
        <Testimonial/>
      </div>
      <div className="faq">
          <Faq/>
      </div>
      
    </div>
  );
};

export default Resume;
