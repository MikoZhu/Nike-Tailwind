import bigShoe1 from "/images/big-shoe1.png";
import bigShoe2 from "/images/big-shoe2.png";
import bigShoe3 from "/images/big-shoe3.png";
import thumbnailShoe1 from "/images/thumbnail-shoe1.svg";
import thumbnailShoe2 from "/images/thumbnail-shoe2.svg";
import thumbnailShoe3 from "/images/thumbnail-shoe3.svg";
import shoe4 from "/images/shoe4.svg";
import shoe5 from "/images/shoe5.svg";
import shoe6 from "/images/shoe6.svg";
import shoe7 from "/images/shoe7.svg";
import truckFast from "/icons/truck-fast.svg";
import shieldTick from "/icons/shield-tick.svg";
import support from "/icons/support.svg";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
];
export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500k+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];
export const products = [
  {
    imgURL: shoe4,
    name: "Nike Air Jordan-01",
    price: "$200.20",
  },
  {
    imgURL: shoe5,
    name: "Nike Air Jordan-10",
    price: "$210.20",
  },
  {
    imgURL: shoe6,
    name: "Nike Air Jordan-100",
    price: "$220.20",
  },
  {
    imgURL: shoe7,
    name: "Nike Air Jordan-001",
    price: "$230.20",
  },
];
export const services = [
  {
    imgURL: truckFast,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];
