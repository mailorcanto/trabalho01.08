import {Request, Response} from "express";

import db from '../config/database';

async function getUser(req: Request, res: Response) {
    db.connection.query('SELECT * FROM clients',(err, results)=>{ 
        if(err) {
            res.json({ success: false})
        
        }else{ 
            res.json({success: true, message:'Listagem de usuários realizada com sucesso',result: results});
        }
    }); 
}

async function postUser(req: Request, res: Response) {
    const querysql = 'INSERT INTO clients(DS_NAME,NM_CELLPHONE,DS_STATUS)VALUES (?,?,?);';
    const params = Array(
        req.body.DS_NAME,
        req.body.NM_CELLPHONE,
        req.body.DS_STATUS
    );

    db.connection.query(querysql,params, (err, results)=>{ 
        if (err) {
            res.json({ success: false})
        } else {
            res.json({success: true, message:'Cadastro de usuário realizado com sucesso',result: results});
        }
    });
}

async function putUser(req: Request, res: Response) {
    const idUser = req.params.id;
    const querysql = "UPDATE clients SET DS_NAME=?,NM_CELLPHONE=?,DS_STATUS=? WHERE ID_CLIENT=?;";
    const params = Array(
        req.body.DS_NAME,
        req.body.NM_CELLPHONE,
        req.body.DS_STATUS,
        idUser
    );
    db.connection.query(querysql,params, (err, results)=>{
        if (err) {
            res.json({ success: false})
        } else {
            res.json({success: true, message:'Usuário atualizado com sucesso',result: results});
        }
    });
}

async function deleteUser(req: Request, res: Response) {
    const idUser = req.params.id; //acessando parâmetro passado para o insomnia no lugar de id
    const queryString = "DELETE FROM clients WHERE ID_CLIENT=?";
   
    db.connection.query(queryString,req.params.id, (err, results)=>{
        if (err) {
            res.json({ success: false})
        } else {
            res.json({success: true, message:'Usuário deletado com sucesso',result: results});
        }
    });
}

export default {
    getUser,
    postUser,
    putUser,
    deleteUser
}