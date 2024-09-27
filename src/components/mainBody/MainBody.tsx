import Servicos from "../servicos/Servicos";
import { Container, Section01, BcgImage, BcgImage2 } from "./mainbodyStyle";
import logo from "./logoFinal02.png";
function MainBody() {
  return (
    <>
      <Container>
        <BcgImage>
          {/* <p>Costurando sonhos, costura da hora!</p>
           */}
          <img src={logo} alt="" />
        </BcgImage>
        <BcgImage2 />

        <Section01>
          <Servicos />
        </Section01>
      </Container>
    </>
  );
}

export default MainBody;
