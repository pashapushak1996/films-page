import styled from 'styled-components/macro';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <Nav>
            <Logo src={ '/images/logo.svg' }/>
            <NavMenu>
                <Link to={ `/` }>
                    <img src={ `/images/home-icon.svg` } alt={ 'home' }/>
                    <span>HOME</span>
                </Link>
                <Link to={ `/search` }>
                    <img src={ `/images/search-icon.svg` } alt={ 'search' }/>
                    <span>SEARCH</span>
                </Link>
                <Link to={ `/watchlist` }>
                    <img src={ `/images/watchlist-icon.svg` } alt={ 'watchlist' }/>
                    <span>WATCH</span>
                </Link>
                <Link to={ `/originals` }>
                    <img src={ `/images/original-icon.svg` } alt={ 'originals' }/>
                    <span>ORIGINALS</span>
                </Link>
                <Link to={ `/movie` }>
                    <img src={ `/images/movie-icon.svg` } alt={ 'movies' }/>
                    <span>MOVIES</span>
                </Link>
                <Link to={ `/series` }>
                    <img src={ `/images/series-icon.svg` } alt={ 'series' }/>
                    <span>SERIES</span>
                </Link>
            </NavMenu>
            <UserImg src={ `/images/userImage.jpg` }/>
        </Nav>
    );
};

export default Header;

//Styles

const Nav = styled.nav`
  display: flex;
  align-items: center;
  height: 70px;
  padding: 0px 36px;
  background-color: #090b13;
`;

const Logo = styled.img`
  width: 80px;
  height: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    text-decoration: none;
  }

  img {
    height: 20px;
  }

  span {
    font-size: 13px;
    letter-spacing: 1.42px;
    position: relative;
    cursor: pointer;

    &:after {
      content: '';
      height: 2px;
      left: 0;
      right: 0;
      bottom: -6px;
      position: absolute;
      background-color: white;
      opacity: 0;
      transform-origin: left center;
      transform: scaleX(0);
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    }

    &:hover:after {
      opacity: 1;
      transform: scaleX(1);
    }
  }
`;

const UserImg = styled.img`
  height: 48px;
  width: 48px;
  border-radius: 50%;
  cursor: pointer;
`;







