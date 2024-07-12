import "./App.css";
import Loader from "./components/loader/Loader";
import Home from "./components/Home/Home";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
// import Projects from "./components/Projects/Projects";
import Jobs from "./components/Jobs/Jobs";
import NotFound from "./pages/NotFound";
import JobDetails from "./components/Jobs/JobDetails";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import BottomComponent from "./utils/BottomComponent";
import JoinUs from "./utils/JoinUs/JoinUs";
import Date from "./components/Date/Date";
import Yes from "./components/Date/Yes";
import Resume from "./components/Resume/Resume";
// import Signup from "./components/Signup/Signup";
// import Login from "./components/Login/Login";
// import { UserContextProvider } from "./context/UserContext";
// import CreatePost from "./pages/CreatePost";
// import SinglePost from "./components/Projects/SinglePost/SinglePost";
// import EditPost from "./components/Projects/EditPost";
import Practice from "./pages/Practice/Practice";
// import Questions from "./pages/Questions/Questions";
import JobsPage from "./pages/JobSection/JobsPage";
import EmailPopup from "./components/Emailpopup/Emailpopup";
import Inform from "../src/components/loader/Inform";
import CodeSandboxComponent from "./pages/Questions/CodeSandboxComponent";
import QuestionBatch from "./pages/Questions/QuestionBatch";
import FreeQuestionPage from "./pages/Questions/FreeQuestionPage";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a 3-second loading time
    const loadingTimer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Clean up the timer to prevent memory leaks
    return () => clearTimeout(loadingTimer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="App">
      {/* <UserContextProvider> */}
      <Router>
        <NavigationBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound/>} />
          {/* Add more routes as needed */}
          {/* <Route path="/projects" element={<Projects/>} /> */}
          <Route path="/jobs/:jobId" element={<Inform/>} />
          <Route path="/jobs" element={<Jobs/>} />
          <Route path="/joinus" element={<JoinUs/>}/>
          <Route path="/date" element={<Date/>}/>
          <Route path="/yes" element={<Yes/>} />

          <Route path="inform" element={<Inform/>} />
          <Route path="/resumeservices" element={<Resume/>}/>
          {/* <Route path="/signup" element={<Signup/>} /> */}
          {/* <Route path="/login" element={<Login/>}/> */}
          {/* <Route path="/create" element={<CreatePost/>} />
          <Route path="/post/:id" element={<SinglePost/>}/>
          <Route path="/edit/:id" element={<EditPost />} />
          
           */}
           <Route path="/questions" element={<FreeQuestionPage/>} />
           <Route path="/questions/:id" element={<QuestionBatch/>} />

          <Route path="/practice" element={<Practice/>} />
          <Route path="/jobsfilling" element={<JobsPage/>} />
        </Routes>
        <BottomComponent/>
      </Router>
      <EmailPopup/>
      {/* </UserContextProvider> */}
    </div>
  );
}

export default App;
