import React, { useState } from 'react';
import './Semaforo.css';

export const Semaforo = () => {
  const [color, setColor] = useState("red"); // Inicializamos el estado con el color rojo
  const [sequence, setSequence] = useState(["green","yellow","red"]); // Creamos un array con la secuencia de colores
  const [currentIndex, setCurrentIndex] = useState(0); // Creamos un índice para la secuencia de colores

  const handleLightClick = () => {
    if (color=="red"){
      setColor("green");
    }else if(color=="yellow"){
      setColor("red");
    }else if(color=="green"){
      setColor("yellow");
    }
      
    setColor(color_selecionado);
    /*const nextIndex = (currentIndex + 1) % sequence.length; // Calculamos el próximo índice en la secuencia
    const nextColor = sequence[nextIndex]; // Obtenemos el próximo color en la secuencia
    setColor(nextColor); // Actualizamos el estado con el nuevo color
    setCurrentIndex(nextIndex); // Actualizamos el índice en la secuencia*/
  };

  return (
    <div id="semaforo">
      <div
        className={`luz ${color === "red" ? "activa" : "inactiva"} roja`}
        data-color="red"
        onClick={(e) => setColor(e.target.getAttribute("data-color"))}
      ></div>
      <div
        className={`luz ${color === "yellow" ? "activa" : "inactiva"} amarilla`}
        data-color="yellow"
        onClick={(e) => setColor(e.target.getAttribute("data-color"))}
      ></div>
      <div
        className={`luz ${color === "green" ? "activa" : "inactiva"} verde`}
        data-color="green"
        onClick={(e) => setColor(e.target.getAttribute("data-color"))}
      ></div>
      <div></div>
      <button onClick={handleLightClick}>Cambiar color</button>
    </div>
  );
};