import dotenv from "dotenv";
dotenv.config();

export const PORT = parseInt(process.env.PORT);
export const DB_URI = process.env.DB_URI;
export const STATUS = {
  BAD_REQUEST:400,
  SERVER_ERROR:500,
  UNAUTHORIZED:401,
  FORBIDDEN:403,
  NOT_FOUND:404,
  OK:200,
  CREATED:201,
  NO_CONTENT:204
};