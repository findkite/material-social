import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProTip from "./ProTip";
import CopyRight from "./components/CopyRight";
import TopNav from "./components/TopNav";
//import { useSelector } from "react-redux";
export default function App() {
  //const posts = useSelector(state => state.posts);
  return (
    <>
      <TopNav />
      <Container maxWidth="xs" className="main">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Material UI Create React App example
          </Typography>
          <ProTip />
        </Box>
      </Container>{" "}
      <CopyRight />
    </>
  );
}
