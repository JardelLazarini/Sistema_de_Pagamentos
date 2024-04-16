import pagamento from "../models/Pagamento.js"; 
class PagamentoController {
        static async listarPagamentoPorId(req,res){
            try{
            const id = req.params.id 
            const PagamentoEncontrado = await pagamento.findByID(id);
            
            res.status(200).json(PagamentoEncontrado) 
            } catch(erro){
            res.status(500).send({message:`${erro.message} - falha na requisição do pagamento`})
            
            }
        }
        static async cadastrarPagamentos(req,res){
            try{
            const novoPagamento = await pagamento.create(req.body) 
            res.status(201).json({message:"Pagamento criado com sucesso", pagamento : novoPagamento})
            }catch(erro){
            res.status(500).json({message:`${erro.message} - Falha ao cadastrar o Pagamento`})
            }
        }

        static async atualizarPagamento(req,res){
            try{
            const id = req.params.id
            await pagamento.findByIdAndUpdate(id,req.body)
            res.status(200).json({message:"Pagamento atualizado"})
            }catch(erro){
            res.status(500).json({message: `${erro.message} - Erro ao atualizar o pagamento` })
            }
        }

        static async excluirPagamento (req, res) {
            try {
            const id = req.params.id;
            await pagamento.findByIdAndDelete(id);
            res.status(200).json({ message: "pagamento excluído com sucesso" });
            } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na exclusão` });
            }
        }
};
export default PagamentoController;