import React, {useEffect} from "react";
import styled from "styled-components/macro";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Movies from "./Movies";
import db from '../firebase';

const Home = () => {
    useEffect(() => {
        db.collection("movies").onSnapshot((snapshot) => {
            const moviesList = snapshot.docs.map((doc) => {
                return {id: doc.id, ...doc.data()};
            });
            console.log(moviesList);
        })
    }, [])

    return (
        <Container>
            <ImgSlider/>
            <Viewers/>
            <Movies/>
        </Container>
    );
};

export default Home;

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vh + 5px);
  position: relative;
  overflow-x: hidden;

  &:before {
    content: "";
    background: url("images/home-background.png") center center / cover no-repeat fixed;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;

