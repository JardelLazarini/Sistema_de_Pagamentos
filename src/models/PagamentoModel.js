import mongoose from 'mongoose';

const PagamentoSchema = new mongoose.Schema({
    id_cliente: { type: mongoose.Schema.Types.ObjectId, required: true },
    valorPago: { type: Number, required: true },
    valorTotalDivida: { type: Number, required: true },
    dataPagamento: { type: Date, default: Date.now },
    metodoPagamento: { type: String }
});

const Pagamento = mongoose.model('Pagamento', PagamentoSchema);

export default Pagamento;
