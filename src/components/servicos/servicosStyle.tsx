import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 30px;
  background-image: linear-gradient(to left, #fbb19c 0%, #f9f7f9 100%);
  border-top-right-radius: 8rem;
  border-top-left-radius: 8rem;

  h1 {
    font-size: 2.8rem;
    color: #5c2c49;
    margin-top: 5.7rem;
    margin-bottom: 3.5rem;
  }
  .innerContainer {
    gap: 20px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  @media only screen and (min-device-width: 200px) and (max-device-width: 374px) {
    gap: 0px;
    border-top-right-radius: 3rem;
    border-top-left-radius: 3rem;
    h1 {
      font-size: 1.8rem;
      margin-top: 1.2rem;
      margin-bottom: 1rem;
    }
    .innerContainer {
      gap: 0px;
    }
  }
  @media only screen and (min-device-width: 375px) and (max-device-width: 600px) {
    gap: 0px;
    border-top-right-radius: 3rem;
    border-top-left-radius: 3rem;
    h1 {
      font-size: 2rem;
      margin-top: 1.2rem;
      margin-bottom: 1rem;
    }
    .innerContainer {
      gap: 0px;
    }
    border-top-right-radius: 5rem;
    border-top-left-radius: 5rem;
  }
  @media only screen and (min-device-width: 601px) and (max-device-width: 900px) and (-webkit-min-device-pixel-ratio: 2) {
    gap: 0px;
    border-top-right-radius: 3rem;
    border-top-left-radius: 3rem;
    h1 {
      font-size: 2.5rem;
      margin-top: 1.2rem;
      margin-bottom: 1rem;
    }
    .innerContainer {
      gap: 0px;
    }
    border-top-right-radius: 6rem;
    border-top-left-radius: 6rem;
  }
  @media only screen and (min-device-width: 901px) and (max-device-width: 1400px) and (-webkit-min-device-pixel-ratio: 2) {
    gap: 0px;
    border-top-right-radius: 3rem;
    border-top-left-radius: 3rem;
    h1 {
      font-size: 2.9rem;
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
    .innerContainer {
      gap: 0px;
    }
  }
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-size: cover;
  background-position: center;
  width: 15rem;
  height: 18rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-image: linear-gradient(to top, #feebe5 0%, #f9f7f9 100%);
  border-radius: 0.5rem;
  background-color: white;
  padding: 1rem;
  transition: 0.5s;
  margin: 1rem 2rem;
  .imgbox {
    height: 70%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      object-fit: cover;
      width: 90%;
      height: 12rem;
      border-radius: 1rem;
    }
  }
  p {
    color: #5c2c49;
    font-weight: 600;
    font-size: 0.9rem;
    text-align: center;
  }

  &:hover {
    transform: scale(1.15);
  }
  @media only screen and (min-device-width: 200px) and (max-device-width: 374px) {
    padding: 0.2rem;
    margin: 0.5rem;
  }
  @media only screen and (min-device-width: 375px) and (max-device-width: 500px) {
    padding: 0.2rem;
    margin: 0.5rem;
  }
  @media only screen and (min-device-width: 501px) and (max-device-width: 900px) and (-webkit-min-device-pixel-ratio: 2) {
    width: 12rem;
    height: 18rem;
    padding: 0.2rem;
    margin: 0.5rem;
    img {
      height: 9rem;
      border-radius: 1rem;
    }
    p {
      font-size: 0.8rem;
    }
  }
`;

export const ContainerFooter = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: auto;
  background-color: rgb(66, 154, 166);
  box-shadow: 0 -4px 30px -2px rgba(0, 0, 0, 0.5);
  z-index: 200;
  margin-top: 3rem;
`;
