import styled from "styled-components";

export const Wrapper = styled.main`
  width: 100vw;
  min-height: 90vh;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10vh;
  @media only screen and (min-device-width: 200px) and (max-device-width: 374px) {
  }
  @media only screen and (min-device-width: 375px) and (max-device-width: 600px) {
  }
  @media only screen and (min-device-width: 601px) and (max-device-width: 900px) and (-webkit-min-device-pixel-ratio: 2) {
  }
  @media only screen and (min-device-width: 901px) and (max-device-width: 1400px) and (-webkit-min-device-pixel-ratio: 2) {
  }
`;

export const InnerWrap = styled.div`
  width: 57rem;
  height: 38rem;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media only screen and (min-device-width: 200px) and (max-device-width: 374px) {
    width: 100vw;
    height: auto;
    flex-direction: column;
  }
  @media only screen and (min-device-width: 375px) and (max-device-width: 600px) {
    width: 100vw;
    height: auto;
    flex-direction: column;
  }
  @media only screen and (min-device-width: 601px) and (max-device-width: 900px) and (-webkit-min-device-pixel-ratio: 2) {
    width: 100vw;
    height: auto;
    flex-direction: column;
  }
  @media only screen and (min-device-width: 901px) and (max-device-width: 1400px) and (-webkit-min-device-pixel-ratio: 2) {
    margin-top: 4rem;
  }
`;
export const ImagenContainer = styled.div`
  width: 30rem;
  height: 100%;
  border-top-left-radius: 7rem;
  border-bottom-left-radius: 7rem;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.518) 0px 5px 15px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media only screen and (min-device-width: 200px) and (max-device-width: 374px) {
    margin-top: 1rem;
    width: 100vw;
    height: 15rem;
    border-top-left-radius: 0rem;
    border-bottom-left-radius: 0rem;
  }
  @media only screen and (min-device-width: 375px) and (max-device-width: 600px) {
    margin-top: 3rem;
    width: 100vw;
    height: 23rem;
    border-top-left-radius: 0rem;
    border-bottom-left-radius: 0rem;
  }
  @media only screen and (min-device-width: 601px) and (max-device-width: 900px) and (-webkit-min-device-pixel-ratio: 2) {
    margin-top: 2rem;
    width: 100vw;
    height: 28rem;
    border-top-left-radius: 0rem;
    border-bottom-left-radius: 0rem;
  }
  @media only screen and (min-device-width: 901px) and (max-device-width: 1400px) and (-webkit-min-device-pixel-ratio: 2) {
  }
`;
export const Info = styled.div`
  padding: 1.5rem;
  width: 25rem;
  height: 100%;
  border-top-right-radius: 7rem;
  border-bottom-right-radius: 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  box-shadow: rgba(0, 0, 0, 0.479) 0px 5px 15px;
  h3 {
    font-size: 1.2rem;
  }
  p {
    text-align: justify;
    font-size: 1rem;
  }
  @media only screen and (min-device-width: 200px) and (max-device-width: 274px) {
    padding: 0.2rem;
    width: 100vw;
    height: 32rem;
    border-top-right-radius: 0rem;
    border-bottom-right-radius: 0rem;
    h3 {
      font-size: 1.1rem;
      text-align: center;
    }
    p {
      text-align: justify;
      font-size: 0.7rem;
      padding: 0.1rem 0.4rem;
    }
  }
  @media only screen and (min-device-width: 275px) and (max-device-width: 600px) {
    padding: 1rem;
    width: 100vw;
    min-height: 35rem;
    border-top-right-radius: 0rem;
    border-bottom-right-radius: 0rem;
    h3 {
      font-size: 1.1rem;
      text-align: center;
    }
    p {
      text-align: justify;
      font-size: 1rem;
    }
  }
  @media only screen and (min-device-width: 601px) and (max-device-width: 900px) and (-webkit-min-device-pixel-ratio: 2) {
    padding: 1.5rem;
    width: 100vw;
    min-height: 35rem;
    border-top-right-radius: 0rem;
    border-bottom-right-radius: 0rem;
    h3 {
      font-size: 1.3rem;
      text-align: center;
    }
    p {
      text-align: justify;
      font-size: 1.2rem;
    }
  }
  @media only screen and (min-device-width: 901px) and (max-device-width: 1400px) and (-webkit-min-device-pixel-ratio: 2) {
  }
`;

export const ContainerFooterSobre = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: auto;
  background-color: rgb(66, 154, 166);
  /* background-color: #e1a382; */
  box-shadow: 0 -4px 30px -2px rgba(0, 0, 0, 0.5);
  z-index: 200;
  margin-top: 3rem;
  @media only screen and (min-device-width: 200px) and (max-device-width: 374px) {
    margin-top: 0.3rem;
  }
  @media only screen and (min-device-width: 375px) and (max-device-width: 600px) {
  }
  @media only screen and (min-device-width: 601px) and (max-device-width: 900px) and (-webkit-min-device-pixel-ratio: 2) {
  }
  @media only screen and (min-device-width: 901px) and (max-device-width: 1400px) and (-webkit-min-device-pixel-ratio: 2) {
  }
`;
