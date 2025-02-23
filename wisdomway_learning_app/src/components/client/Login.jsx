import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Grid, Link, Button, Paper, TextField, Typography } from "@mui/material";
import Skcard from "../skcards";
function Login({ setIsLoggedIn, isLoggedIn }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
      const [loading,setLoading] =useState(true);
    
          useEffect(() => {
            setTimeout (() => {
              setLoading(false);
            },300);
          }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3002/login", { email, password }, { withCredentials: true })
            .then(result => {
                if (result.data === "Success") {
                    axios.get('http://localhost:3002/user', { withCredentials: true })
                        .then(response => {
                            if (response.data.user) {
                                setIsLoggedIn(true);
                                navigate("/home", { state: { user: response.data.user } });
                            }
                        });
                } else {
                    alert("Login failed");
                }
            })
            .catch(err => alert(err));
    };

    const containerStyle = {
        backgroundImage: "url('images/bg1.png')", 
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
                borderRadius:"25px"

    };

    const paperStyle = {
        padding: "1rem",
        margin: "50px auto",
        backgroundColor: "transparent", 
        borderRadius: "0.5rem",
        boxShadow: "10px 10px 10px 10px rgba(0, 0, 0, 0.2)",
    };

    const heading = { fontSize: "2.5rem", fontWeight: "600" };
    const row = { display: "flex", marginTop: "1rem" };
    const btnStyle = {
        marginTop: "1rem",
        fontSize: "1.2rem",
        fontWeight: "700",
        backgroundColor: "orange",
        borderRadius: "0.5rem",
    };

    return (
        <>
        {loading ? <Skcard/> :
        <div style={containerStyle}>
            <Grid align="center" className="wrapper">
                <Paper
                    style={paperStyle}
                    sx={{
                        width: { xs: '80vw', sm: '50vw', md: '40vw', lg: '30vw', xl: '20vw' },
                        height: { lg: '50vh' },
                    }}
                >
                    
                    <form onSubmit={handleLogin}>
                        <span style={row}>
                            <TextField
                                sx={{ label: { fontWeight: "700", fontSize: "1.3rem" } }}
                                label="Email"
                                fullWidth
                                variant="outlined"
                                type="email"
                                placeholder="Enter Email"
                                name="email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </span>
                        <span style={row}>
                            <TextField
                                sx={{ label: { fontWeight: "700", fontSize: "1.3rem" } }}
                                label="Password"
                                fullWidth
                                variant="outlined"
                                type="password"
                                placeholder="Enter Password"
                                name="password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </span>
                        <Button style={btnStyle} variant="contained" type="submit">
                            Login
                        </Button>
                    </form>
                    <br />
                    <p>
                        Don't have an account? <Link href="/signup">SignUp</Link>
                    </p>
                </Paper>
            </Grid>
        </div>
}
        </>
    );
}

export default Login;
