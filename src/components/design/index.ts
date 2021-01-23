import styled from "styled-components";

const theme = {
  colors: {
    blue: "#9cb3ff",
    bg2: "#fbfbfb",
    bg1: "#f2f2f2",
    grey: "#dedede",
    darkBlue: "#3955ae",
  },
};

export const Page = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: ${theme.colors.bg1};
`;
export const FormWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 600px;
  padding: 20px 15px;
  background: ${theme.colors.bg2};
  box-shadow: 1px 2px 11px rgb(0 0 0 / 23%);
`;

export const Form = styled.form`
  position: relative;
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
`;

export const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 30px;
`;

export const Label = styled.label`
  display: inline-block;
  padding: 2px 5px;
  margin: 0;
  font-size: 12px;
  background: ${theme.colors.bg2};
  position: absolute;
  top: -10px;
  left: 15px;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  height: 40px;
  padding: 5px;
  border: 1px solid ${theme.colors.grey};
  border-radius: 10px;
`;

export const Button = styled.button`
  display: block;
  margin: 0 auto 30px;
  width: 100px;
  padding: 5px 10px;
  border: 1px solid ${theme.colors.darkBlue};
  border-radius: 20px;
  background: ${theme.colors.darkBlue};
  color: #fff;
  height: 40px;
  cursor: pointer;
`;

export const H1 = styled.h1`
  text-align: center;
  font-size: 1.75rem;
  margin-bottom: 30px;
  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

export const Error = styled.small`
  margin: -28px 0 30px 15px;
  min-height: 1px;
  display: block;
  color: red;
  font-size: 70%;
  &.data {
    margin: 0 auto;
    font-size: 100%;
    text-align: center;
  }
`;
export const ResultsWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  padding: 20px 15px;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    max-width: 75%;
  }
`;

export const Card = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: flex-start;
  min-width: 49%;
  max-width: 49%;
  padding: 15px;
  background: ${theme.colors.bg2};
  box-shadow: 1px 2px 11px rgb(0 0 0 / 23%);
  margin-bottom: 20px;
  @media screen and (max-width: 319px) {
    min-width: 100%;
    max-width: 100%;
  }
  @media screen and (min-width: 320px) and (max-width: 991px) {
    min-width: 300px;
    max-width: 300px;
    margin: 0 auto 20px;
  }
`;

export const Details = styled.div`
  flex-grow: 2;
  & > strong {
    font-size: 1.5em;
  }
  p {
    font-size: 1em;
    line-height: 1.5;
  }
  a {
    display: inline-block;
    margin: 0 10px 0 0;
  }

  @media screen and (max-width: 991px) {
    & > strong {
      font-size: 16px;
    }
    p {
      font-size: 14px;
    }
  }
`;
export const ImageWrapper = styled.div`
  flex-grow: 1;
  min-width: 120px;
  max-width: 120px;
  img {
    width: 85%;
    display: block;
    margin: 0 0 0 auto;
  }
`;

export const Credit = styled.div`
  padding: 10px 0;
  font-size: 12px;
  font-family: monospace;
  text-align: center;
`;
