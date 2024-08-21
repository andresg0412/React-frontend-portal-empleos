import React from "react";
import "./cardListVacante.css";
const CardListVacante = ({ job, selectedJob, handleSelectJob, handleDeleteJob, handleMarkAsFinished, actions }) => {

    return (
        <div
            key={job.id}
            className={`job-card ${job.id === selectedJob?.id ? 'selected' : ''}`}
            onClick={() => handleSelectJob(job)}
        >
            <h2>{job.titulo}</h2>
            <div className="rating">
                <span class="stars">4,4★</span>
                <span class="company">ACTIVOS S A S</span>
                <span class="verified">✓</span>
            </div>
            <p>{job.subtitulo}</p>
            <p>{job.modo}</p>
            <p className="salary">{job.salario}</p>
            <p className="time-posted">{job.fecha}</p>
            {actions ? (
                <div className="job-actions">
                    <button onClick={(e) => { e.stopPropagation(); handleDeleteJob(job.id); }}>Eliminar</button>
                    <button onClick={(e) => { e.stopPropagation(); handleMarkAsFinished(job.id); }}>Finalizar</button>
                </div>
            ) : null}

        </div>

    );
};
export default CardListVacante