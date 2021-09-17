import React, { VFC } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "@chakra-ui/button";
import { ChakraProvider } from "@chakra-ui/react";

const App: VFC = () => {
  return (
    <ChakraProvider>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button colorScheme="teal">テスト</Button>
      </header>
    </ChakraProvider>
  );
};

export default App;
