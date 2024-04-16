import divida from "../models/Divida.js"; 
class DividaController {
    static async listarDividaPorId(req,res){
        try{
        const id = req.params.id 
        const DividaEncontrada = await divida.findByID(id);
        
        res.status(200).json(DividaEncontrada) 
        } catch(erro){
        res.status(500).send({message:`${erro.message} - falha na requisição do divida`})
        
        }
    }

    static async cadastrarDivida(req,res){
        try{
        const novaDivida = await divida.create(req.body) 
        res.status(201).json({message:"Divida criada com sucesso", divida : novoDivida})
        }catch(erro){
        res.status(500).json({message:`${erro.message} - Falha ao cadastrar a Divida`})
        }
    }

    static async atualizarDividas(req,res){
        try{
        const id = req.params.id
        await divida.findByIdAndUpdate(id,req.body)
        res.status(200).json({message:"Divida atualizada"})
        }catch(erro){
        res.status(500).json({message: `${erro.message} - Erro ao atualizar a divida` })
        }
    }

    static async excluirDividas (req, res) {
        try {
        const id = req.params.id;
        await divida.findByIdAndDelete(id);
        res.status(200).json({ message: "divida excluída com sucesso" });
        } catch (erro) {
        res.status(500).json({ message: `${erro.message} - falha na exclusão` });
        }
    }
};
export default DividaController;