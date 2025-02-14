import { CustomErrorType } from "@/app/types";
import { ZodError } from "zod";

export const errorHandler = (err: CustomErrorType) => {
  let message = "Internal server error";
  let status = 500;

  if (err instanceof ZodError) {
    message = err.issues[0].message;
    status = 400;
  } else if (err.message) {
    message = err.message;
    status = (err as CustomErrorType).status;
  }

  return Response.json(
    { message },
    {
      status: status,
    }
  );
};
