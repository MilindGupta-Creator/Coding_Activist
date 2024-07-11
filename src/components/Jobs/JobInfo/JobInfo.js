import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const JobInfo = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);
  const [error, setError] = useState(null); // Add error state

  const jobids = parseInt(jobId);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        console.log("Fetching job details for jobId:", jobids);
        const docRef = firebase.firestore().collection("jobsData").doc(jobids);
        console.log(docRef,"docref");
        const doc = await docRef.get();
        console.log(doc,"doc");

        console.log("Firestore document:", doc.exists ? doc.data() : "Document not found");
        if (doc.exists) {
          setJob(doc.data());
        } else {
          setError("Job not found."); // Set error state
        }
      } catch (err) {
        console.error("Error fetching job details:", err);
        setError("Failed to fetch job details."); // Set error state
      }
    };
  
    fetchJobDetails();
  }, [jobids]);
  
  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <div className="job-details">
      <h1>{job.name}</h1>
      <img src={job.image} alt={job.name} className="job-image" />
      <h2>{job.role}</h2>
      <p>{job.description}</p>
      <div className="job-info">
        <h3>Location:</h3>
        <p>{job.address}</p>
      </div>
    </div>
  );
};

export default JobInfo;
