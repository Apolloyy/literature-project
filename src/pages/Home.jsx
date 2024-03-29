import Bottom from "../components/Bottom.jsx";
import Card from "../components/card.jsx";
import Footer from "../components/Footer.jsx";
import "./Home.css";
import Landing from "./Landing.jsx";

function Home() {
  const scrollToP1 = () => {
    const p1Element = document.getElementById("p1");
    if (p1Element) {
      p1Element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <Landing goTo={scrollToP1} />
      <div className="container" id="p1">
        <div className="row-antiguidade">
          <Card
            title="Antiguidade Clássica"
            subtitle={
              "A antiguidade clássica, que como o próprio nome sugere deu origem aos clássicos mundiais. Responsáveis pela implementação de diversas sociedades e culturas com tantos pensamentos emergindo."
            }
            link="/antiguidade-classica"
          />
          <div className="img1"></div>
        </div>
        <div className="row-trovadorismo">
          <div className="img2"></div>
          <Card
            title={"Trovadorismo"}
            subtitle={
              "O período medieval é conhecido como uma época sem tanta relevância histórica, por isso a expressão (hoje descontinuada) “idade das trevas”. No entanto, ouve um movimento literário predominante neste período, que merece sua devida atenção."
            }
            link="/trovadorismo"
          />
        </div>
        <div className="row-humanismo">
          <Card
            title={"Humanismo"}
            subtitle={
              "O humanismo foi um movimento que marcou o modo de pensar do ser humano, que a partir daí, começaram a se importar com coisas diferentes além do teocentrismo."
            }
            link="/humanismo"
          />
          <div className="img3"></div>
        </div>
        <div className="row-classicismo">
          <div className="img4"></div>
          <Card
            title={"Classicismo"}
            subtitle={
              "A escola renascentista ficou reconhecida por renascer os conceitos provenientes da antiguidade clássica, como a simetria, universalidade etc. Com isso, surgiram duas principais escolas artístico-literárias: o classicismo e o barroco"
            }
            link="/classicismo"
          />
        </div>
        <div className="row-barroco">
          <Card
            title={"Barroco"}
            subtitle={
              "O Barroco é um estilo de época caracterizado pelo conflito e culto ao contraste. Ele surgiu no contexto histórico da Reforma Protestante e da Contrarreforma Católica. "
            }
            link="/barroco"
          />
          <div className="img5"></div>
        </div>
        <div className="row-arcadismo">
          <div className="img6"></div>
          <Card
            title={"Arcadismo"}
            subtitle={
              "A escola arcádia surgiu com a influencia do iluminismo e do avanço industrial europeu. O arcadismo buscava o resgate a mitologia antiga e a exaltação da natureza, a partir de um conceito amplamente falado no contexto deste movimento: o buscolismo."
            }
            link="/arcadismo"
          />
        </div>
        <div className="row-romantismo">
          <Card
            title={"Romantismo"}
            subtitle={
              "O romantismo é um estilo de época. Apesar de ter surgido na Alemanha, o fato histórico que motivou o aparecimento desse movimento artístico foi a Revolução Francesa um acontecimento importante para toda a Europa."
            }
            link="/romantismo"
          />
          <div className="img7"></div>
        </div>
      </div>
      <Bottom />
      <Footer />
    </>
  );
}

export default Home;
