import mongoose from "mongoose"
const dividaSchema = new mongoose.Schema({
    id_dividas: { type: mongoose.Schema.Types.ObjectId },
    id_cliente: { type: mongoose.Schema.Types.ObjectId },
    valorRestante: { type: Number },
    valorDividaTotal: { type: Number },
    dataDivida: { type: Date },
    prazoPagamento: { type: Date },
    status: { type: String }
}, { versionKey: false });
const divida = mongoose.model("dividas", dividaSchema);
export default divida;