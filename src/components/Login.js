import React from "react";
import styled from "styled-components/macro";

const Login = () => {
    const date = new Date();
    const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];

    return (
        <Container>
            <Content>
                <img src="images/cta-logo-one.svg" alt=""/>
                <Button>get all there</Button>
                <p>Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription.
                    As of { day }/{ month }/{ year }, the price of Disney+ and The Disney Bundle will increase by
                    1$.</p>
                <img src="images/cta-logo-two.png" alt=""/>
            </Content>
        </Container>
    );
};

export default Login;


const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vh + 5px);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("/images/login-background.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: -1;
  }
`;

const Content = styled.div`
  padding-top: 10%;
  width: 80%;

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }

  p {
    text-align: center;
  }
`;


const Button = styled.div`
  cursor: pointer;
  padding: 20px 0px;
  text-transform: uppercase;
  background-color: #0040ff;
  text-align: center;
`;

