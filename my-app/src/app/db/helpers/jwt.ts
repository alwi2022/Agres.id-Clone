import jwt from "jsonwebtoken";
import * as jose from 'jose';
const SECRET = process.env.JWT_SECRET as string

// const secret = process.env.JWT_SECRET; 
// if (!secret) throw new Error("JWT_SECRET is not defined");

export const signToken = (payload: {email:string; _id:string}) => {
  return jwt.sign(payload, SECRET);
}

export const verifyToken = (token: string) => {
  return jwt.verify(token, SECRET);
}


export const verifywithJose = async<T>(token:string)=>{
  const secret = new TextEncoder().encode(SECRET)
  const {payload} = await jose.jwtVerify<T>(token,secret)
  console.log(payload,'ini paylaod');
  
  return payload
}
