import React, {useEffect} from "react";
import styled from "styled-components/macro";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Movies from "./Movies";
import db from '../firebase';
import {useDispatch} from "react-redux";
import {setMovies} from "../features/movie/movieSlice";

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        db.collection('movies').onSnapshot((snapshot) => {
            const moviesFromDB = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
            console.log(moviesFromDB);
            dispatch(setMovies(moviesFromDB));
        });
    });


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
    background: url("/images/home-background.png") center center / cover no-repeat fixed;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;

