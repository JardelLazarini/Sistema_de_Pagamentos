import mongoose from "mongoose"
const pagamentoSchema = new mongoose.Schema({
    id_pagamento: { type: mongoose.Schema.Types.ObjectId },
    id_cliente: { type: mongoose.Schema.Types.ObjectId },
    valorPago: { type: Number },
    valorTotal: { type: Number },
    dataPagamento: { type: Date },
    metodoPagamento: { type: String },
}, { versionKey: false });
const pagamento = mongoose.model("pagamentos", pagamentoSchema);
export default pagamento;