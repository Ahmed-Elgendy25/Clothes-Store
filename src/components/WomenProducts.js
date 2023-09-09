import { v4 as uuidv4 } from "uuid";
const womanSweat = require("../photos/clothesWoman/sweat1.jpg");
const womanSweat2 = require("../photos/clothesWoman/sweat2.jpg");
const womanSweat3 = require("../photos/clothesWoman/sweat3.jpg");
const womanSweat4 = require("../photos/clothesWoman/sweat4.jpg");
const womanTee = require("../photos/clothesWoman/tee1.jpg");
const womanTee2 = require("../photos/clothesWoman/tee2.jpg");
const womanTee3 = require("../photos/clothesWoman/tee3.jpg");
const shirt1 = require("../photos/clothesMen/shirt.jpg");
const shirt2 = require("../photos/clothesMen/shirt2.jpg");
const shirt3 = require("../photos/clothesMen/shirt3.jpg");
const shirt4 = require("../photos/clothesMen/shirt4.jpg");
const shirt5 = require("../photos/clothesMen/shirt5.jpg");
export const initialProducts = [
  {
    title: "Cycling Bib Shorts",
    price: 49.99,
    image: womanSweat,
    id: uuidv4(),
  },
  {
    title: "Cycling Tights",
    price: 59.99,
    image: womanSweat2,
    id: uuidv4(),
  },
  {
    title: "Cycling Bib Shorts",
    price: 49.99,
    image: womanSweat3,
    id: uuidv4(),
  },
  {
    title: "Cycling Tights",
    price: 59.99,
    image: womanSweat4,
    id: uuidv4(),
  },
  {
    title: "Cycling Bib Shorts",
    price: 49.99,
    image: womanTee,
    id: uuidv4(),
  },
  {
    title: "Cycling Tights",
    price: 59.99,
    image: womanTee2,
    id: uuidv4(),
  },
  {
    title: "Cycling Bib Shorts",
    price: 49.99,
    image: womanTee3,
    id: uuidv4(),
  },
  {
    title: "Cycling Tights",
    price: "$59.99",
    image: shirt5,
    id: uuidv4(),
  },
  {
    title: "Cycling Bib Shorts",
    price: 49.99,
    image: shirt4,
    id: uuidv4(),
  },
  {
    title: "Cycling Tights",
    price: 59.99,
    image: shirt3,
    id: uuidv4(),
  },
  {
    title: "Cycling Bib Shorts",
    price: 49.99,
    image: shirt2,
    id: uuidv4(),
  },
  {
    title: "Cycling Tights",
    price: 59.99,
    image: shirt1,
    id: uuidv4(),
  },
];
