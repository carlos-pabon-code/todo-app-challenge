import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ActiveTasks from "./components/ActiveTasks";
import { HashRouter, Route, Routes } from "react-router-dom";
import AllTasks from "./components/AllTasks";
import CompletedTasks from "./components/CompletedTasks";
import { TasksListProvider } from "./context/TasksListContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TasksListProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<AllTasks />}></Route>
            <Route path="all" element={<AllTasks />}></Route>
            <Route path="active" element={<ActiveTasks />}></Route>
            <Route path="completed" element={<CompletedTasks />}></Route>
          </Route>
        </Routes>
      </HashRouter>
    </TasksListProvider>
  </React.StrictMode>
);
