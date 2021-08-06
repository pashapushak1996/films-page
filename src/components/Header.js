import styled from 'styled-components/macro';
import {Link} from "react-router-dom";
import {auth, provider} from "../firebase";
import {selectUser, setUserLogin, setUserLogout} from "../features/user/userSlice";
import {useDispatch, useSelector} from "react-redux";

const Header = () => {

        const dispatch = useDispatch();
        const user = useSelector(selectUser);

        const signIn = async () => {
            const {user} = await auth.signInWithPopup(provider);
            dispatch(setUserLogin({
                userName: user.displayName,
                userEmail: user.email,
                userPhoto: user.photoURL
            }));
        };
        const signOut = async () => {
            const logOut = await auth.signOut();
            dispatch(setUserLogout());
        }


        return (
            <Nav>
                <Logo src={ '/images/logo.svg' }/>
                { !user.name ? <LoginButton onClick={ () => signIn() }>Login</LoginButton> : <>
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
                    <UserInfoContainer>
                        <UserImg src={ user.photo }/>
                        <span>{ user.name }</span>
                        <Logout onClick={ () => signOut() }><i className="fas fa-sign-out-alt"></i></Logout>
                    </UserInfoContainer>
                </> }
            </Nav>
        );
    }
;

export default Header;

//Styles

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
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
      transition: all 250ms
        cubic - bezier(0.25, 0.46, 0.45, 0.94)
      0s;
    }

    &:hover:after {
      opacity: 1;
      transform: scaleX(1);
    }
  }
`;

const LoginButton = styled.div`
  padding: 5px 10px;
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.87);
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.87);
    color: black;
  }`;

const Logout = styled(LoginButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  height: 48px;
  width: 48px;
  border-radius: 50%;
`;

const UserInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 20px;

  span {
    font-size: 25px;
  }
`;
const UserImg = styled.img`
  height: 48px;
  width: 48px;
  border-radius: 50%;
  cursor: pointer;
`;







