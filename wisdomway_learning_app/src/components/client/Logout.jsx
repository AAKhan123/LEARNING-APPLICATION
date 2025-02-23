import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "@mui/material";

function Logout({ setIsLoggedIn }) {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            // Call backend API to log out
            const response = await axios.post("http://localhost:3002/logout", {}, { withCredentials: true });

            if (response.status === 200) {
                // Update login state
                setIsLoggedIn(false);

                // Navigate to login page
                navigate("/login");

                // Refresh the page
                window.location.reload();
            } else {
                alert("Logout failed: Server did not respond as expected.");
            }
        } catch (error) {
            console.error("Error during logout:", error);
            window.location.reload();
        }
    };

    return (
        <Button
            onClick={handleLogout}
            variant="contained"
            style={{
                padding: "5px 30px",
                fontSize: "0.8rem",
                backgroundColor: "red",
                color: "white",
                borderRadius: "15px",
                
            }
        }
        >
            Logout
        </Button>
    );
}

export default Logout;
