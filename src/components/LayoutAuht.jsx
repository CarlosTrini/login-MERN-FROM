import React from "react";
import { Outlet } from "react-router";
import styled from "@emotion/styled";

import ilustration from "/images/fondo.svg";

const Div = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background: #12145e url("/images/wave.svg") bottom/contain no-repeat;

  @media (min-width: 780px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
`;


const Section = styled.section`
  width: 100%;
  max-width:30rem ;
  min-height: 50vh;
  margin: 0 auto;
  &:last-of-type {
    margin-top: -2rem;
    @media (min-width: 780px) {
      margin-top: 0;
    }
  }
`;

const Figure = styled.figure`
  width: 100%;
  max-width: 25rem;
  min-height: inherit;
  margin: auto;

  img {
    min-height: inherit;
    object-fit: cover;
  }
`;

const LayoutAuht = () => {
  return (
    <Div>
      <Section>
        <Figure>
          <img src={ilustration} alt="Ilustration" />
        </Figure>
      </Section>
      <Section>
        <Outlet />
      </Section>
    </Div>
  );
};

export default LayoutAuht;
