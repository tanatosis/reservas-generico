import React, { useContext } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Button,
  Badge,
  Drawer,
  Divider,
  Card,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { ServiceContext } from "@/ServiceContext/ServiceContext";
import { getItem } from "@/utils/localStorage";

function NavBar() {
  const { selectedServices } = useContext(ServiceContext);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const carritoHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    const stored = getItem("selectedServices");
    if (typeof stored === "string") {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          console.log(parsed.length);
        } else {
          console.log(0);
        }
      } catch {
        console.log(0);
      }
    } else {
      console.log(0);
    }
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // const storedServices = 

  // const storedServicesParsed =
  //   typeof storedServices === "string"
  //     ? JSON.parse(storedServices)
  //     : null;

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Peluquería Genérica</Typography>
        <Box sx={{ flexGrow: 1 }} />
        
                <Container sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Button color="inherit">Inicio</Button>
          <Button color="inherit">Servicios</Button>
          <Button color="inherit">Contacto</Button>
          <Button color="inherit">Carrito</Button>
          <Button color="inherit">Mi cuenta</Button>
                    <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: 2 }}>
            <TextField
              size="small"
              variant="outlined"
              placeholder="Buscar servicio..."
              InputProps={{
                startAdornment: <SearchIcon sx={{ color: '#555555', marginRight: '4px' }} />,
                sx: {
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E1E5E9',
                  borderRadius: '4px',
                  paddingLeft: '4px'
                }
              }}
              sx={{
                width: { xs: 120, sm: 200, md: 300 }
              }}
            />
          </Box>

          
        </Container>
        
        <Badge
//contador pendiente          badgeContent={stored.length}
          color="secondary"
          onClick={carritoHandler}
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <CalendarMonthIcon />
        </Badge>

        <Drawer
          id="basic-menu"
          anchor="right"
          open={open}
          onClose={handleClose}
          sx={{
            "& .MuiDrawer-paper": {
              width: 500,
              backgroundColor: "#f5f5f5",
              borderTopLeftRadius: "8px",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
            },
          }}
        >
          <Box
            sx={{
              width: 450,
              padding: 2,
              marginTop: 2,
              height: "100%",
              overflowY: "auto",
            }}
          >
            <Typography
              variant="h6"
              gutterBottom
              style={{ fontWeight: "bold" }}
            >
              Servicios seleccionados
            </Typography>
            {selectedServices.length > 0 ? (
              selectedServices.map((service) => (
                <React.Fragment key={service.id}>
                  <Card sx={{ marginBottom: 2, padding: 2 }}>
                    <Typography variant="body1">{service.title}</Typography>
                    <Typography variant="body2">{service.price}</Typography>
                  </Card>
                  <Divider
                    orientation="horizontal"
                    sx={{ margin: "10px 0" }}
                    flexItem
                  />
                </React.Fragment>
              ))
            ) : (
              <Typography variant="body1">
                No hay servicios seleccionados
              </Typography>
            )}
            <Box sx={{ position: "absolute", marginTop: 2, bottom: 0, left: 0,  right: 0, padding: 5 }} >
              <Divider orientation="horizontal" sx={{ marginBottom: 5}}   flexItem />

              <Typography
                variant="h6"
                gutterBottom
                style={{ fontWeight: "bold" }}
              >
                Total:
              </Typography>
              <Typography
                variant="h6"
                gutterBottom
                style={{ fontWeight: "bold" }}
              >
                {selectedServices.reduce(
                  (total, service) => total + service.price,
                  0
                )}
              </Typography>
            </Box>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
