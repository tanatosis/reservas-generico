import { Box, Button, Typography } from "@mui/material";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import './Slider.css';
import img1 from "../../assets/images/1.png";
import img2 from "../../assets/images/2.png";
import img3 from "../../assets/images/3.png";
import img4 from "../../assets/images/4.png";
import img5 from "../../assets/images/5.png";

export default function Slider() {
  const items = [
    {
      image: img1,
      title: "Bienvenido a Peluquería Genérica",
      description: "Tu estilo, nuestra pasión.",
    },
    {
      image: img2,
      title: "Cortes modernos",
      description: "Descubre nuestras tendencias.",
    },
    {
      image: img3,
      title: "Estilo único",
      description: "Personalizado para ti.",
    },
    {
      image: img4,
      title: "Productos de calidad",
      description: "Lo mejor para tu cabello.",
    },
    {
      image: img5,
      title: "Atención excepcional",
      description: "Tu satisfacción es nuestra prioridad.",
    },
  ];

  return (
    <Splide
      options={{ rewind: true, width: 800, gap: "1rem" }}
      aria-label="React Splide Example"
    >
      {items.map((element, idx) => (
        <SplideSlide key={idx} hasTrack={false} aria-label="..." className="splide__slide">
          <img src={element.image} alt="A thing" className={"bg-red-500"} />
          <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <Typography variant="h4" color="white" fontWeight="bold">
              {element.title}
            </Typography>
            <Typography variant="h6" color="white">
              {element.description}
            </Typography>
          </Box>
        </SplideSlide>
      ))}
    </Splide>
  );
}
