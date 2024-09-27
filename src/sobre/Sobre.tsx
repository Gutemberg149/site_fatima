import { Wrapper, ContainerFooterSobre, ImagenContainer, Info, InnerWrap } from "./sobrestyle";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import store from "./oficinaCosturaImg.jpeg";

const Sobre = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <Wrapper>
        <InnerWrap>
          <ImagenContainer>
            <img src={store} alt="" />
          </ImagenContainer>
          <Info>
            <div className="innerInfo">
              <h3>Sobre a oficina</h3>
              <p>
                A nossa empresa, especializada no mercado de serviços de moda desde 2010, tem se destacado pela excelência e qualidade no atendimento aos nossos
                clientes. Ao longo dos anos, aprimoramos nossas habilidades em diversos serviços de costura, oferecendo soluções personalizadas e eficazes para
                a manutenção e reparo de roupas em geral. Estamos comprometidos em fornecer um serviço de alta excelência, sempre buscando a satisfação total.
              </p>
            </div>
            <div className="innerInfo">
              <h3>Sobre a fundadora</h3>
              <p>
                Olá, eu sou Maria de Fátima, Fundadora da empresa OFICINA DA COSTURA.
                <br /> Sou formada em jornalismo, pela Uniban - 2001. Fiz diversos cursos na área da moda masculina e feminina. Atuo com reparos de roupas em
                geral.
              </p>
            </div>
          </Info>
        </InnerWrap>
      </Wrapper>
      <ContainerFooterSobre>
        <Footer />
      </ContainerFooterSobre>
    </>
  );
};

export default Sobre;
