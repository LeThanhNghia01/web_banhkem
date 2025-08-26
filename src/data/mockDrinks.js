// src/data/mockDrinks.js
import {
  coffee,
  chanhday,
  bobacoffee,
  MangoIceTea,
  matchalate,
  trasuakhoaimon,
} from "../assets/images";

const drinks = [
  {
    id: 1,
    name: "Cà phê sữa đá",
    price: 25000,
    type: "coffee",
    image: coffee,
  },
  {
    id: 2,
    name: "Nước chanh dây",
    price: 30000,
    type: "juice",
    image: chanhday,
  },
  {
    id: 3,
    name: "Trà sữa trân châu cà phê",
    price: 35000,
    type: "milk_tea",
    image: bobacoffee,
  },
  {
    id: 4,
    name: "Trà xoài đá",
    price: 28000,
    type: "tea",
    image: MangoIceTea,
  },
  {
    id: 5,
    name: "Matcha Latte",
    price: 40000,
    type: "latte",
    image: matchalate,
  },
  {
    id: 6,
    name: "Trà sữa khoai môn",
    price: 35000,
    type: "milk_tea",
    image: trasuakhoaimon,
  },
];

export default drinks;
