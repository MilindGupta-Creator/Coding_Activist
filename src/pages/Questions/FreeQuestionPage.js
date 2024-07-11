import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { Link } from "react-router-dom";

const FreeQuestionPage = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      const snapshot = await firebase.firestore().collection("codefiles").get();
      const data = [];
      snapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      setFiles(data);
    };

    fetchFiles();
  }, []);

  console.log(files, "filesData");

  return (
    <div className="bg-[#181818] min-h-[calc(100svh-56px)]">
      <h1 className="mb-4 flex items-center space-x-2 border-b text-left text-lg font-semibold uppercase">
        <span className="text-white  relative left-48">
          Explore Coding Problems
        </span>
        <span className=" relative left-48 inline-flex w-[105px] flex-shrink-0 items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-center text-xs font-medium text-yellow-800">
          Early Access
        </span>
      </h1>
      <div className="container flex flex-col gap-8">
        {files.map((file) => (
            <Link to={`/questions/${file.id}`}>
          <ul key={file.id} className="flex flex-col mt-4">
            <div className="flex bg-[#211d1d] min-h-[80px] rounded-md gap-4 items-center w-[50%]">
              <div class="flex w-full flex-col gap-[5px] py-2">
                <div class="flex items-center gap-2">
                  <p class="font-bold text-white">{file.title}</p>
                </div>
                <p class="text-sm leading-[100%] text-gray-300">
                  Most software out there is about creating, reading, updating,
                  and deleting data.
                </p>
                <div class="skills flex flex-wrap gap-2">
                  <div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-[#99425B] bg-[#99425B] text-white">
                    JEST
                  </div>
                  <div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-[#F0DB4F] bg-[#F0DB4F] text-black">
                    js
                  </div>
                </div>
              </div>
              <div>
                <img src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" alt="" srcset="" className="w-10 h-10 rounded-md object-cover " />
              </div>
            </div>
          </ul>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FreeQuestionPage;
