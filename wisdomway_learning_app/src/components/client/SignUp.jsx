import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Grid, Link, Button, Paper, TextField, Typography } from "@mui/material";
import Skcard from "../skcards";
function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [loading,setLoading] =useState(true);
    
          useEffect(() => {
            setTimeout (() => {
              setLoading(false);
            },300);
          }, []);

    const handleSignup = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3002/signup", { name, email, password })
            .then(result => {
                if (result.status === 201) {
                    navigate("/login");
                }
            })
            .catch(err => {
                if (err.response && err.response.status === 400) {
                    window.alert("Email already exists. Please use a different email.");
                } else {
                    console.log(err);
                }
            });
    };

    const containerStyle = {
        backgroundImage: "url('images/bg2.png')", 
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
    const row = { display: "flex", marginTop: "0rem" };
    const btnStyle = {
        marginTop: "1rem",
        fontSize: "1.2rem",
        fontWeight: "700",
        backgroundColor: "orange",
        borderRadius: "0.5rem",
    };

    return (
        <>
        {loading ? <Skcard/>:
        <div style={containerStyle}>
            <Grid align="center" className="wrapper">
                <Paper
                    style={paperStyle}
                    sx={{
                        width: {
                            xs: "80vw", // 0
                            sm: "30vw", // 600
                            md: "20vw", // 900
                            lg: "30vw", // 1200
                            xl: "20vw", // 1536
                        },
                        height: {
                            lg: "55vh", // 1200px and up
                        },
                    }}
                >
                    <Typography component="h1" variant="h5" style={heading}>
                        {/* SignUp */}
                    </Typography>
                    <form onSubmit={handleSignup}>
                        <TextField
                            style={row}
                            sx={{ label: { fontWeight: "700", fontSize: "1.3rem" } }}
                            fullWidth
                            type="text"
                            label="Enter Name"
                            name="name"
                            onChange={(e) => setName(e.target.value)}
                        />
                        <TextField
                            style={row}
                            sx={{ label: { fontWeight: "700", fontSize: "1.3rem" } }}
                            fullWidth
                            label="Email"
                            variant="outlined"
                            type="email"
                            placeholder="Enter Email"
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            style={row}
                            sx={{ label: { fontWeight: "700", fontSize: "1.3rem" } }}
                            fullWidth
                            label="Password"
                            variant="outlined"
                            type="password"
                            placeholder="Enter Password"
                            name="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button style={btnStyle} variant="contained" type="submit">
                            SignUp
                        </Button>
                    </form>
                    <br />
                    <p>
                        Already have an account?<Link href="/login"> Login</Link>
                    </p>
                </Paper>
            </Grid>
        </div>
}
        </>
    );
}

export default SignUp;
