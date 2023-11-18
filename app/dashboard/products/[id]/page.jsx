import React from "react";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const SingleProductPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noproduct.jpg" alt="" fill />
        </div>
        IPhone
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <label>Title</label>
          <input type="text" name="title" placeholder="Iphone" />
          <label>Price</label>
          <input type="number" name="price" placeholder="4544" />
          <label>Stock</label>
          <input type="number" name="stock" />
          <label>Color</label>
          <input type="text" name="color" placeholder="Yellow" />
          <label>Size</label>
          <input type="text" name="size" placeholder="NA" />
          <label>Is Admin</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="phone">Phone</option>
            <option value="computer">Computer</option>
          </select>
          <label>Description</label>
          <textarea
            type="text"
            name="desc"
            id="desc"
            rows="10"
            placeholder="Description"
          />
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
