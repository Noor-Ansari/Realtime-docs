import styled from "styled-components";

export const HomeContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 6rem auto;
`;

export const HomeCard = styled.div`
  display: inherit;
  width: 30rem;
  height: 20rem;
  background-color: #e2e2e2;
  margin: auto;
  padding: 2rem;
  border-radius: 1rem;
`;

export const HomeTitle = styled.h1``;

export const Button = styled.button`
  display: block;
  margin: auto;
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  color: #fff;
  background-color: #444;
  font-size: 1.2rem;
  &:hover {
    opacity: 0.8;
    border: 0.2rem dashed #222;
  }
  &:active {
    background-color: #333;
  }
`;

export const Text = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
`;

export const Input = styled.input`
  border-radius: 0.5rem;
  border: 0.2rem dashed #222;
  font-size: 1.6rem;
  padding: 0.5rem 1rem;
`;
