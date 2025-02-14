
export type ProductType = {
  _id: string;
  id: number;
  name: string;
  slug: string;
  description: string;
  excerpt: string;
  price: number;
  tags: string[];
  thumbnail: string;
  images: string[];
  createdAt: string;
  search: string;
  updatedAt: string;
};

// export class CustomErrorType extends Error {
//   status: number;

//   constructor(message: string, status: number) {
//     super(message);
//     this.status = status;
//     this.name = this.constructor.name;
//   }

//   toResponse() {
//     return {
//       message: this.message,
//       status: this.status,
//     };
//   }
// }

export type CustomErrorType = {
  message: string;
  status: number;
};

export type whislistType = {
  _id: string;
  productId: string;
  userId: string;
  productDetails: ProductType;
};

export type newUserType = {
  name: string;
  username: string;
  email: string;
  password: string;
};
