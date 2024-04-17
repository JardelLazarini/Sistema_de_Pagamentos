import mongoose from 'mongoose';

const ClienteSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    endereco: { type: String },
    telefone: { type: String },
    email: { type: String }
});

const Cliente = mongoose.model('Cliente', ClienteSchema);

export default Cliente;
