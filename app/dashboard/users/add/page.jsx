import React from "react";
import styles from "@/app/ui/dashboard/users/addUser/addUser.module.css";
import { addUser } from "@/app/lib/action";

const AddUserPage = () => {
  return (
    <div className={styles.container}>
      <form action={addUser} className={styles.form}>
        <input
          type="text"
          name="username"
          placeholder="User Name"
          required
          autoFocus
        />
        <input type="email" name="email" placeholder="Email" required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <input type="phone" name="phone" placeholder="Phone" required />
        <select name="isAdmin" id="isAdmin">
          <option value={false}>Is Admin</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select name="isActive" id="isActive">
          <option value={true}>Is Active</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <textarea
          name="address"
          id="address"
          rows="10"
          placeholder="Address"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddUserPage;
