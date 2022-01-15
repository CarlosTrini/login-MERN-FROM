import styled from "@emotion/styled";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 30rem;
  margin: 0.5rem auto 0;
  padding: 3rem 1rem;
  border-radius: 0.5rem;
  background: #ffffff;
`;
export const Fields = styled.div`
  input {
    width: 100%;
    padding: 0.5rem;
    border-radius: 0.3rem;
    border: none;
    background: #f5f5f6;
  }
  input:focus {
    outline: #221fc5 solid 0.1rem;
  }
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
    color: #221fc5;
  }
`;

export const Submit = styled.button`
  display: block;
  width: 100%;
  margin: 1rem auto 0;
  padding: 0.5rem 1rem;
  font-weight: 900;
  text-transform: uppercase;
  color: #ffffff;
  border: none;
  border-radius: 0.3rem;
`;
