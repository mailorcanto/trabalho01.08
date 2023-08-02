import {Request, Response} from "express";

import db from '../config/database';

async function getClient(req: Request, res: Response) {
    db.connection.query('SELECT * FROM clients_ecommerce',(err, results)=>{ 
        if(err) {
            res.json({ success: false})
        
        }else{ 
            res.json({success: true, message:'Listagem de clientes realizada com sucesso',result: results});
        }
    }); 
}

async function postClient(req: Request, res: Response) {
    const querysql = 'INSERT INTO clients_ecommerce(ds_name,nm_cpf,fl_status)VALUES (?,?,?);';
    const params = Array(
        req.body.ds_name,
        req.body.nm_cpf,
        req.body.fl_status
    );

    db.connection.query(querysql,params, (err, results)=>{ 
        if (err) {
            res.json({ success: false})
        } else {
            res.json({success: true, message:'Cadastro de cliente realizado com sucesso',result: results});
        }
    });
}

async function putClient(req: Request, res: Response) {
    const idClient = req.params.id;
    const querysql = "UPDATE clients_ecommerce SET ds_name=?,nm_cpf=?,fl_status=? WHERE id_client=?;";
    const params = Array(
        req.body.ds_name,
        req.body.nm_cpf,
        req.body.fl_status,
        idClient
    );
    db.connection.query(querysql,params, (err, results)=>{
        if (err) {
            res.json({ success: false})
        } else {
            res.json({success: true, message:'Cliente atualizado com sucesso',result: results});
        }
    });
}

async function deleteClient(req: Request, res: Response) {
    const queryString = "DELETE FROM clients_ecommerce WHERE ID_CLIENT=?";
   
    db.connection.query(queryString,req.params.id, (err, results)=>{
        if (err) {
            res.json({ success: false})
        } else {
            res.json({success: true, message:'Cliente deletado com sucesso',result: results});
        }
    });
}

export default {
    getClient,
    postClient,
    putClient,
    deleteClient
}