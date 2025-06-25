import mongoose from "mongoose";

const showSchema = new mongoose.Schema(
  {
    movie: {type: String, required: true, ref: 'Movie'},
    showDateTime: {type: String, required: true},
    showPrice: {type: String, required: true},
    occupiedSeats: {type:Object, default:{}}
  }, { minimize: false}
)

const Show = mongoose.model("Show", showSchema);

export default Show;