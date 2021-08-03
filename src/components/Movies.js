import React from "react";
import styled from "styled-components/macro";

const Movies = () => {
    return (
        <Container>
            <h4>Recommended for You</h4>
            <Content>
                <Wrap>
                    <img src="/images/viewers-national.png" alt=""/>
                </Wrap>
                <Wrap>
                    <img src="/images/viewers-national.png" alt=""/>
                </Wrap>
                <Wrap>
                    <img src="/images/viewers-national.png" alt=""/>
                </Wrap>
                <Wrap>
                    <img src="/images/viewers-national.png" alt=""/>
                </Wrap>
            </Content>
        </Container>
    );
};

export default Movies;


const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  padding: 20px 0px;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const Wrap = styled.div`
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 /69%) 0px 25px 30px -10px,
  rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all .5s;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    border: 3px solid rgba(249, 249, 249, 0.8);
    transform: scaleX(1.05);
  }`;


