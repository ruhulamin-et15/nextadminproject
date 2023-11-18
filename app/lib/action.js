import { Product, User } from "./models";
import { connectToDB } from "./utils";

//add user post
export const addUser = async (formData) => {
  "use server";
  const { username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    connectToDB();
    const newUser = new User({
      username,
      email,
      password,
      phone,
      address,
      isAdmin,
      isActive,
    });
    await newUser.save();
  } catch (error) {
    console.log(error);
    throw new Error("user submit failed");
  }
};

//add product post
export const addProduct = async (formData) => {
  "use server";
  const { title, cat, price, stock, color, size, desc } =
    Object.fromEntries(formData);

  try {
    connectToDB();
    const newProduct = new Product({
      title,
      cat,
      price,
      stock,
      color,
      size,
      desc,
    });
    await newProduct.save();
  } catch (error) {
    console.log(error);
    throw new Error("product submit failed");
  }
};
