import { Mapa, WrapperFooter, Container, WrapperFooterDesigner } from "./footerStyle";

const Footer = () => {
  return (
    <Container>
      <Mapa>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.467371769353!2d-46.65083272427258!3d-23.551652078806512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce584b18314f7d%3A0xafdde25c00c0d1d4!2sR.%20Frei%20Caneca%2C%2059%20-%20Consola%C3%A7%C3%A3o%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001307-001!5e0!3m2!1spt-BR!2sbr!4v1725392203739!5m2!1spt-BR!2sbr"
          width="600"
          height="450"
          style={{ border: "0" }}
          loading="lazy"
        ></iframe>
      </Mapa>

      <WrapperFooter>
        <p>Rua Freicaneca 59, Bela Vista, SP</p>
        <p>Tel:(11)99519-6296</p>
      </WrapperFooter>

      <WrapperFooterDesigner>
        <p>Site criado por Gutemberg - (11)98803-7322 - gutemberg149@gmail.com</p>
        <p>Telefone fixo DMC SYSTEM 3159_3469</p>
      </WrapperFooterDesigner>
    </Container>
  );
};

export default Footer;
