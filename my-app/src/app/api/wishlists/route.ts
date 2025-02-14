import { errorHandler } from "@/app/db/helpers/errorHandler";
import WishlistModel from "@/app/db/models/WishlistModel";
import { CustomErrorType } from "@/app/types";

export async function GET(request: Request) {
  try {
    console.log(request.headers,'ini request');
    
    const userId = request.headers.get("x-user-id");
    console.log("userId in API route:", userId);
    
    
    if (!userId) throw { message: "User not found", status: 404 };

    const wishlists = await WishlistModel.find(userId);
    return Response.json(wishlists);
  } catch (error) {
    return errorHandler(error as CustomErrorType);
  }
}

export async function POST(request: Request) {
  try {
    // const contentType = request.headers.get("Content-Type");
    // if (contentType !== "application/json") {
    //   throw { message: "Content-Type must be application/json", status: 400 };
    // }

    const body = await request.json();
    const productId = body.productId;
    const userId = request.headers.get("x-user-id");

    if (!userId) throw { message: "User not found", status: 404 };
    if (!productId) throw { message: "Product ID is required", status: 400 };

    const isExist = await WishlistModel.isExist(userId, productId);
    if (isExist) {
      return Response.json({
        message: "Product is already in your wishlist",
        alreadyExists: true, // Tambahkan flag
      });
    }

    await WishlistModel.create({ userId, productId });
    return Response.json({ message: "Success add new wishlist" });
  } catch (error) {
    return errorHandler(error as CustomErrorType);
  }
}




export async function DELETE(request: Request) {
  try {
    const body = await request.json();
    const wishlistId = body.wishlistId;
    const userId = request.headers.get("x-user-id");

    if (!wishlistId) throw { message: "Wishlist ID is required", status: 400 };
    if (!userId) throw { message: "User not found", status: 404 };

    await WishlistModel.delete(wishlistId, userId);
    return Response.json({ message: "Wishlist item deleted successfully" });
  } catch (error) {
    return errorHandler(error as CustomErrorType);
  }
}