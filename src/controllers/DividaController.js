import Divida from '../models/DividaModel.js';

const DividaController = {
    listarDividas: async (req, res) => {
        try {
            const dividas = await Divida.find();
            res.status(200).json(dividas);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    listarDividaPorId: async (req, res) => {
        try {
            const id = req.params.id;
            const dividaEncontrada = await Divida.findById(id);
            if (!dividaEncontrada) {
                return res.status(404).json({ message: "Dívida não encontrada" });
            }
            res.status(200).json(dividaEncontrada);
        } catch (error) {
            res.status(500).json({ message: `Falha na requisição da dívida: ${error.message}` });
        }
    },

    cadastrarDivida: async (req, res) => {
        try {
            if (!req.body) {
                return res.status(400).json({ message: "Corpo da requisição vazio" });
            }

            const novaDivida = await Divida.create(req.body);
            res.status(201).json({ message: "Dívida cadastrada com sucesso", divida: novaDivida });
        } catch (error) {
            res.status(500).json({ message: `Falha ao cadastrar a dívida: ${error.message}` });
        }
    },

    atualizarDivida: async (req, res) => {
        try {
            const id = req.params.id;
            const dividaAtualizada = await Divida.findByIdAndUpdate(id, req.body, { new: true });
            if (!dividaAtualizada) {
                return res.status(404).json({ message: "Dívida não encontrada" });
            }
            res.status(200).json({ message: "Dívida atualizada", divida: dividaAtualizada });
        } catch (error) {
            res.status(500).json({ message: `Erro ao atualizar a dívida: ${error.message}` });
        }
    },

    excluirDivida: async (req, res) => {
        try {
            const id = req.params.id;
            const dividaExcluida = await Divida.findByIdAndDelete(id);
            if (!dividaExcluida) {
                return res.status(404).json({ message: "Dívida não encontrada" });
            }
            res.status(200).json({ message: "Dívida excluída com sucesso" });
        } catch (error) {
            res.status(500).json({ message: `Falha na exclusão da dívida: ${error.message}` });
        }
    }
};

export default DividaController;
