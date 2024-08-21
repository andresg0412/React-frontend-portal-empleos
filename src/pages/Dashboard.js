import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };
    return (
        <div className="container">
            <h1>Bienvenido al Dashboard</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Dashboard;