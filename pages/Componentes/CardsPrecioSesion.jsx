import React from "react";
import { useRouter } from "next/router";
import { CheckIcon } from "@heroicons/react/solid"; 
import { checkout } from  "../validacionPago";
import Link from "next/link";


const CardsPrecios = ({
  nombre = "",
  precio = 0,
  precio_id = "",
  signo = "$",
  frecuencia = "month",
  caracteristicas = [],
  popular = false,
}) => {

  const router = useRouter();
  
  return (
    <div className = {`bg-white border-blue-700 rounded-md shadow-xl cursor-pointer relative ${popular ? "border-2" : "border border-opacity-10"}`}>
        {
            popular ? (
                <span className = "bg-blue-700 text-white px-6 py-1 rounded-full uppercase text-sm font-semibold whitespace-nowrap absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Más valor</span>
            ) : null
        }
      {/* Titulo del plan */}
      <div className="px-6 py-12 border-b-2 border-gray-200">
        <p className="font-source text-3xl font-semibold text-center mb-4">{nombre}</p>
        <div className="flex justify-center items-center">
          <div className="flex items-start">
            <p className="text-4xl font-medium">{signo}</p>
            <p className="text-7xl font-bold">{precio}</p>
          </div>
          <p className="text-2xl text-gray-400">/{frecuencia}</p>
        </div>
      </div>
      {/* Caracteristicas del plan */}
      <div className="p-12 bg-gray-100">
        <ul className="space-y-3">
          {caracteristicas.map((feature, index) => (

            <li key = {index} className="flex items-center space-x-4">
              <CheckIcon className="w-6 h-6 text-green-500 flex-shrink-0" />
              <p className="font-heebo text-lg text-gray-600">{feature}</p>
            </li>

          ))}
        </ul>
        {/* Boton del plan*/}
        
        <button onClick = {(() => {
          checkout({
            lineItems:[
              {
                price: precio_id,
                quantity: 1
              }
            ]
          },
          nombre)
        })} className={`font-source mt-12 w-full py-4 px-8 rounded-lg text-lg whitespace-nowrap focus:outline-none focus:ring-4 focus:ring-blue-700 focus:ring-opacity-50 transition-all ${popular ? "text-white bg-blue-600 hover:bg-blue-700 hover:scale-105 transform" : "bg-white text-blue-700 hover:bg-gray-50"}`}>
          Obtenlo ya
        </button>
       
      </div>
    </div>
  );
};

export default CardsPrecios;
