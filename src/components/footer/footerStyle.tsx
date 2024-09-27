import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
`;

export const WrapperFooter = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  padding: 0 5rem;
  height: 5rem;
  p {
    font-size: 1.2rem;
    font-weight: 600;
  }
  @media only screen and (min-device-width: 200px) and (max-device-width: 374px) {
    flex-direction: column;
    justify-content: space-between;
    padding: 0.5rem;
    height: auto;
    p {
      font-size: 0.7rem;
      font-weight: 600;
    }
  }
  @media only screen and (min-device-width: 375px) and (max-device-width: 600px) {
    flex-direction: column;
    justify-content: space-between;
    padding: 0.5rem;
    height: auto;
    p {
      font-size: 0.95rem;
      font-weight: 600;
    }
  }
  @media only screen and (min-device-width: 601px) and (max-device-width: 900px) and (-webkit-min-device-pixel-ratio: 2) {
    justify-content: space-around;
    padding: 0.5rem;
    height: auto;
    p {
      font-size: 0.95rem;
      font-weight: 600;
    }
  }
  @media only screen and (min-device-width: 901px) and (max-device-width: 1400px) and (-webkit-min-device-pixel-ratio: 2) {
  }
`;
export const WrapperFooterDesigner = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  padding: 0rem;
  height: 2.5rem;
  background-color: #01013c;
  p {
    font-size: 0.8rem;
    font-weight: 300;
    color: white;
    margin: 0;
  }
  @media only screen and (min-device-width: 200px) and (max-device-width: 374px) {
    flex-direction: column;
    justify-content: space-between;
    padding: 0.5rem;
    height: auto;
    p {
      font-size: 0.6rem;
      font-weight: 300;
      text-align: center;
    }
  }
  @media only screen and (min-device-width: 375px) and (max-device-width: 600px) {
    flex-direction: column;
    justify-content: space-between;
    padding: 0.5rem;
    height: auto;
    p {
      font-size: 0.65rem;
      font-weight: 300;
      text-align: center;
    }
  }
  @media only screen and (min-device-width: 601px) and (max-device-width: 900px) and (-webkit-min-device-pixel-ratio: 2) {
    justify-content: space-around;
    padding: 0.5rem;
    height: auto;

    p {
      font-size: 0.7rem;
      font-weight: 300;
    }
  }
  @media only screen and (min-device-width: 901px) and (max-device-width: 1400px) and (-webkit-min-device-pixel-ratio: 2) {
  }
`;

export const Mapa = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  iframe {
    width: 100%;
    height: 300px;
    border: 0;
    margin: 0 auto;
  }
  @media only screen and (min-device-width: 200px) and (max-device-width: 374px) {
    iframe {
      height: 200px;
      border: 0;
      margin: 0 auto;
    }
  }
`;
