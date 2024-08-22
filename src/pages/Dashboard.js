import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();

    return (
        <div className="container">
            <h1>Bienvenido al Dashboard</h1>
        </div>
    );
};

export default Dashboard;