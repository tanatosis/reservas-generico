import React, { useState, useContext } from "react";
import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

import Grid from "@mui/material/Grid";
import { ServiceContext } from "../../ServiceContext/ServiceContext";

/* --------------------------- ejemplo de datos --------------------------- */
const categories = [
  "Todos",
  "Cabello",
  "Pestañas",
  "Manos y pies",
  "Cejas",
  "Depilación con cera",
  "Limpieza Facial",
  "Solo pies",
  "Solo manos",
];

const services: Service[] = [
  {
    id: 1,
    category: "Limpieza Facial",
    title: "Henna Lips + Spa Facial",
    duration: 40,
    price: 50000,
    description: "Tratamiento combinado de hidratación labial y limpieza facial con vaporización, extracción y mascarilla calmante.",
  },
  {
    id: 2,
    category: "Limpieza Facial",
    title: "Hidratación de labios",
    duration: 45,
    price: 100000,
    description: "Exfoliación suave y aplicación de suero intensivo para labios secos o agrietados.",
  },
  {
    id: 3,
    category: "Limpieza Facial",
    title: "Limpieza facial con microdermoabrasión",
    duration: 90,
    price: 125000,
    description: "Eliminación de impurezas y células muertas con puntas de diamante; incluye mascarilla nutritiva.",
  },
  {
    id: 4,
    category: "Limpieza Facial",
    title: "Limpieza facial profunda",
    duration: 90,
    price: 90000,
    description: "Exfoliación, extracción manual y alta frecuencia para pieles con tendencia a acné.",
  },
  {
    id: 5,
    category: "Manos y pies",
    title: "Press on y pies tradicional",
    duration: 240,
    price: 0,
    description: "Aplicación de press on personalizados para manos + pedicure tradicional." ,
  },
  {
    id: 6,
    category: "Manos y pies",
    title: "Retoque de Acrílico y pies",
    duration: 240,
    price: 0,
    description: "Retoque de acrílico en manos y pedicure; paga decorados o esmalte tradicional aparte.",
  },
];

type Service = {
  id: number;
  category: string;
  title: string;
  duration: number;
  price: number;
  description: string;
};

/* ---------------------------- componente UI ----------------------------- */
export default function ServiceCatalog() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  // Ahora creamos un hook que controla los servicios seleccionados con el boton  de Agendar Servicio
  const { selectedServices, setSelectedServices } = useContext(ServiceContext);



  const filteredServices =
    selectedCategory === "Todos"
      ? services
      : services.filter((s) => s.category === selectedCategory);

// esto no se entiende
  const handleServiceClick = (service: Service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  }

  return (
    <Box sx={{ display: "flex", p: 2 }}>
      {/* ---------- panel de categorías ---------- */}
      <Box sx={{ width: 400, borderRight: 1, borderColor: "divider", pr: 2}}>
        <List>
          {categories.map((cat) => (
            <ListItemButton
              key={cat}
              selected={cat === selectedCategory}
              onClick={() => setSelectedCategory(cat)}
            >
              <ListItemText primary={cat} />
            </ListItemButton>
          ))}
        </List>
      </Box>

      {/* ---------- panel de servicios ---------- */}
      <Box sx={{ pl: 3 }}>
        <Typography variant="h6" gutterBottom>
          {selectedCategory}
        </Typography>
        <Grid container spacing={2}>
          {filteredServices.map((service) => (
            <Grid key={service.id}>
              <Card
                variant="outlined"
                sx={{
                  height: "300px",
                  width: '400px',
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <CardContent>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {service.title}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    {service.duration} min
                  </Typography>

                  <Typography variant="body1" fontWeight="bold" sx={{ mt: 1 }}>
                    {service.price === 0
                      ? "Gratis"
                      : `$${service.price.toLocaleString("es-CL")}`}
                  </Typography>

                  <Typography variant="body2" sx={{ mt: 1 }}>
                    {service.description}
                  </Typography>
                </CardContent>

                <Box sx={{ p: 2, pt: 0 }}>
                  <Button variant="contained" fullWidth color="success" onClick={()=>handleServiceClick(service.id)}>
                    Agendar servicio
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
