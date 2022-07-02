import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 360px;
  margin-bottom: 45px;
  cursor: pointer;
`;

const Img = styled.img`
  width: 100%;
  height: 202px;
  background-color: #999;
`;

const Details = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 12px;
`;

const Texts = styled.div``;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 14px;
  margin: 9px 0px;
  color: ${({ theme }) => theme.textSoft};
`;
const Info = styled.div`
  font-size: 14px;

  color: ${({ theme }) => theme.textSoft};
`;

const ProfileImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
`;

const Card = () => {
  return (
    <Container>
      <Img src="https://res.cloudinary.com/dmsxwwfb5/image/upload/v1595866967/full-stack-devlopment-min.png" />
      <Details>
        <ProfileImg src="https://avatars.githubusercontent.com/u/71559091?s=400&u=19775acdc2698063179841ec84602507b5d6e332&v=4" />
        <Texts>
          <Title>Dev Video</Title>
          <ChannelName>Passionate Dev</ChannelName>
          <Info>798,898 views . 1 day ago</Info>
        </Texts>
      </Details>
    </Container>
  );
};

export default Card;
