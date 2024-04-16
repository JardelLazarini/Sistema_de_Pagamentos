import mongoose from "mongoose";

mongoose.connect("mongodb+srv://jardelcosta2019:<password>@cluster0.uia43h8.mongodb.net/SistemaDePagamentos?retryWrites=true&w=majority&appName=Cluster0");

async function conectaNaDatabase() {
    mongoose.connect("mongodb+srv://jardelcosta2019:<password>@cluster0.uia43h8.mongodb.net/SistemaDePagamentos?retryWrites=true&w=majority&appName=Cluster0");
    return mongoose.connection;
    }

export default conectaNaDatabase;