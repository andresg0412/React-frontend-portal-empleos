// src/components/Employees.js
import React from 'react';
import { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import CardListVacante from '../components/Cards/cardListVacante';
import { getVacantes } from '../services/apiService';
import TextTitulo from '../components/text/titulo';
import ModalLogin from '../components/modal/modalLogin';

const Employees = () => {
    const [jobs, setJobs] = useState([]);
    const [selectedJob, setSelectedJob] = useState(null);
    const actions = false;
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleApply = () => {
            alert('Has aplicado a la vacante');
        
    };

    const closeModal = () => setIsModalOpen(false);

    const fetchVacantes = async () => {
        try {
            const data = await getVacantes();
            setJobs(data);
            setSelectedJob(jobs[0]);
            alert('Has aplicado a la vacante');
        } catch (error) {
            console.error('Error al obtener las vacantes:', error);
        }
    };


    useEffect(() => {
        fetchVacantes();
    }, []);

    useEffect(() => {
        if (jobs.length > 0) {
            setSelectedJob(jobs[0]);
        }
    }, [jobs]);

    const handleSelectJob = (job) => {
        setSelectedJob(job);
    };





    return (
        <>
            <Header />

            <div className="company-container">
                <div className="job-list">
                    {jobs.map((job) => (
                        CardListVacante({
                            job,
                            selectedJob,
                            handleSelectJob,
                            actions
                        })
                    ))}
                </div>
                <div className="job-details">
                    {selectedJob ? (
                        <>
                            <TextTitulo text={selectedJob.titulo} />
                            <p>{selectedJob.subtitulo}</p>
                            <p>{selectedJob.modo}</p>
                            <p>{selectedJob.salario}</p>
                            <p>{selectedJob.fecha}</p>
                            <p>{selectedJob.descripcion}</p>
                            <p>Estado: {selectedJob.estado}</p>
                            <button onClick={handleApply}>Aplicar</button>
                        </>
                    ) : (
                        <p>Selecciona una vacante para ver los detalles.</p>
                    )}
                </div>

                {isModalOpen && <ModalLogin isOpen={isModalOpen} onClose={closeModal} />}
                
            </div>

            <Footer />
        </>
    );
};

export default Employees;
