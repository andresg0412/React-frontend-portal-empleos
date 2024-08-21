import React from "react";
import Input from "../inputs/input";
import TextTitulo from "../text/titulo";

const ModalNewVacante = ({
    jobForm,
    handleInputChange,
    isEditing,
    handleSaveJob,
    setIsCreating,
    setIsEditing  }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <TextTitulo text={isEditing ? 'Editar Vacante' : 'Crear Nueva Vacante'} />
                <Input
                    type="text"
                    name="titulo"
                    placeholder="Tiulo"
                    value={jobForm.titulo}
                    onChange={handleInputChange}
                />
                <Input
                    type="text"
                    name="subtitulo"
                    placeholder="subtitulo"
                    value={jobForm.subtitulo}
                    onChange={handleInputChange}
                />
                <Input
                    type="text"
                    name="modo"
                    placeholder="Modo (Remoto/Presencial)"
                    value={jobForm.modo}
                    onChange={handleInputChange}
                />
                <Input
                    type="text"
                    name="salario"
                    placeholder="Salario"
                    value={jobForm.salario}
                    onChange={handleInputChange}
                />
                <Input
                    type="date"
                    name="fecha"
                    value={jobForm.fecha}
                    onChange={handleInputChange}
                />
                <textarea
                    name="descripcion"
                    placeholder="Descripción de la vacante"
                    value={jobForm.descripcion}
                    onChange={handleInputChange}
                />
                <div className="modal-actions">
                    <button onClick={handleSaveJob}>Guardar</button>
                    <button onClick={() => { setIsCreating(false); setIsEditing(false); }}>Cancelar</button>
                </div>
            </div>
        </div>
    );
};
export default ModalNewVacante;