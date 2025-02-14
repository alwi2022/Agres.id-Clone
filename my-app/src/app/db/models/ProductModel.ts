import { database } from "../config/mongodb";

class ProductModel {
  static collection() {
    return database.collection("products");
  }

  static async getAll({ page, search }: { page: string; search: string }) {
    const limit = 5;
    const offset = limit * (Number(page) - 1);
    const queries = search.split(" ").map((el) => {
      return {
        name: {
          $regex: el,
          $options: "i",
        },
      };
    });
    const products = this.collection()
      .find({
        $and: queries,
      })
      .skip(offset)
      .limit(limit)
      .toArray();
    return products;
  }

  static async getBySlug(slug: string) {
    const product = await this.collection().findOne({ slug });
    if (!product) throw { message: "product not found", status: 404 };
    return product;
  }
}

export default ProductModel;
