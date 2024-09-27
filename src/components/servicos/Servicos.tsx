import { Container, ContainerFooter, InfoBox } from "./servicosStyle";
import shirt from "./imagens/shirt2.jpg";
import trouser from "./imagens/trouser2.jpg";
import suit from "./imagens/suit2.jpg";
import skirt from "./imagens/skirt3.jpg";
import zip from "./imagens/zipper3.jpg";
import dress from "./imagens/dress2.jpg";
import overall from "./imagens/overall2.jpg";
import compression from "./imagens/compression3.jpg";
import tie from "./imagens/tie2.jpg";
import patchwork from "./imagens/repairs.jpg";
import curtain from "./imagens/curtain2.jpg";
import darning from "./imagens/darning.jpg";
import pillows from "./imagens/pillows2.jpg";
import bagpack from "./imagens/bagpack2.jpg";
import resize from "./imagens/resize.png";
import customization from "./imagens/customization2.jpg";
import tights from "./imagens/tight3.jpg";
import leather from "./imagens/leather2.jpg";
import underwear from "./imagens/underwear3.jpg";
import uniform from "./imagens/uniform2.jpg";
import elastic from "./imagens/elastic5.jpg";
import towels from "./imagens/towels2.jpg";
import Footer from "../footer/Footer";

function Servicos() {
  const services = [
    { id: 1, type: "Ajuste gerais em camisa e camisetas", image: shirt },
    { id: 2, type: "Ajustes em calças básicas e sociais", image: trouser },
    { id: 3, type: "Ajuste em blazer, ternos, jaquetas e moletons", image: suit },
    { id: 4, type: "Ajustes em saias e shorts", image: skirt },
    { id: 5, type: "Consertos em zíperes", image: zip },
    { id: 6, type: "Ajuste em vestidos simples, de noiva e de festa", image: dress },
    { id: 7, type: "Ajuste em macacão", image: overall },
    { id: 8, type: "Ajuste em cintas cirúrgicas", image: compression },
    { id: 9, type: "Redução de gravatas", image: tie },
    { id: 10, type: "Reparos gerais", image: patchwork },
    { id: 11, type: "Cerzidos", image: darning },
    { id: 12, type: "Serviços gerais em cortinas", image: curtain },
    { id: 13, type: "Serviços gerais em almofadas", image: pillows },
    { id: 14, type: "Concertos em mochilas e bolsas (alças e zíperes)", image: bagpack },
    { id: 15, type: "Redução de tamanhos", image: resize },
    { id: 17, type: "Customização", image: customization },
    { id: 18, type: "Aumentar peças justas", image: tights },
    { id: 19, type: "Serviços em couro", image: leather },
    { id: 20, type: "Ajuste em lingerie", image: underwear },
    { id: 21, type: "Ajustes em uniformes", image: uniform },
    { id: 16, type: "Trocas de elásticos", image: elastic },
    { id: 22, type: "Conserto de roupas de cama, mesa e banho", image: towels },
  ];
  return (
    <Container>
      <h1>Serviços</h1>
      <div className="innerContainer">
        {services.map((servi) => (
          <InfoBox key={servi.id}>
            <div className="imgbox">
              <img src={servi.image} alt="" />
            </div>
            <p>{servi.type}</p>
          </InfoBox>
        ))}
      </div>
      <ContainerFooter>
        <Footer />
      </ContainerFooter>
    </Container>
  );
}

export default Servicos;
