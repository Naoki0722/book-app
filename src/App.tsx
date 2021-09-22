import { VFC } from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";
import { UserProvider } from "./providers/UserProvider";

const App: VFC = () => {
  return (
    <ChakraProvider>
      <UserProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </UserProvider>
    </ChakraProvider>
  );
};

export default App;
