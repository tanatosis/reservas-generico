import React, {useContext} from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Button,
  Badge,
} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { ServiceContext } from "../../ServiceContext/ServiceContext";

function NavBar() {

  const { selectedServices } = useContext(ServiceContext)

const carritoHandler = () => {
    console.log("Carrito", selectedServices);

  };



return (

        <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Peluquería Genérica</Typography>
              {/* ahora creamos un icono de carro de compras que se situa a la derecha  */}
          <Box sx={{ flexGrow: 1 }} />
          <Container>
            <Button color="inherit">Inicio</Button>
            <Button color="inherit">Servicios</Button>
            <Button color="inherit">Contacto</Button>
            <Button color="inherit">Carrito</Button>
            <Button color="inherit">Mi cuenta</Button>
          </Container>
          <Badge badgeContent={selectedServices.length} color="primary" onClick={carritoHandler}>
            <ShoppingCartIcon  />
          </Badge>


        </Toolbar>
      </AppBar>
)}

export default NavBar;