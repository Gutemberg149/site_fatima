import Servicos from "../servicos/Servicos";
import { Container, Section01, BcgImage, BcgImage2 } from "./mainbodyStyle";
import logo from "./logofinal02.png";
function MainBody() {
  return (
    <>
      <Container>
        <BcgImage>
          <img src={logo} alt="logo" />
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
