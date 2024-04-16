import cliente from "../models/Cliente.js"; //Importará o modelo do Cliente e a coleção dele lá do mongoDB
class ClienteController {

    static async listarClientePorId(req,res){
    try{
        const id = req.params.id //Pega o ID do link
        const clienteEncontrado = await cliente.findByID(id); //Usa o método do mongoose para procurar o livro usando o id
        res.status(200).json(clienteEncontrado) //retorna o cliente encontrado
    } catch(erro){
    res.status(500).send({message:`${erro.message} - falha na requisição do cliente`})

//Mensagem de erro caso não encontre o livro
    }
    }

    static async cadastrarCliente(req,res){
        try{
        const novoCliente = await cliente.create(req.body) //Pegando as informações do body da requisição para gerar um novo livro usando o livro.create
        res.status(201).json({message:"Cliente criado com sucesso", cliente : novoCliente})
        }catch(erro){
        res.status(500).json({message:`${erro.message} - Falha ao cadastrar o Cliente`})
        }
    }

    static async atualizarCliente(req,res){
        try{
        const id = req.params.id
        await cliente.findByIdAndUpdate(id,req.body)
        res.status(200).json({message:"Cliente atualizado"})
        }catch(erro){
        res.status(500).json({message: `${erro.message} - Erro ao atualizar o cliente` })
        }
    }
    static async excluirCliente (req, res) {
        try {
        const id = req.params.id;
        await cliente.findByIdAndDelete(id);
        res.status(200).json({ message: "cliente excluído com sucesso" });
        } catch (erro) {
        res.status(500).json({ message: `${erro.message} - falha na exclusão` });
        }
    }
};


export default ClienteController;