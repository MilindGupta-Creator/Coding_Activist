import React ,{useEffect}from "react";
import { Link } from "react-router-dom";
import ReactDOMServer from 'react-dom/server';
import "./Body.css";
import CompanyProfile from './CompanyProfile';

const Body = () => {

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



  const encodedHTML = ReactDOMServer.renderToString(<CompanyProfile />);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#181818] font-sans">
      <div className="text-white text-7xl font-bold lg:mt-[-8rem] mt-12">
        <h1 className="text-[#DEE3EA]">
          Create. Connect. <br />
          <span className="ml-4 lg:ml-0">Discover.</span>
        </h1>
      </div>
      <p
        className="text-[#DEE3EA] text-lg text-3xl mt-12 text-center text-leftmax-w-none px-4 px-0"
        style={{
          fontWeight: "700",
          fontSize: "x-large",
          lineHeight:"45px"
        }}
      >
        This is a Community of Coders{" "}
        <span className="text-red-500">who are passionate</span> in Computer
        Science Field, <br />
        <span className="ml-2">
          <span className="text-yellow-500">
            Hunting for their next tech job{" "}
          </span>
          and are building a unique product.
        </span>
      </p>
      <div dangerouslySetInnerHTML={{ __html: encodedHTML }} />

      <div className="mt-8">
        <Link
          className="bg-green-600 text-white py-3 px-6 rounded-full transition duration-300 ease-in-out font-semibold hover:bg-green-700"
          to="/jobs"
        >
          Jobs →
        </Link>
      </div>
    </div>
  );
};

export default Body;
