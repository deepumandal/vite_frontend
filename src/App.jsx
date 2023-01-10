import { useState } from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "./view/Navbar";
import Allroutes from "./components/Allroutes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Box>
      <Box
        height={"60px"}
        // border={"1px solid red"}
        padding={"1rem"}
        boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
       
      >
        <Navbar />
        <Allroutes />
      </Box>
    </Box>
  );
}

export default App;
