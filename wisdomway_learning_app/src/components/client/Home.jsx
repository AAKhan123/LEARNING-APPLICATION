import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logincards from "../Courses/logincard";
import Logout from "./Logout";
import Skcard from "../skcards";
import axios from "axios";

function Home() {
    const location = useLocation();
    const navigate = useNavigate();
    const [user, setUser] = useState(location.state?.user);
    const [loading, setLoading] = useState(!user);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [sloading,setsLoading] =useState(true);
    
              useEffect(() => {
                setTimeout (() => {
                  setsLoading(false);
                },500);
              }, []);

    useEffect(() => {
        if (!user) {
            axios.get('http://localhost:3002/user', { withCredentials: true })
                .then(response => {
                    if (response.data.user) {
                        setUser(response.data.user);
                    } else {
                        navigate("/login");
                    }
                })
                .catch(() => navigate("/login"))
                .finally(() => setLoading(false));
        } else {
            setLoading(false);
        }
    }, [user, navigate]);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    if (loading) {
        return <Skcard/>;
    }

    return (
        <>
            <div className="profile-container" title="Profile" >
                <div className="relative inline-block text-left">
                    <button
                        onClick={toggleDropdown}
                        className="profile-button"
                    >
                        <span className="profile-initial text-lg font-bold"><i class="fa-solid fa-user"></i></span>
                    </button>

                    {dropdownOpen && (
                        <div
                            className="dropdown-menu absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg focus:outline-none"
                        >
                            <div className="menu-header py-2 px-4">
                                <p className="menu-name text-sm font-medium">{user && user.name}</p>
                                <p className="menu-email text-xs">{user && user.email}</p>
                            </div>
                            <div className="menu-divider"></div>
                            <div className="menu-logout">
                              <center> <Logout /></center> 
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <br />
           {sloading ?<Skcard/>: <Logincards />}
                
        </>
    );
}

export default Home;