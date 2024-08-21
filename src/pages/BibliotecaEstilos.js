import React from "react";
import Button from "../components/Buttons/Button";
import '../styles/BibliotecaEstilos.css';

const BibliotecaEstilos = () => {
    return (
        <div>
            Biblioteca de Estilo
            <Button text="Estilo 1 CSS" classname="btn-primary" type="button" />
            <Button text="Estilo 1 TW" classname="bg-blue-500 text-white border-none rounded-lg py-3 px-6 text-lg font-semibold uppercase transition-transform duration-300 hover:bg-blue-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white ml-1" type="button" />
            <Button text="Estilo 2 CSS" classname="btn-secondary" type="button" />
            <Button text="Estilo 2 TW" classname="bg-white text-gray-800 border-2 border-blue-500 rounded-lg py-3 px-6 text-lg font-semibold uppercase shadow-md transition-shadow duration-300 hover:bg-gray-100 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ml-1" type="button" />
            <Button text="Estilo 3 CSS" classname="btn-success" type="button" />
            <Button text="Estilo 3 TW" classname="bg-green-500 text-white border-none rounded-full py-2 px-4 text-sm font-medium capitalize transition-transform duration-300 hover:bg-green-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white" type="button" />
            <Button text="Estilo 4 CSS" classname="btn-warning" type="button" />
            <Button text="Estilo 4 TW" classname="bg-yellow-400 text-gray-800 border-none rounded-full py-2 px-4 text-sm font-medium capitalize transition-transform duration-300 hover:bg-yellow-500 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-800 ml-1" type="button" />
            <Button text="Estilo 5 CSS" classname="btn-info" type="button" />
            <Button text="Estilo 5 TW" classname="bg-transparent text-teal-500 border-2 border-teal-500 rounded-md py-2 px-4 text-sm font-medium capitalize transition-colors duration-300 hover:bg-teal-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-teal-500 ml-1" type="button" />
            <Button text="Estilo 6 CSS" classname="btn-gradient" type="button" />
            <Button text="Estilo 6 TW" classname="bg-gradient-to-br from-pink-400 via-red-400 to-orange-400 text-white border-none rounded-full py-3 px-6 text-lg font-semibold uppercase shadow-lg transition-transform duration-300 hover:from-pink-500 hover:to-orange-500 hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white" type="button" />
            <Button text="Estilo 7 CSS" classname="btn-fill" type="button" />
            <Button text="Estilo 7 TW" classname="bg-blue-500 text-white border-2 border-transparent rounded-full py-3 px-6 text-lg font-semibold uppercase relative overflow-hidden transition-colors duration-300 hover:text-white focus:outline-none" type="button">
                <span class="relative z-10">Fill</span>
                <span class="absolute top-1/2 left-1/2 w-[300%] h-[300%] bg-blue-600 transition-transform duration-300 transform -translate-x-1/2 -translate-y-1/2 scale-0 group-hover:scale-100"></span>
            </Button>
            <Button text="Estilo 8 CSS" classname="btn-double-border" type="button" />
            <button class="bg-white text-gray-800 border-2 border-blue-500 rounded-xl py-3 px-6 text-lg font-semibold uppercase relative overflow-hidden transition-colors duration-300 hover:bg-gray-100 hover:text-blue-500 focus:outline-none">
                <span class="relative z-10">Double Border</span>
                <span class="absolute top-1/2 left-1/2 w-0 h-0 border-2 border-blue-500 rounded-xl transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 group-hover:w-full group-hover:h-full"></span>
            </button>
            <Button text="Estilo 9 CSS" classname="btn-outline" type="button" />
            <Button text="Estilo 9 TW" classname="bg-transparent text-blue-500 border-2 border-blue-500 rounded-full py-3 px-6 text-lg font-semibold uppercase transition-transform duration-300 hover:bg-blue-500 hover:text-white hover:translate-y-[-3px] focus:outline-none focus:ring-2 focus:ring-blue-500" type="button" />
            <Button text="Estilo 10 CSS" classname="btn-glow" type="button" />
            <Button text="Estilo 10 TW" classname="bg-green-500 text-white border-none rounded-full py-3 px-6 text-lg font-semibold uppercase shadow-lg transition-transform duration-300 hover:shadow-2xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500" type="button" />
            <Button text="Estilo 11 CSS" classname="btn-waves" type="button" />




        </div>);
};

export default BibliotecaEstilos;