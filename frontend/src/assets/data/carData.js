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
      "Vehicle tracking is a technology that uses Global Positioning System (GPS) to track the movements of a vehicle or fleet of vehicles. It allows organizations to monitor and manage their vehicles in real time, as well as to create reports and analyze data. It can be used to monitor a variety of metrics, including location, speed, fuel consumption, driver behavior, and more. Vehicle tracking can help organizations reduce costs, improve efficiency, and increase safety.",
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
      "Fleet management is the management of a company's fleet of vehicles, which includes cars, trucks, vans, and other vehicles. It includes tracking, maintenance, and repair of the vehicles in the fleet, as well as the management of drivers, fuel costs, and other fleet-related expenses. Fleet management can help reduce costs and improve efficiency. Additionally, it can help ensure compliance with safety and environmental regulations.",
  },

  {
    id: 3,
    brand: "Kerosine",
    rating: 132,
    serviceName: "Kerosine",
    imgUrl: img03,
    price: 80,
    description:
      "Fuel management is the process of monitoring and controlling fuel usage in order to maximize efficiency, reduce costs, and ensure compliance with regulations. It involves tracking fuel consumption, identifying and rectifying fuel-related issues, and optimizing fuel efficiency. It can be used to identify and address fuel-related problems, such as fuel leakage, fuel theft, and fuel adulteration. By managing fuel consumption and use, organizations can save money and increase their profits.",
  },

];

export default carData;
