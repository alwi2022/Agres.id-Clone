import { comparePassword } from "@/app/db/helpers/bcrypt";
import { errorHandler } from "@/app/db/helpers/errorHandler";
import { signToken } from "@/app/db/helpers/jwt";
import UserModel from "@/app/db/models/UserModel";
import { CustomErrorType } from "@/app/types";
import { cookies } from "next/headers";

// const LoginSchema = UserSchema.pick({ email: true, password: true });

export async function POST(request: Request) {
  try {
    const body: { email: string; password: string } = await request.json();

    if (!body.email) {
      throw { message: "Email is required", status: 400 };
    }

    if (!body.password) {
      throw { message: "password is required", status: 400 };
    }

    const user = await UserModel.findOne(body.email);

    if (!user) {
      throw { message: "Invalid Email or Password", status: 401 };
    }

    const compare = comparePassword(body.password, user.password);

    if (!compare) {
      throw { message: "Invalid Email or Password", status: 401 };
    }

    const token = signToken({
      email: user.email,
      _id: user._id.toString(),
    });

    const cookieStore = await cookies();
    cookieStore.set("Authorization", `Bearer ${token}`);

    return Response.json({
      message: "ok",
      access_token: token,
    });
  } catch (error) {
    return errorHandler(error as CustomErrorType);
  }
}
