import logo from './logo.png'
import searchIcon from './searchIcon.svg'
import cart from './cart.png'
import Hero from './hero.png'
import discount from './discount.png'
import facebook from './facebookIcon.svg'
import instagram from './instagramIcon.svg'
import linkedin from './linkendinIcon.svg'
import twitter from './twitterIcon.svg'
import starIconFilled from './starIconFilled.svg'
import starIconOutlined from './starIconOutlined.svg'
import categoryIcon from './categoryIcon.png'
import brandIcon from './brandIcon.png'
import headphone from './headphone.png'
import watch from './watch.jpg'
import jersey from './jersey.png'
import watch1 from './watch.png'
import phone from './phone.png'
import laptop from './laptop.png'
export const assets = {
    logo,
    searchIcon,
    cart,
    Hero,
    discount,
    facebook,
    instagram,
    linkedin,
    twitter,
    starIconFilled,
    starIconOutlined,
    categoryIcon,
    brandIcon,
    headphone,
    watch,
    watch1,
    jersey,
    phone,
    laptop
}

export const productsDummyData = [
  {
    _id: "1",
    name: "Wireless Headphones",
    category: "Electronics",
    brand: "Sony",
    price: 120,
    images: [headphone],
    features: ["Bluetooth", "Noise Canceling", "20h Battery"]
  },
  {
    _id: "2",
    name: "Smart Watch",
    category: "Electronics",
    brand: "Apple",
    price: 350,
    images: [watch],
    features: ["Heart Rate", "Fitness Tracking", "Waterproof"]
  },
  {
    _id: "3",
    name: "Sport Smart Watch",
    category: "Electronics",
    brand: "Samsung",
    price: 300,
    images: [watch1],
    features: ["Heart Rate Monitor", "Step Counter", "Water Resistant"]
  },
  {
    _id: "4",
    name: "Football Jersey",
    category: "Clothing",
    brand: "Nike",
    price: 80,
    images: [jersey],
    features: ["Breathable Fabric", "Lightweight", "Sports Wear"]
  },
  {
    _id: "5",
    name: "Smart Phone",
    category: "Electronics",
    brand: "Samsung",
    price: 900,
    images: [phone],
    features: ["5G", "128GB Storage", "AMOLED Display"]
  },
  {
    _id: "6",
    name: "Laptop",
    category: "Electronics",
    brand: "Dell",
    price: 1200,
    images: [laptop],
    features: ["16GB RAM", "512GB SSD", "Intel i7 Processor"]
  }
];