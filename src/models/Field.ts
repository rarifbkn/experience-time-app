import { Schema, model, models } from "mongoose";

const FieldSchema = new Schema(
    {
        name:{
            type: String,
            required: [true, 'Name is required'],
            trim:true,
            maxLength:20,
            minLength:1,
        },
    }
)


const Field =  models.Field || model('Field',FieldSchema);
export default Field;