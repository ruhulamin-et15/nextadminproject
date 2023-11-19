"use server";
import { revalidatePath } from "next/cache";
import { Product, User } from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";

//add user
export const addUser = async (formData) => {
  const { username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    connectToDB();
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
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

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

//update user
export const updateUser = async (formData) => {
  const { id, username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    connectToDB();
    const updateFields = {
      username,
      email,
      password,
      phone,
      address,
      isAdmin,
      isActive,
    };
    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );
    await User.findByIdAndUpdate(id, updateFields);
  } catch (error) {
    console.log(error);
    throw new Error("user update failed");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

//delete user
export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await User.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error("user delete failed");
  }
  revalidatePath("/dashboard/users");
};

//add product
export const addProduct = async (formData) => {
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
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

//update product
export const updateProduct = async (formData) => {
  const { id, title, cat, price, stock, color, size, desc } =
    Object.fromEntries(formData);

  try {
    connectToDB();
    const updateFields = {
      title,
      cat,
      price,
      stock,
      color,
      size,
      desc,
    };
    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );
    await Product.findByIdAndUpdate(id, updateFields);
  } catch (error) {
    console.log(error);
    throw new Error("product update failed");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

//delete product
export const deleteProduct = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await Product.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error("product delete failed");
  }
  revalidatePath("/dashboard/products");
};
