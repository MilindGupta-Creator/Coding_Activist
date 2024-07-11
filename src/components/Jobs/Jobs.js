import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Jobs.css";
import Pagination from "react-bootstrap/Pagination";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";


function formatDate(date) {
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'short' });
  const year = date.getFullYear();
  
  const getDaySuffix = (day) => {
    if (day > 3 && day < 21) return 'th';
    switch (day % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  };

  return `${day}${getDaySuffix(day)} ${month} ${year}`;
}


const Jobs = () => {

  useEffect(() => {
    // Create a new meta tag for viewport
    const viewportMetaTag = document.createElement('meta');
    viewportMetaTag.name = "viewport";
    viewportMetaTag.content = "width=device-width, initial-scale=0.35, maximum-scale=1.0, user-scalable=no";

    // Append the new meta tag to the head
    document.head.appendChild(viewportMetaTag);
    
    // Clean up function to remove the viewport meta tag when the component unmounts
    return () => {
      document.head.removeChild(viewportMetaTag);
    };
  }, []);

  const itemsPerPage = 4; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);
  const [filterType, setFilterType] = useState("all"); // Default: "all"
  const [searchQuery, setSearchQuery] = useState("");
  const [jobsData, setJobsData] = useState([]);

  useEffect(() => {
    const fetchJobsData = async () => {
      const snapshot = await firebase
        .firestore()
        .collection("jobsDataCollection")
        .orderBy("createdAt", "desc")
        .get();

      const data = snapshot.docs.map((doc) => {
      const docData = doc.data();
      const createdAt = formatDate(docData.createdAt.toDate()); // Format Firestore Timestamp
      return { ...docData, id: doc.id, createdAt }; // Add formatted createdAt
    });
      setJobsData(data);
      console.log("Fetched jobs data:", data); // Debug log
    };

    fetchJobsData();
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  //                  HANDLERS            //

  // Filter jobs based on the filter type
  const filteredJobs = jobsData.filter((item) => {
    return (
      (filterType === "all" ||
        item.type === filterType ||
        (item.type === "internship" && filterType === "fulltime")) && // Include internship and full-time when filter is "all" or searching
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) // Filter by search query
    );
  });

  // Calculate the range of items to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Function to handle filter change
  const handleFilterChange = (filter) => {
    setFilterType(filter);
    setCurrentPage(1); // Reset to the first page when the filter changes
  };
  

  return (
    <div className="containers">
      {/* Meta description tag */}
      <meta
        name="description"
        content="Explore and discover various job opportunities, including full-time jobs and internships. Browse through our job listings, filter by type, and find detailed information about each job. Start your career journey with us."
      />

      {/* Filter controls */}
      <div className="filter-controls">
        <button
          onClick={() => handleFilterChange("all")}
          className={filterType === "all" ? "active" : ""}
        >
          All Jobs
        </button>
        <button
          onClick={() => handleFilterChange("fulltime")}
          className={filterType === "fulltime" ? "active" : ""}
        >
          Full-Time Jobs
        </button>
        <button
          onClick={() => handleFilterChange("internship")}
          className={filterType === "internship" ? "active" : ""}
        >
          Internship
        </button>
      </div>

      

      <div className="job-list">
        {currentJobs.map((item) => {
          console.log("Rendering job with ID:", item.id); // Debug log
          return (
            <div key={item.id} className="job-card" style={{ padding: "2rem" }}>
              <div className="both">
                <img className="job-image" src={item.image} alt={item.name} />
                <div className="jobsTogether">
                  <h2 className="job-title">{item.name}</h2>
                  <h2 className="job-title">{item.role}</h2>
                  <div className="JobsLocation">
                    <img
                      src="https://media.geeksforgeeks.org/img-practice/map-pin-1676956459.png"
                      alt="Job Location"
                      className="uiimage"
                    ></img>
                    <p className="job-info">{item.address}</p>
                  </div>
                </div>
              </div>
              <div className="lower-data">
                <Link to={`/jobs/${item.id}`}>
                  <button className="ReadMoreButton">Read More</button>
                </Link>
                <p
                  className="text-gray"
                  style={{
                    fontSize: "15px",
                    position: "relative",
                    left: "2rem",
                  }}
                >
                  Posted : {item.createdAt}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination component */}
      <Pagination className="pagination">
        {currentPage > 1 && (
          <Pagination.Prev
            className="prev-next"
            onClick={() => handlePageChange(currentPage - 1)}
          />
        )}

        {[...Array(Math.ceil(filteredJobs.length / itemsPerPage))].map(
          (_, index) => {
            const pageNumber = index + 1;
            const isPageInRange =
              pageNumber === 1 ||
              pageNumber === currentPage ||
              pageNumber === currentPage - 1 ||
              pageNumber === currentPage + 1;

            if (isPageInRange) {
              return (
                <Pagination.Item
                  key={pageNumber}
                  active={pageNumber === currentPage}
                  onClick={() => handlePageChange(pageNumber)}
                >
                  {pageNumber}
                </Pagination.Item>
              );
            }

            return null;
          }
        )}

        {currentPage < Math.ceil(filteredJobs.length / itemsPerPage) && (
          <Pagination.Next
            className="prev-next"
            onClick={() => handlePageChange(currentPage + 1)}
          />
        )}
      </Pagination>
    </div>
  );
};

export default Jobs;
