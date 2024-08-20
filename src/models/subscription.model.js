import mongoose,{Schema, model, Types} from 'mongoose'

const subscriptionSchema = new Schema({
    subscriber : {
        type: Types.ObjectId,
        ref: "User"
    },
    channel: {
        type: Types.ObjectId,
        ref: "User"
    }
},
{
    timestamps: true
}
)

export const Subscription = model("Subscription", subscriptionSchema)