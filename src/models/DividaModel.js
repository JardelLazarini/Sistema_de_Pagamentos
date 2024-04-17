import mongoose from 'mongoose';

const DividaSchema = new mongoose.Schema({
    id_cliente: { type: mongoose.Schema.Types.ObjectId, required: true },
    valorRestante: { type: Number, required: true },
    valorDividaTotal: { type: Number, required: true },
    dataDivida: { type: Date, default: Date.now },
    prazoPagamento: { type: Date },
    status: { type: String, default: 'Pendente' }
});

const Divida = mongoose.model('Divida', DividaSchema);

export default Divida;
