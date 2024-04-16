import mongoose from "mongoose"
const clienteSchema = new mongoose.Schema({
    id_cliente: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String, required: true },
    endereco: { type: String },
    telefone: { type: String },
    email: { type: String }
}, { versionKey: false });
const cliente = mongoose.model("clientes", clienteSchema);
export default cliente;