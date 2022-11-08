import "./styles.css";
// import { BrowserRouter, Route } from "react-router-dom";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useRoutes
} from "react-router-dom";

function Home() {
  return <div>Home Page</div>;
}

function About() {
  return <div>About</div>;
}

function OurTeam() {
  return <div>Our Team</div>;
}

function Contact() {
  return <div>Contact</div>;
}

function NoPage() {
  return <div> 404 No Page Found</div>;
}
export default function App() {
  // let RoutesInfo = () =>
  //   useRoutes([
  //     { path: "home", element: <Home /> },
  //     { path: "about", element: <About /> },
  //     { path: "contact", element: <Contact /> },
  //     { path: "team", element: <Contact /> },
  //     { path: "*", element: <NoPage /> }
  //   ]);
  return (
    <div className="App">
      <BrowserRouter>
        <div className="landing page">
          <ul>
            <li>
              <Link to="/home">Home </Link>
            </li>
            <li>
              <Link to="/about">About </Link>
            </li>
            <li>
              <Link to="/contact">Contact </Link>
            </li>
            <li>
              <Link to="/team">Team </Link>
            </li>
            {/* <li>
              <Link to="/">Landing Page </Link>
            </li> */}
          </ul>
        </div>
        <Routes>
          <Route index path="home" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path={"contact"} element={<Contact />}></Route>
          <Route path={"contact"} element={<OurTeam />}></Route>
          <Route path="*" element={<NoPage />}></Route>

          {/* <RoutesInfo /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
