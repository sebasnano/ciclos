import React from "react";

const Map = () => {
  const reyes = [
    {
      nombre: "Atanagildo",
      reinado: 15,
      vacasComidas: 9,
    },
    {
      nombre: "Ervidio",
      reinado: 7,
      vacasComidas: 3,
    },
    {
      nombre: "Ataúlfo",
      reinado: 5,
      vacasComidas: 16,
    },
    {
      nombre: "Leovigildo",
      reinado: 18,
      vacasComidas: 3,
    },
    {
      nombre: "Sisebuto",
      reinado: 9,
      vacasComidas: 13,
    },
    {
      nombre: "Recesvinto",
      reinado: 19,
      vacasComidas: 11,
    },
    {
      nombre: "Teodorico",
      reinado: 33,
      vacasComidas: 12,
    },
  ];

  const resultado1 =
    reyes.find(
      (valor) => valor.nombre.includes("a"))
    /* .map((valor) => (
      <div key={valor.nombre}>
        {valor.nombre} come {valor.vacasComidas} vacas al dia
      </div>
    )); */
  return <div className="caja">{resultado1.nombre} come {resultado1.vacasComidas} al dia</div>;
};

export default Map;
