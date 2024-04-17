import Cliente from '../models/ClienteModel.js';

const ClienteController = {
    listarClientes: async (req, res) => {
        try {
            const clientes = await Cliente.find();
            res.status(200).json(clientes);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    listarClientePorId: async (req, res) => {
        try {
            const id = req.params.id;
            const clienteEncontrado = await Cliente.findById(id);
            if (!clienteEncontrado) {
                return res.status(404).json({ message: "Cliente não encontrado" });
            }
            res.status(200).json(clienteEncontrado);
        } catch (error) {
            res.status(500).json({ message: `Falha na requisição do cliente: ${error.message}` });
        }
    },

    cadastrarCliente: async (req, res) => {
        try {
            if (!req.body) {
                return res.status(400).json({ message: "Corpo da requisição vazio" });
            }

            const novoCliente = await Cliente.create(req.body);
            res.status(201).json({ message: "Cliente criado com sucesso", cliente: novoCliente });
        } catch (error) {
            res.status(500).json({ message: `Falha ao cadastrar o cliente: ${error.message}` });
        }
    },

    atualizarCliente: async (req, res) => {
        try {
            const id = req.params.id;
            const clienteAtualizado = await Cliente.findByIdAndUpdate(id, req.body, { new: true });
            if (!clienteAtualizado) {
                return res.status(404).json({ message: "Cliente não encontrado" });
            }
            res.status(200).json({ message: "Cliente atualizado", cliente: clienteAtualizado });
        } catch (error) {
            res.status(500).json({ message: `Erro ao atualizar o cliente: ${error.message}` });
        }
    },

    excluirCliente: async (req, res) => {
        try {
            const id = req.params.id;
            const clienteExcluido = await Cliente.findByIdAndDelete(id);
            if (!clienteExcluido) {
                return res.status(404).json({ message: "Cliente não encontrado" });
            }
            res.status(200).json({ message: "Cliente excluído com sucesso" });
        } catch (error) {
            res.status(500).json({ message: `Falha na exclusão do cliente: ${error.message}` });
        }
    }
};

export default ClienteController;
