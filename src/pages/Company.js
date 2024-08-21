// src/components/Company.js
import React, { useState, useEffect } from 'react';
import '../styles/Company.css';
import {
    getVacantes,
    createVacante,
    updateVacante,
    deleteVacante,
    finalizarVacante
} from '../services/apiService';
import ModalNewVacante from '../components/modal/modalNewVacante';
import TextTitulo from '../components/text/titulo';
import CardListVacante from '../components/Cards/cardListVacante';
import HeaderCompany from '../components/Header/HeaderCompany';
import FooterCompany from '../components/Footer/FooterCompany';

const initialJobs = [
    {
        id: 1,
        title: 'Desarrollador Full Stack',
        subtitle: 'React y Node.js',
        mode: 'Remoto',
        salary: '$3,000 - $4,000 USD',
        date: '2024-08-01',
        description: 'Buscamos un desarrollador full stack con experiencia en React y Node.js.',
        status: 'Activo',
    },
    {
        id: 2,
        title: 'Diseñador UX/UI',
        subtitle: 'Experiencia en diseño móvil',
        mode: 'Presencial',
        salary: '$2,500 - $3,500 USD',
        date: '2024-07-28',
        description: 'Estamos buscando un diseñador UX/UI para un proyecto móvil.',
        status: 'Activo',
    },
    // Agrega más vacantes según sea necesario
];

const Company = () => {
    //const [jobs, setJobs] = useState(initialJobs);
    const [jobs, setJobs] = useState([]);
    //const [selectedJob, setSelectedJob] = useState(jobs[0]);
    const [selectedJob, setSelectedJob] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [isCreating, setIsCreating] = useState(false);
    const [jobForm, setJobForm] = useState({
        titulo: '',
        subtitulo: '',
        modo: '',
        salario: '',
        fecha: '',
        descripcion: '',
        estado: 'Activo',
        empresa_id: 2,
    });
    const actions = true;
    const fetchVacantes = async () => {
        try {
            const data = await getVacantes();
            setJobs(data);
            setSelectedJob(jobs[0]);
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
        setIsEditing(false);
    };

    const handleDeleteJob = async (id) => {
        try {
            await deleteVacante(id);
            await fetchVacantes();
        } catch (error) {
            console.error('Error al eliminar la vacante:', error);
        }
    };

    const handleMarkAsFinished = (id) => {
        try {
            finalizarVacante(id);
            fetchVacantes();
        } catch (error) {
            console.error('Error al finalizar la vacante:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setJobForm({
            ...jobForm,
            [name]: value,
        });
    };

    const handleSaveJob = async () => {
        try {
            if (isEditing) {
                const updatedJob = await updateVacante(selectedJob.id, jobForm);

            } else {
                console.log(jobForm);
                const newVacante = await createVacante(jobForm);
            }
            await fetchVacantes();

        } catch (error) {
            console.error('Error al crear la vacante:', error);
        }

        setIsCreating(false);
        setIsEditing(false);
        setSelectedJob(null);
    };

    const handleEditJob = () => {
        setJobForm(selectedJob);
        setIsEditing(true);
    };

    const handleCreateJob = () => {
        setJobForm({
            titulo: '',
            subtitulo: '',
            modo: '',
            salario: '',
            fecha: '',
            descripcion: '',
            estado: 'Activo',
            empresa_id: 2,
        });
        setIsCreating(true);
    };

    return (
        <>
            <HeaderCompany />
            <div className="company-container">
                <div className="job-list">
                    <button onClick={handleCreateJob}>Crear Nueva Vacante</button>
                    {jobs.map((job) => (
                        CardListVacante({
                            job,
                            selectedJob,
                            handleSelectJob,
                            handleDeleteJob,
                            handleMarkAsFinished,
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
                            <button onClick={handleEditJob}>Editar Vacante</button>
                        </>
                    ) : (
                        <p>Selecciona una vacante para ver los detalles.</p>
                    )}
                </div>

                {/* Modal para crear o editar vacantes */}
                {(isCreating || isEditing) && (
                    ModalNewVacante({
                        jobForm,
                        handleInputChange,
                        isEditing,
                        handleSaveJob,
                        setIsCreating,
                        setIsEditing
                    })
                )}
            </div>

            <FooterCompany />
        </>
    );
};

export default Company;
