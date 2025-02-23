import React, { useState } from "react";
import { Link, useLocation,useNavigate} from "react-router-dom";

function Na({ isLoggedIn, setIsLoggedIn }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // State for search input
  const location = useLocation(); // Current location
  const navigate = useNavigate(); // To navigate to other routes


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isActive = (path) => location.pathname === path; // Check if the path matches the current route

  // Sample data to map search query to routes
  const sampleData = {
    home: "/",
    hom:"/",
    courses: "/courses",
    login: "/login",
    about: "/about",
    contact: "/contact",
  };

  // Courses data to map course names to their specific paths
  const courses = {
    "cultural awareness": "./cult",
    "cultural": "./cult",
    "personal finance": "./Per",
    "personal": "./Per",
    "problem solving": "./problem-solving",
    "problem": "./problem-solving",
    "communication and creativity": "./communication-creativity",
    "communication": "./communication-creativity",
    "outdoors and survival skills": "./out-door",
    "outdoors": "./out-door",
    "social responsibilities": "./social",
    "social": "./social",
    "technology": "./techno",
    "techno": "./techno",
    "career awareness": "./awar",
    "career": "./awar",
    "environmental awareness": "./envi",
    "environmental": "./envi",
    "critical thinking": "./cric",
    "critical": "./cric",
    "health and awareness": "./health",
    "health": "./health",
    "everyday science": "./ever",
    "everyday": "./ever",
    "digital literacy": "./digital",
    "digital": "./digital",
    "time management and organisation": "./time",
    "time": "./time",
    "media and advertising literacy": "./media",
    "media": "./media",
    
    
  };

  const handleSearch = () => {
    const lowerCaseQuery = searchQuery.trim().toLowerCase();

    // Check if the search query matches a course name
    if (lowerCaseQuery in courses) {
      navigate(courses[lowerCaseQuery]); // Navigate to the matched course page
    }
    // Check if the search query matches a page route in sampleData
    else if (lowerCaseQuery in sampleData) {
      navigate(sampleData[lowerCaseQuery]); // Navigate to the matched page
    } else {
      alert("Page or course not found"); // Show an alert if the page or course doesn't exist
    }
    setSearchQuery(""); // Clear the search bar
  };

  return (
    <nav className="navbar">
      <div className="icon">
        <Link to={'/'}>
          <h2 className="logo">
            <img src="/images/WW1.png" className="Logoo" alt="Wisdomway Logo" title="Logo" /> Wisdom<strong className="si">W</strong>ay
          </h2>
        </Link>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
      <div className={`menu ${menuOpen ? "menu-open" : ""}`}>
        <ul>
          <li className={isActive("/") ? "active" : ""}>
            <Link to="/" title="Home">HOME</Link>
          </li>
          <li  className={isActive("/login") ? "active" : ""}>
            {isLoggedIn ? (
              <Link to="/login" title="Courses" >COURSES</Link>
            ) : (
              <Link to="/login" title="Login">LOGIN</Link>
            )}
          </li>
          <li className={isActive("/about") ? "active" : ""}>
            <Link to="/about"title="About" >ABOUT</Link>
          </li>
          <li className={isActive("/contact") ? "active" : ""}>
            <Link to="/contact" title="Contact" >CONTACT</Link>
          </li>
        </ul>
      </div>
      <div className="search">
        <input
          className="srch"
          type="search"
          placeholder="Search for a page or course"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="btn" onClick={handleSearch}>
          Search
        </button>
      </div>

    </nav>
  );
}

export default Na;
