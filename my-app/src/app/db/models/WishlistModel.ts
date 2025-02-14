import { ObjectId } from "mongodb";
import { database } from "../config/mongodb";

class WishlistModel {
  static collection() {
    return database.collection("wishlists");
  }

  static async find(userId: string) {

    const wishlists = await this.collection()
      .aggregate([
        {
          $match: {
            userId: new ObjectId(userId),
          },
        },
        {
          $lookup: {
            from: "products",
            localField: "productId",
            foreignField: "_id",
            as: "productDetails",
          },
        },
        {
          $unwind: "$productDetails",
        },
      ])
      .toArray();

    return wishlists;
  }

  static async create({
    userId,
    productId,
  }: {
    userId: string;
    productId: string;
  }) {
    await this.collection().insertOne({
      userId: new ObjectId(userId),
      productId: new ObjectId(productId),
    });
    return "success add new wishlist";
  }

  static async isExist(userId: string, productId: string) {
    const existingWishlist = await this.collection().findOne({
      userId: new ObjectId(userId),
      productId: new ObjectId(productId),
    });
    return !!existingWishlist;
  }
  

  static async delete(wishlistId: string, userId: string) {
    await this.collection().deleteOne({ 
      _id: new ObjectId(wishlistId),
      userId: new ObjectId(userId)
    });
    return "Wishlist product deleted successfully";
  }


}

export default WishlistModel;
