import React,{useState,useEffect} from "react";
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
} from "@codesandbox/sandpack-react";
import CustomRunButton from "./CustomRunButton";
import DownloadButton from "./DownloadButton";
import ResetButton from "./ResetButton";
import ActiveFileDisplay from "./ActiveFileDisplay";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/firestore";
import { useParams } from "react-router-dom";
import {db} from "../../utils/Firebase/firebase"
import { doc, getDoc } from "firebase/firestore"; // Import Firestore methods
import "./styless.css";

const Toolbar = () => {
  return (
    <div className="flex gap-16 ml-11 mt-[-18px]">
      <ResetButton />
      <DownloadButton />
      <CustomRunButton />
    </div>
  );
};

const CodeSandboxComponent = () => {

  const {id} = useParams();
  const [files, setFiles] = useState(null);
  console.log(id, "id");

 useEffect(() => {
    const fetchFiles = async () => {
      try {
        const docRef = doc(db, "codefiles", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          console.log("Document data:", data);

          // Filter out title and description fields
          const filteredFiles = Object.keys(data)
            .filter(key => key !== "title" && key !== "description")
            .reduce((obj, key) => {
              obj[key] = data[key];
              return obj;
            }, {});
              
          

          setFiles(filteredFiles);

        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching document: ", error);
      }
    };

    fetchFiles();
  }, [id]);

  console.log("files==>",files);

  return (
    <SandpackProvider
      customSetup={{
        dependencies: {
          "react-markdown": "latest",
        },
      }}
      template="react"
//       files={{
//         "/App.js": `
// import './index.css';
// import React from 'react';
// export default function App() {

//   return ( 
//     <div>
//     <h2>Disable Button</h2>
//     <input type="text" />
//     <button>Submit</button>
//   </div>
//   );
// }
// `,
//         "/index.css": `
// body {
//   font-family: sans-serif;
// }
// `,
//       }}
      files={files}
    >
      <ActiveFileDisplay className="mb-4" />
      <Toolbar />
      <SandpackLayout
        className="p-1 border-2 border-black rounded-lg overflow-hidden"
        style={{
          height: "75vh",
        }}
      >
        <SandpackCodeEditor
          showLineNumbers={true}
          showTabs={true}
          closableTabs={false}
          style={{
            height: "75vh",
          }}
        />
        <SandpackPreview
          showOpenInCodeSandbox={false}
          style={{
            height: "75vh",
          }}
        />
      </SandpackLayout>
    </SandpackProvider>
  );
};

export default CodeSandboxComponent;
