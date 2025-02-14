import { z } from "zod";
import { database } from "../config/mongodb";
import { newUserType } from "@/app/types";
import { hashPass } from "../helpers/bcrypt";

export const UserSchema = z.object({
  name: z.string().nonempty({ message: "Name is required" }),
  username: z.string().nonempty({ message: "Username is required" }),
  email: z
    .string()
    .nonempty({ message: "Email is required" })
    .email({ message: "Invalid email format" }),
  password: z
    .string()
    .nonempty({ message: "Password is required" })
    .min(5, { message: "Password must contain at least 5 characters" }),
});

class UserModel {
  static collection() {
    return database.collection<newUserType>("users");
  }

  static async create(newUser: newUserType) {
    UserSchema.parse(newUser);

    const username = await this.collection().findOne({
      username: newUser.username,
    });
    if (username) throw { message: "username already exist", status: 400 };

    const user = await this.collection().findOne({
      email: newUser.email,
    });
    if (user) throw { message: "email already exist", status: 400 };

    console.log("Checking username:", newUser.username);
    console.log("Checking email:", newUser.email);

    console.log("User found:", user);
    // console.log("Username found:", username);

    newUser.password = hashPass(newUser.password);
    await this.collection().insertOne(newUser);
    return "Succes create User";
  }

  static async findOne(email: string) {
    return await this.collection().findOne({ email });
  }
}

export default UserModel;
