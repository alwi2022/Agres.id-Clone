import { errorHandler } from "@/app/db/helpers/errorHandler";
import ProductModel from "@/app/db/models/ProductModel";
import { CustomErrorType } from "@/app/types";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const slug = (await params).slug;
    const product = await ProductModel.getBySlug(slug);

    return Response.json(product);
  } catch (error) {
    return errorHandler(error as CustomErrorType);
  }
}
