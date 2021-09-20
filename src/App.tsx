import { VFC } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "@chakra-ui/button";
import { ChakraProvider } from "@chakra-ui/react";

const App: VFC = () => {
  return (
    <ChakraProvider>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>-Edit src/App.tsx and save to reload.-</p>
        <Button colorScheme="teal">テスト</Button>
      </header>
    </ChakraProvider>
  );
};

export default App;
