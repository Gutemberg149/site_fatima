import styled from "styled-components";

export const Wrapper = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 4.5rem;
  background-color: rgb(66, 154, 166);
  z-index: 100;
  box-shadow: rgba(0, 0, 0, 0.46) 0px 7px 15px;
  h1 {
    color: #2c1523;
    font-weight: 600;
    font-size: 1.4rem;
    transition: 0.4s;
    &:hover {
      transform: scale(1.1);
    }
  }
  img {
    width: 100px;
    object-fit: cover;
    transition: 0.4s;
    &:hover {
      transform: scale(1.1);
    }
  }
  .leftside {
    display: flex;
    gap: 25px;
    p {
      color: #2c1523;
      font-weight: 600;
      font-size: 1.2rem;
      transition: 0.4s;
      cursor: pointer;
      &:hover {
        transform: scale(1.15);
      }
    }
  }
  @media only screen and (min-device-width: 200px) and (max-device-width: 374px) {
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: auto;
    padding: 0 1rem;
    h1 {
      font-weight: 600;
      font-size: 0.85rem;
    }
    img {
      display: none;
    }
    .leftside {
      display: flex;
      gap: 10px;
      p {
        font-weight: 600;
        font-size: 0.9rem;
        transition: 0.4s;
      }
    }
  }
  @media only screen and (min-device-width: 375px) and (max-device-width: 600px) {
    height: 4.5rem;
    background-color: rgb(66, 154, 166);
    padding: 0 0.5rem;
    h1 {
      font-size: 1rem;
      transition: 0.4s;
      &:hover {
        transform: scale(1.1);
      }
    }
    img {
      width: 50px;
    }
    .leftside {
      display: flex;
      gap: 10px;
      p {
        font-size: 1rem;
      }
    }
  }
  @media only screen and (min-device-width: 601px) and (max-device-width: 900px) and (-webkit-min-device-pixel-ratio: 2) {
    height: 4.5rem;
    background-color: rgb(66, 154, 166);
    padding: 0 0.5rem;
    h1 {
      font-size: 1.2rem;
    }
    img {
      width: 80px;
    }
    .leftside {
      display: flex;
      gap: 15px;
      p {
        font-size: 1.2rem;
      }
    }
  }
`;
