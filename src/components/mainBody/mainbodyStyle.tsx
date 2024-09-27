import styled from "styled-components";
import bacgimg from "./bscAtelier.jpeg";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  position: relative;
  @media only screen and (min-device-width: 200px) and (max-device-width: 374px) {
  }
  @media only screen and (min-device-width: 375px) and (max-device-width: 600px) {
  }
  @media only screen and (min-device-width: 601px) and (max-device-width: 900px) and (-webkit-min-device-pixel-ratio: 2) {
  }
  @media only screen and (min-device-width: 901px) and (max-device-width: 1400px) and (-webkit-min-device-pixel-ratio: 2) {
  }
`;

export const BcgImage = styled.section`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 71vh;
  background-image: url(${bacgimg});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  top: 0;
  z-index: 1;
  img {
    width: 500px;
  }

  @media only screen and (min-device-width: 200px) and (max-device-width: 374px) {
    height: 61vh;

    img {
      width: 250px;
    }
  }
  @media only screen and (min-device-width: 375px) and (max-device-width: 600px) {
    height: 81vh;

    img {
      width: 300px;
    }
  }
  @media only screen and (min-device-width: 601px) and (max-device-width: 900px) and (-webkit-min-device-pixel-ratio: 2) {
    height: 81vh;

    img {
      width: 350px;
    }
  }
  @media only screen and (min-device-width: 901px) and (max-device-width: 1400px) and (-webkit-min-device-pixel-ratio: 2) {
    height: 81vh;

    img {
      width: 400px;
    }
  }
`;

export const BcgImage2 = styled.section`
  position: fixed;
  top: 34rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60vh;
  background-image: url(${bacgimg});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 1;

  @media only screen and (min-device-width: 200px) and (max-device-width: 374px) {
    top: 21rem;
  }
`;

export const Section01 = styled.section`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  background-color: white;
  z-index: 99;
  top: 70vh;
  box-shadow: rgba(0, 0, 0, 0.617) 0px 5px 30px, rgba(0, 0, 0, 0.2) 0px 15px 20px;
  border-top-right-radius: 8rem;
  border-top-left-radius: 8rem;

  @media only screen and (min-device-width: 200px) and (max-device-width: 374px) {
    top: 45vh;
    border-top-right-radius: 3rem;
    border-top-left-radius: 3rem;
  }
  @media only screen and (min-device-width: 375px) and (max-device-width: 600px) {
    top: 65vh;
    border-top-right-radius: 5rem;
    border-top-left-radius: 5rem;
  }
  @media only screen and (min-device-width: 601px) and (max-device-width: 900px) and (-webkit-min-device-pixel-ratio: 2) {
    top: 65vh;
    border-top-right-radius: 6rem;
    border-top-left-radius: 6rem;
  }
`;
