import React from "react";
import styled from "styled-components";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgLight};
  height: 56px;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  padding: 0px 20px;
  height: 100%;
`;
const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  position: absolute;
  left: 0px;
  right: 0px;
  margin: auto;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;
const Input = styled.input`
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  outline: none;
  font-size: 20px;
  width: 100%;
`;
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder="Search" />
          <SearchIcon style={{ color: "#999" }} />
        </Search>
        <Button>
          <AccountCircleIcon /> SIGN IN
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
