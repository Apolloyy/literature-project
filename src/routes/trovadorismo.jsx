import React from "react";
import Content from "../pages/Content";
import "./css/trovadorismo.css";

function TrovadorismoMov() {
  window.scrollTo(top);
  const scrollToP1 = () => {
    const p1Element = document.getElementById("p1");
    if (p1Element) {
      p1Element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div className="image-back-trv">
        <h1>Trovadorismo</h1>
        <button id="go-text" onClick={scrollToP1}>
          &darr;
        </button>
      </div>
      <div id="p1">
        <Content
          epigraph={'"Ondas do mar de Vigo, se vistes meu amigo?" '}
          author={
            "trecho de cantiga galego-portuguesa do Cancioneiro de Martim Codax"
          }
          title={"Trovadorismo e o Período Medieval"}
          p1={
            "O período medieval é conhecido como uma época sem tanta relevância histórica, por isso a expressão (hoje descontinuada) “idade das trevas”. " +
            "No entanto, ouve um movimento literário predominante neste período, que merece sua devida atenção. "
          }
          p2={
            "Trovadorismo um movimento literário presente neste período literário, trouxe consigo um novo método literário, as cantigas. " +
            "Transmitidas pelos trovadores, as cantigas tiveram diversas funções nesta sociedade, como forma de " +
            "orientar, criticar, fazer declarações amorosas (vassalagem amorosa) e as de amizade."
          }
        />
      </div>
    </>
  );
}

export default TrovadorismoMov;
