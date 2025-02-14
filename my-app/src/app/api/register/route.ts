import { errorHandler } from "@/app/db/helpers/errorHandler";
import UserModel from "@/app/db/models/UserModel";
import { CustomErrorType } from "@/app/types";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    await UserModel.create(body);
    return Response.json({ message: "Succes register user" });
  } catch (error) {
    console.log(error);
    
    return errorHandler(error as CustomErrorType);
  }
}
