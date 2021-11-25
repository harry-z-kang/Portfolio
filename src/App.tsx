import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/common//Navigation";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Works from "./components/Works";
import Contact from "./components/Contact";
import PageNotFound from "./components/PageNotFound";
import "./App.scss";

const App: FC = (): JSX.Element => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/MyWork" element={<Works />} />
        <Route path="/ContactMe" element={<Contact />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
