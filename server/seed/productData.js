const mongoose = require("mongoose");
const dotenv = require("dotenv");

const Product = require("../models/Product");

dotenv.config();

const products = [
  {
    name: "iPhone 17 Pro",
    slug: "iphone-17-pro",
    brand: "Apple",
    description:
      "iPhone 17 Pro with powerful performance, an advanced camera system and a premium titanium design.",

    image:
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=800&q=80",

    variants: [
      {
        color: "Silver",
        storage: "256 GB",
        price: 129999,
        mrp: 139999,
        image:
          "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=800&q=80",
      },
      {
        color: "Black",
        storage: "256 GB",
        price: 129999,
        mrp: 139999,
        image:
          "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=800&q=80",
      },
      {
        color: "Silver",
        storage: "512 GB",
        price: 149999,
        mrp: 159999,
        image:
          "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=800&q=80",
      },
    ],

    emiPlans: [
      {
        tenure: 6,
        monthlyAmount: 21667,
        interestRate: 0,
        cashback: 2000,
      },
      {
        tenure: 9,
        monthlyAmount: 14444,
        interestRate: 0,
        cashback: 2500,
      },
      {
        tenure: 12,
        monthlyAmount: 10833,
        interestRate: 0,
        cashback: 3000,
      },
    ],
  },

  {
    name: "Samsung Galaxy S25 Ultra",
    slug: "samsung-galaxy-s25-ultra",
    brand: "Samsung",
    description:
      "Samsung Galaxy S25 Ultra with a premium display, powerful processor, S Pen and an advanced camera system.",

    image:
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80",

    variants: [
      {
        color: "Titanium Black",
        storage: "256 GB",
        price: 119999,
        mrp: 129999,
        image:
          "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80",
      },
      {
        color: "Titanium Gray",
        storage: "256 GB",
        price: 119999,
        mrp: 129999,
        image:
          "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80",
      },
      {
        color: "Titanium Black",
        storage: "512 GB",
        price: 139999,
        mrp: 149999,
        image:
          "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80",
      },
    ],

    emiPlans: [
      {
        tenure: 6,
        monthlyAmount: 20000,
        interestRate: 0,
        cashback: 1500,
      },
      {
        tenure: 9,
        monthlyAmount: 13333,
        interestRate: 0,
        cashback: 2000,
      },
      {
        tenure: 12,
        monthlyAmount: 10000,
        interestRate: 0,
        cashback: 2500,
      },
    ],
  },

  {
    name: "Google Pixel 10 Pro",
    slug: "google-pixel-10-pro",
    brand: "Google",
    description:
      "Google Pixel 10 Pro featuring Google's latest AI-powered experience, premium display and advanced camera technology.",

    image:
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80",

    variants: [
      {
        color: "Obsidian",
        storage: "128 GB",
        price: 99999,
        mrp: 109999,
        image:
          "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80",
      },
      {
        color: "Porcelain",
        storage: "128 GB",
        price: 99999,
        mrp: 109999,
        image:
          "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80",
      },
      {
        color: "Obsidian",
        storage: "256 GB",
        price: 109999,
        mrp: 119999,
        image:
          "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80",
      },
    ],

    emiPlans: [
      {
        tenure: 6,
        monthlyAmount: 16667,
        interestRate: 0,
        cashback: 1000,
      },
      {
        tenure: 9,
        monthlyAmount: 11111,
        interestRate: 0,
        cashback: 1500,
      },
      {
        tenure: 12,
        monthlyAmount: 8333,
        interestRate: 0,
        cashback: 2000,
      },
    ],
  },
];

const seedProducts = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is not defined in .env");
    }

    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");

    await Product.deleteMany();

    await Product.insertMany(products);

    console.log("Products seeded successfully");

    process.exit(0);
  } catch (error) {
    console.error("Seed error:", error);
    process.exit(1);
  }
};

seedProducts();