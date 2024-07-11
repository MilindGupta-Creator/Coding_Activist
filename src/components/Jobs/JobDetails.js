// src/components/JobDetails.js
// React component for displaying detailed information about a job, including job role, company details, and application process.
// Supports copying the job URL to the clipboard and sharing job details. Uses React Router for navigation.

import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import jobsData from "../../utils/jobsdata.js";
import { toast, ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "react-toastify/dist/ReactToastify.css";
import "./JobDetails.css"; // Create a separate CSS file for styling
import "../../components/Jobs/Jobs.css";

const JobDetails = () => {

  useEffect(() => {
    // Create a new meta tag for viewport
    const viewportMetaTag = document.createElement('meta');
    viewportMetaTag.name = "viewport";
    viewportMetaTag.content = "width=device-width, initial-scale=0.25, maximum-scale=1.0, user-scalable=no";

    // Append the new meta tag to the head
    document.head.appendChild(viewportMetaTag);
    
    // Clean up function to remove the viewport meta tag when the component unmounts
    return () => {
      document.head.removeChild(viewportMetaTag);
    };
  }, []);
  

  const { jobId } = useParams();
  const [similarJobs, setSimilarJobs] = useState([]);

  useEffect(() => {
    const fetchSimilarJobs = async () => {
      try {
        const snapshot = await firebase
          .firestore()
          .collection("jobsData")
          .orderBy("id", "desc")
          .limit(2)
          .get();
        const similarJobsData = snapshot.docs.map((doc) => doc.data());
        setSimilarJobs(similarJobsData);
      } catch (error) {
        console.error("Error fetching similar jobs:", error);
      }
    };

    fetchSimilarJobs();
  }, []);

  const job = jobsData.find((item) => item.id === parseInt(jobId));

  if (!job) {
    return <div className="job-not-found">Job not found</div>;
  }

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);

    toast.success("Copied to clipboard!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  
  

  return (
    <div
      className="details-container"
      style={{ padding: "5rem", height: "130rem" }}
    >
      <div className="job-details-container">
        <Link
          to="/jobs"
          className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white text-lg font-bold rounded-lg shadow-md hover:bg-blue-700"
        >
          Back to Jobs
        </Link>
        <div className="job-details">
         
          <div className="left" style={{ padding: "30px", height: "70rem" }}>
            <div className="upperpartJobDetails flex">
              <div className="upperpartJobDetailsLeft">
                <img className="job-image" src={job.image} alt={job.name} />
                <br />
                <br />
                <br />
                <h2 className="lg:text-5xl font-medium text-3xl text-black whitespace-nowrap">
                  {job.role}
                </h2>

                <h2 className="text-xl font-semibold text-gray-600">
                  {job.name}
                </h2>
                <p className="text-gray-700 w-33">{job.companyDesc}</p>
              </div>
              <div className="mt-6">
                <button
                  onClick={handleCopyToClipboard}
                  className="inline-block px-4 py-2 bg-blue-500 text-white text-lg font-bold rounded-lg shadow-md hover:bg-blue-600"
                >
                  Share
                </button>
              </div>
            </div>

            <h3 className="text-black mt-6">Skills</h3>
            <ul className="flex flex-wrap gap-2 text-gray-700">
              {job.skills.map((skill, index) => (
                <li key={index} className="bg-gray-200 p-2 rounded-md shadow">
                  {skill}
                </li>
              ))}
            </ul>

            <h3 className="text-black mt-6">Job Description :</h3>
            <p className="text-black">{job.description}</p>
            <h3 className="text-black mt-6">Responsibilities :</h3>

            <ol className="list-decimal pl-5 text-black">
              {job.responsibility.map((responsibility, index) => (
                <li key={index} className="text-black">
                  {responsibility}
                </li>
              ))}
            </ol>

            <h3 className="text-black mt-6">Qualifications :</h3>
            <ul className="list-disc pl-5 text-black">
              {job.qualification.map((qualification, index) => (
                <li className="skillslabels" key={index}>
                  {qualification}
                </li>
              ))}
            </ul>

            <div
              className="upperpartJobDetailsRight upperpartJobDetailsRights lg:left-0 left-2 "
              style={{
                width: "25%",
                marginLeft: "4rem",
                marginTop: "3rem",
              }}
            >
              <div className="salaryside">
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-black"
                >
                  <path
                    d="M13.3333 2H3.33325C2.23059 2 1.33325 2.89733 1.33325 4V12C1.33325 13.1027 2.23059 14 3.33325 14H13.3333C14.0686 14 14.6666 13.402 14.6666 12.6667V3.33333C14.6666 2.598 14.0686 2 13.3333 2ZM3.33325 12.6667C2.96525 12.6667 2.66659 12.3673 2.66659 12V4C2.66659 3.63267 2.96525 3.33333 3.33325 3.33333H13.3333V5.33333H9.33325C8.59792 5.33333 7.99992 5.93133 7.99992 6.66667V9.33333C7.99992 10.0687 8.59792 10.6667 9.33325 10.6667H13.3339V12.6667H3.33325ZM13.3333 6.66667V9.33333H9.33325V6.66667H13.3333Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span className="font-bold text-black">{job.salary}</span>
              </div>
              <div className="jobtype">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.9092 6.45458C13.9092 10.697 8.45458 14.3334 8.45458 14.3334C8.45458 14.3334 3 10.697 3 6.45458C3 5.00793 3.57468 3.62054 4.59761 2.59761C5.62054 1.57468 7.00793 1 8.45458 1C9.90122 1 11.2886 1.57468 12.3115 2.59761C13.3345 3.62054 13.9092 5.00793 13.9092 6.45458Z"
                    stroke="#A9A9AC"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="black"
                  ></path>
                  <path
                    d="M8.5 9C9.88071 9 11 7.88071 11 6.5C11 5.11929 9.88071 4 8.5 4C7.11929 4 6 5.11929 6 6.5C6 7.88071 7.11929 9 8.5 9Z"
                    stroke="#A9A9AC"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="black"
                  ></path>
                </svg>
                <b style={{ color: "#1D1D1F" }}>{job.type.toUpperCase()}</b>
              </div>
              <Link
                to={job.apply}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-green-500 text-white text-lg font-bold rounded-lg shadow-md hover:bg-green-600"
              >
                Apply
              </Link>
            </div>
          </div>
          <div style={{display: "flex",
    flexDirection: "column",
    /* height: 21rem; */
    marginTop: "12rem"}}>
          <h3 className="font-semibold text-4xl text-black">Apply for Similar Jobs :</h3>
          {/* Display similar jobs */}
          <div className="job-list " >
            
            {similarJobs.map((job) => (
              <div key={job.id} className="job-card" style={{width:"45%"}}>
                <Link
                  to={`/jobs/${job.id}`}
                  className="similar-job-link"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  <div
                    key={job.id}
                    // className="job-card"
                    style={{ padding: "2rem" }}
                  >
                    <div className="both">
                      <img
                        className="job-image"
                        src={job.image}
                        alt={job.name}
                      />
                      <div className="jobsTogether">
                        <h2 className="job-title">{job.name}</h2>
                        <h2 className="job-title">{job.role}</h2>
                        <div className="JobsLocation">
                          <img
                            src="https://media.geeksforgeeks.org/img-practice/map-pin-1676956459.png"
                            alt="Job Location"
                            className="uiimage"
                          ></img>
                          <p className="job-info">{job.address}</p>
                        </div>
                      </div>
                    </div>
                    <div className="lower-data">
                      <Link to={`/jobs/${job.id}`}>
                        <button className="ReadMoreButton">Read More</button>
                      </Link>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          </div>
         
        </div>

        <ToastContainer />
      </div>
    </div>
  );
};

export default JobDetails;
