import React from "react";
import styled from "styled-components/macro";

const MovieDetails = ({bg}) => {
    return (
        <Container>
            <Background>
                <img src="images/login-background.jpg" alt=""/>
            </Background>
            <Content>
                <MovieTitle>Bao</MovieTitle>
                <ButtonsGroup>
                    <PlayBtn>
                        <img src="/images/play-icon-black.png" alt=""/>
                        play
                    </PlayBtn>
                    <TrailerBtn>
                        <img src="/images/play-icon-white.png" alt=""/>
                        trailer
                    </TrailerBtn>
                    <AddBtn>+</AddBtn>
                    <GroupBtn>
                        <img src="/images/group-icon.png" alt=""/>
                    </GroupBtn>
                </ButtonsGroup>
                <MovieSubtitle>2018•7m•Family,Kids,Fantasy</MovieSubtitle>
                <MovieDescription>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, magnam repellendus?
                    Alias aperiam consectetur debitis delectus dolores eius facilis id illo illum itaque quam quis sed
                    sequi sint soluta, veritatis!</MovieDescription>
            </Content>
        </Container>
    );
};

export default MovieDetails;


const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vh + 5px);
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;


const Content = styled.div`
  padding-top: 50px;
  display: flex;
  row-gap: 25px;
  flex-direction: column;
`;

const MovieTitle = styled.div`font-size: 35px;`;

const ButtonsGroup = styled.div`
  display: flex;
  column-gap: 25px;
`;


const PlayBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 20px;
  text-transform: uppercase;
  color: black;
  background-color: rgba(249, 249, 249, 1);
  border-radius: 5px;

  &:hover {
    background-color: rgba(249, 249, 249, 0.8);
  }`;

const TrailerBtn = styled(PlayBtn)`
  color: white;
  background-color: rgba(43, 36, 36, 0.5);
  border: 2px solid rgba(249, 249, 249, 0.8);
`;

const AddBtn = styled.div`
  border: 2px solid rgba(249, 249, 249, 0.8);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  background-color: rgba(10, 10, 10, 0.5);

  &:hover {
    background-color: rgba(249, 249, 249, 0.8);
  }
`;


const GroupBtn = styled(AddBtn)``;
const MovieSubtitle = styled.div`
  font-size: 15px;
  font-style: italic`;
const MovieDescription = styled.div`
  line-height: 1.75`;