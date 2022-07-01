import React from "react";
import styled from "styled-components";
import logoImg from "../img/youtube.gif";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import MovieIcon from "@mui/icons-material/Movie";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import AppSettingsAltIcon from "@mui/icons-material/AppSettingsAlt";
import ReportIcon from "@mui/icons-material/Report";
import HelpIcon from "@mui/icons-material/Help";
import LightModeIcon from "@mui/icons-material/LightMode";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Container = styled.div`
  flex: 1.2;
  background-color: ${({ theme }) => theme.bgLight};
  height: 100vh;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  position: sticky;
  top: 0;
  overflow: auto;
`;

const Wrapper = styled.div`
  padding: 18px 26px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
`;

const Img = styled.img`
  height: 60px;
  width: 100px;
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Login = styled.div`
  display: flex;
  color: black;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  width: 100%;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
  margin-top: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  cursor: pointer;
  color: black;
  padding: 7.5px 0;
`;

const Menu = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Img src={logoImg} draggable="false" />
        </Logo>

        <Item>
          <HomeIcon /> Home
        </Item>

        <Item>
          <ExploreIcon /> Explore
        </Item>

        <Item>
          <SubscriptionsIcon /> Subscriptions
        </Item>
        <Hr />
        <Item>
          <VideoLibraryIcon /> Library
        </Item>
        <Item>
          <HistoryIcon /> History
        </Item>
        <Hr />
        <Login>
          Sign in to like videos, comment, and subscribe.
          <Button>
            <AccountCircleIcon /> SIGN IN
          </Button>
        </Login>
        <Hr />
        <Item>
          <LibraryMusicIcon /> Music
        </Item>

        <Item>
          <SportsEsportsIcon /> Sports
        </Item>
        <Item>
          <MovieIcon /> Movies
        </Item>
        <Item>
          <NewspaperIcon /> News
        </Item>
        <Item>
          <LiveTvIcon /> Live
        </Item>
        <Hr />
        <Item>
          <AppSettingsAltIcon /> Settings
        </Item>
        <Item>
          <ReportIcon /> Report
        </Item>

        <Item>
          <HelpIcon /> Help
        </Item>

        <Item>
          <LightModeIcon /> Light Mode
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;
