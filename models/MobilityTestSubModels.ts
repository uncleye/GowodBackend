import { Document, Schema } from "mongoose"

export interface IAnckleScore {
    street?: string;
    zipcode: string;
  }

export  const AnckleScoreSchema = new Schema(
    {
      street: String,
      zipcode: {
        type: String,
        required: true,
      }
    }, 
    { _id: false }
  )
