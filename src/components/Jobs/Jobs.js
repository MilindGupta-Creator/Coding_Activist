import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Jobs.css";
import Pagination from "react-bootstrap/Pagination";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { CiLocationOn } from "react-icons/ci";

function formatDate(date) {
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "short" });
  const year = date.getFullYear();

  const getDaySuffix = (day) => {
    if (day > 3 && day < 21) return "th";
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  return `${day}${getDaySuffix(day)} ${month} ${year}`;
}

const Jobs = () => {
  useEffect(() => {
    // Create a new meta tag for viewport
    const viewportMetaTag = document.createElement("meta");
    viewportMetaTag.name = "viewport";
    viewportMetaTag.content =
      "width=device-width, initial-scale=0.35, maximum-scale=1.0, user-scalable=no";

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

      <div className="flex flex-wrap w-3/4 m-auto justify-around gap-4 my-10">
        {currentJobs.map((item) => {
          return (
            <div className="md:w-2/5 w-full border bg-black text-white flex p-4 rounded-md" key={item.id}>
              <div className="flex flex-col gap-5 justify-between w-1/2">
                <img src={item.image} className="h-20 w-20 rounded-lg object-contain bg-white"/>
                <Link to={`/jobs/${item.id}`}>
                <button className="bg-blue-400 px-4 py-2 rounded-lg hover:bg-blue-500 transition-all duration-200">Read more</button>
                </Link>
              </div>
              <div className="flex flex-col w-1/2">
                <p className="text-xl font-bold">{item.name}</p>
                <p className="text-md">{item.role}</p>
                <p className="flex items-center"><CiLocationOn />{item.address}</p>
                <p>Date Posted: {item.createdAt}</p>
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
