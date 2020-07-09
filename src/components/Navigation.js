import React from 'react';
import {useState,useEffect} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { ImageWrapper } from '../components';
import { HomeO, ListO, HeartO, UserO } from '../assets';
import { devices, rem } from '../utilities';

const Navigation = (props) => {

  const [ log, setLog ] = useState(Boolean);
  
  
	const stateLog = () => {
    if (sessionStorage.getItem('User') == null){
      setLog(false);
		} else {
      setLog(true);
		}
  };

	const login = () => {
    if (log === true){
			return(
        <Link to="/Logout" className="navigation__item">
						<ListO />
						logout
				</Link>
			)
		} else if (log === false) {
      console.log('je suis pas connecté');
			return(
        <Link to="/connexion" className="navigation__item">
					<ListO />
					Connexion
			</Link>
			)
		}
	}
  
  useEffect(() => {
    stateLog();
    /* login(); */
  });
  
	return (
    <HeaderStyle className="content-wrapper">
			<Link to="/">
				<ImageWrapper name="OndeLogo" />
			</Link>
			<nav className="navigation" role="navigation">
				<div className="content-wrapper navigation__items">
					<Link to="/" className="navigation__item">
						{/* {switchIconTapbar()} */}
						<HomeO />
						Accueil
					</Link>
					<Link to="/initiatives" className="navigation__item">
						{/* {switchIconTapbar()} */}
						<ListO />
						Initiatives
					</Link>
          <Link to="/missions" className="navigation__item">
                <ListO/>
                À propos
          </Link>
					{/* {sessionStorage.getItem('User') &&
						<Link to="/nouvelle-initiative" className="navigation__item">
								<PenO />
								Créer
						</Link>
					} */}
					{login(log)}
				</div>
			</nav>
		</HeaderStyle>
	);
};
const HeaderStyle = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  width: 100vw;
  height: 75px;
  background-color: ${props => props.theme.background};
  z-index: 100;

  @media ${devices.large} {
    bottom: auto;
    box-shadow: 0px 0.8px 10px rgba(128, 138, 159, 0.23);
  }

  a {
    z-index: 10;
  }

  .navigation {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: ${props => props.theme.background};
    box-shadow: 0px -0.8px 10px rgba(128, 138, 159, 0.23);

    @media ${devices.large} {
      top: 0;
      bottom: auto;
      justify-content: flex-end;
      box-shadow: 0px 0.8px 10px rgba(128, 138, 159, 0.23);
    }

    &__items {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 100vw;
      height: 60px;
      color: ${props => props.theme.grey};

      @media ${devices.large} {
        justify-content: flex-end;
        height: 75px;
        color: ${props => props.theme.black};
      }
    }

    &__item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      font-size: ${rem(10)};
      font-weight: 500;

      @media ${devices.large} {
        margin: 0 20px;
        width: auto;
        font-size: ${rem(18)};
      }

      &:first-child {
        @media ${devices.large} {
          display: none;
        }
      }

      svg {
        margin-bottom: 3px;
        width: 21px;
        height: 21px;
        fill: ${props => props.theme.grey};

        @media ${devices.large} {
          display: none;
        }
      }
    }
  }

  img {
    width: 100%;
    max-width: 94px;
    max-height: 32px;
    z-index: 10;

    @media ${devices.large} {
      max-width: 128px;
      max-height: 45px;
    }
  }
`;

export default Navigation;
