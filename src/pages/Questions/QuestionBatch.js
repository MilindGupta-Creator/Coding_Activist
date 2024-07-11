import CodeSandboxComponent from "./CodeSandboxComponent";
import {
  getPanelElement,
  getPanelGroupElement,
  getResizeHandleElement,
  Panel,
  PanelGroup,
  PanelResizeHandle,
} from "react-resizable-panels";
import "./style.css";
import { useParams } from "react-router-dom";

function QuestionBatch() {
  const {id} =  useParams();
  console.log("ids here mentioned: ",id);

  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#181818",
        color: "white",
        height: "100vh",
      }}
    >
      <PanelGroup direction="horizontal">
        <Panel defaultSize={30} minSize={20}>
          <div
            style={{
              height: "100vh",
              marginTop: "20px",
              padding: "20px",
              borderRight: "1px solid #ccc",
              overflowY: "auto",
              maxHeight: "70vh",
              marginBottom: "10px",
            }}
          >
            <h1 class="mb-4 text-5xl font-medium text-gray-900 dark:text-white">
              <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                Better Data
              </span>
            </h1>

            <button
              type="button"
              class="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Easy
            </button>

            <ol class="relative border-s border-gray-200 dark:border-gray-700 mt-4">
              <li class="mb-10 ms-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-white dark:text-gray-500">
                  Task 1
                </time>
                <h3 class="text-lg font-semibold text-white dark:text-white">
                  Description
                </h3>
                <p class="mb-4 text-base font-normal text-gray-300 dark:text-gray-400">
                  You have been given a code snippet in the app.js file. You can
                  view the file in the editor.
                </p>
                <a
                  href="#"
                  class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                >
                  Apply for Jobs{" "}
                  <svg
                    class="w-3 h-3 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </li>
              <div class="inline-flex items-center justify-center w-full">
                <hr class="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
                <div class="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
                  <svg
                    class="w-4 h-4 text-gray-700 dark:text-gray-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 14"
                  >
                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                  </svg>
                </div>
              </div>
              <li class="mb-10 ms-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-white dark:text-gray-500">
                  Task 2
                </time>
                <h3 class="text-lg font-semibold text-white dark:text-white">
                  Objective
                </h3>
                <p class="mb-4 text-base font-normal text-gray-300 dark:text-gray-400">
                  Imagine you're building a form for a website. You want to make
                  sure that the "Submit" button stays grayed out and unclickable
                  until someone starts typing in the input field. <br /> Once
                  they type something, though, the button should light up and
                  become clickable. It's a small but important detail that makes
                  the form more user-friendly.
                </p>
              </li>
              <div class="inline-flex items-center justify-center w-full">
                <hr class="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
                <div class="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
                  <svg
                    class="w-4 h-4 text-gray-700 dark:text-gray-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 14"
                  >
                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                  </svg>
                </div>
              </div>
              <li class="ms-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-white dark:text-gray-500">
                  Task 3
                </time>
                <h3 class="text-lg font-semibold text-white dark:text-white">
                  Hints
                </h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                  To tackle this challenge, think about how you can monitor
                  changes in the input field.{" "}
                </p>
              </li>
            </ol>
          </div>
        </Panel>
        <PanelResizeHandle />
        <Panel>
          {" "}
          <CodeSandboxComponent />
        </Panel>
      </PanelGroup>
    </div>
  );
}

export default QuestionBatch;
