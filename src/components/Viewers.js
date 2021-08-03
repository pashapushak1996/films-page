import React from "react";
import styled from "styled-components/macro";

const Viewers = () => {

    function playVideo() {
        const media = document.getElementsByTagName("video");
        if (media.length > 0) {
            for (let i = 0; i < media.length; i++) {
                const videoElement = media[i];
                videoElement.muted = true;
                videoElement.play();
            }
        }
    }

    return (
        <Container>
            <Wrap onMouseOver={ playVideo }>
                <img src="/images/viewers-disney.png" alt=""/>
                <video src="/videos/1564674844-disney.mp4">
                </video>
            </Wrap>
            <Wrap onMouseOver={ playVideo }>
                <img src="/images/viewers-pixar.png" alt=""/>
                <video src="/videos/1564676714-pixar.mp4">
                </video>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-marvel.png" alt=""/>
                <video src="/videos/1564676115-marvel.mp4">
                </video>
            </Wrap>
            <Wrap onMouseOver={ playVideo }>
                <img src="/images/viewers-starwars.png" alt=""/>
                <video src="/videos/1608229455-star-wars.mp4">
                </video>
            </Wrap>
            <Wrap onMouseOver={ playVideo }>
                <img src="/images/viewers-national.png" alt=""/>
                <video src="/videos/1564676296-national-geographic.mp4">

                </video>
            </Wrap>
        </Container>
    );
};

export default Viewers;

const Container = styled.div`
  margin-top: 50px;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(5, 1fr)`;

const Wrap = styled.div`
  position: relative;
  border: 4px solid transparent;
  border-radius: 5px;
  box-shadow: rgb(0 0 0 /69%) 0px 25px 30px -10px,
  rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  video {
    opacity: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }

  &:hover {

    video {
      opacity: 1;
    }

    transform: scaleX(1.05);
    border: 4px solid rgba(249, 249, 249, 0.8);
  }
`;
