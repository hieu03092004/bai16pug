const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 3000;
app.set("views", "./views");
app.set("view engine", "pug");
app.use(express.static("public"));

mongoose.connect("mongodb://127.0.0.1:27017/product-test");

const Product = mongoose.model("Product", {
  title: String,
  price: Number,
  thumbnail: String,
});

app.get("/", (req, res) => {
  res.render("index.pug", {
    title: "Trang chủ",
    message: "Xin chào các bạn test",
  });
});
app.get("/Contact", (req, res) => {
  res.render("Contact.pug", {
    title: "Trang lien he",
    message: "Xin chào các bạn test",
  });
});
app.get("/products", async (req, res) => {
  const products = await Product.find({});
  console.log(products);
  res.render("products.pug", {
    title: "Trang danh sach san pham",
    products: products,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
