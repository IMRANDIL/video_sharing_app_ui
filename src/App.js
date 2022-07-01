import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { darkTheme, lightTheme } from "./utils/Theme";

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
  background-color: #181818;
`;
const Wrapper = styled.div``;

function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <Menu setDarkMode={setDarkMode} />

        <Main>
          <Navbar />
          <Wrapper>
            <h1>testing</h1>
            <h1>testing</h1>
            <h1>testing</h1>
            <h1>testing</h1>
            <h1>testing</h1>
            <h1>testing</h1>
            <h1>testing</h1>
            <h1>testing</h1>
            <h1>testing</h1>
            <h1>testing</h1>
            <h1>testing</h1>
            <h1>testing</h1>
            <h1>testing</h1>
            <h1>testing</h1>
            <h1>testing</h1>
          </Wrapper>
        </Main>
      </Container>
    </ThemeProvider>
  );
}

export default App;