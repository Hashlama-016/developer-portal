import { Routes, Route, Link } from "react-router-dom";
import {
  ThemeProvider,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Box,
  Container,
} from "@mui/material";
import theme from "./style/theme";
import Services from "@/pages/Services/Services";
import Orders from "@/pages/Orders/Orders";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <AppBar position="static" sx={{ mb: 3 }}>
          <Toolbar sx={{ display: "flex", justifyContent: "center", gap: 4 }}>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              <Typography variant="button">Services</Typography>
            </Link>
            <Link
              to="/orders"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Typography variant="button">Orders</Typography>
            </Link>
          </Toolbar>
        </AppBar>

        <Container maxWidth="lg" sx={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Services />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
