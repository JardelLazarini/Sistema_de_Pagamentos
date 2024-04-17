import Pagamento from '../models/PagamentoModel.js';

const PagamentoController = {
    listarPagamentos: async (req, res) => {
        try {
            const pagamentos = await Pagamento.find();
            res.status(200).json(pagamentos);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    listarPagamentoPorId: async (req, res) => {
        try {
            const id = req.params.id;
            const pagamentoEncontrado = await Pagamento.findById(id);
            if (!pagamentoEncontrado) {
                return res.status(404).json({ message: "Pagamento não encontrado" });
            }
            res.status(200).json(pagamentoEncontrado);
        } catch (error) {
            res.status(500).json({ message: `Falha na requisição do pagamento: ${error.message}` });
        }
    },

    cadastrarPagamento: async (req, res) => {
        try {
            if (!req.body) {
                return res.status(400).json({ message: "Corpo da requisição vazio" });
            }

            const novoPagamento = await Pagamento.create(req.body);
            res.status(201).json({ message: "Pagamento cadastrado com sucesso", pagamento: novoPagamento });
        } catch (error) {
            res.status(500).json({ message: `Falha ao cadastrar o pagamento: ${error.message}` });
        }
    },

    atualizarPagamento: async (req, res) => {
        try {
            const id = req.params.id;
            const pagamentoAtualizado = await Pagamento.findByIdAndUpdate(id, req.body, { new: true });
            if (!pagamentoAtualizado) {
                return res.status(404).json({ message: "Pagamento não encontrado" });
            }
            res.status(200).json({ message: "Pagamento atualizado", pagamento: pagamentoAtualizado });
        } catch (error) {
            res.status(500).json({ message: `Erro ao atualizar o pagamento: ${error.message}` });
        }
    },

    excluirPagamento: async (req, res) => {
        try {
            const id = req.params.id;
            const pagamentoExcluido = await Pagamento.findByIdAndDelete(id);
            if (!pagamentoExcluido) {
                return res.status(404).json({ message: "Pagamento não encontrado" });
            }
            res.status(200).json({ message: "Pagamento excluído com sucesso" });
        } catch (error) {
            res.status(500).json({ message: `Falha na exclusão do pagamento: ${error.message}` });
        }
    }
};

export default PagamentoController;
