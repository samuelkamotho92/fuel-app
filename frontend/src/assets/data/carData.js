// import all images from assets/images directory
import img01 from "../all-images/cars-img/gas1.jpg";
import img02 from "../all-images/cars-img/gas2.jpg";
import img03 from "../all-images/cars-img/gas3.jpg";
const carData = [
  {
    id: 1,
    brand: "Petroleum",
    rating: 112,
    serviceName: "Petroleum",
    imgUrl: img01,
    model: "Model 3",
    price: 120,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "We offer the best quality petroleum fuel at affordable cost",
  },

  {
    id: 2,
    brand: "Diesel",
    rating: 102,
    serviceName: "Diesel",
    imgUrl: img02,
    model: "Model-2022",
    price: 110,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "Our diesel  fuel is a clean, high-performance fuel that is designed to provide maximum efficiency, reliability, and longevity to diesel engines.",
  },

  {
    id: 3,
    brand: "Kerosine",
    rating: 132,
    serviceName: "Kerosine",
    imgUrl: img03,
    price: 80,
    description:
      "We offer Kerosene fuel of high-quality, clean-burning and efficient fuel that is widely used in our homes, providing reliable and cost-effective energy.",
  },

];

export default carData;
