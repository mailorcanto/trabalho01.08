import {Request, Response} from "express";

import db from '../config/database';

async function getCart(req: Request, res: Response) {
    db.connection.query('SELECT * FROM cart',(err, results)=>{ 
        if(err) {
            res.json({ success: false})
        
        }else{ 
            res.json({success: true, message:'Listagem de carrinhos realizada com sucesso',result: results});
        }
    }); 
}

async function postCart(req: Request, res: Response) {
    const querysql = 'INSERT INTO cart(id_client,id_product)VALUES (?,?);';
    const params = Array(
        req.body.id_client,
        req.body.id_product
    );

    db.connection.query(querysql,params, (err, results)=>{ 
        if (err) {
            res.json({ success: false})
        } else {
            res.json({success: true, message:'Cadastro de carrinho realizado com sucesso',result: results});
        }
    });
}

async function putCart(req: Request, res: Response) {
    const idCart = req.params.id;
    const querysql = "UPDATE cart SET id_client=?,id_product=? WHERE id_cart=?;";
    const params = Array(
        req.body.id_client,
        req.body.id_product,
        idCart
    );
    db.connection.query(querysql,params, (err, results)=>{
        if (err) {
            res.json({ success: false})
        } else {
            res.json({success: true, message:'Carrinho atualizado com sucesso',result: results});
        }
    });
}

async function deleteCart(req: Request, res: Response) {
    const queryString = "DELETE FROM cart WHERE id_cart=?";
   
    db.connection.query(queryString,req.params.id, (err, results)=>{
        if (err) {
            res.json({ success: false})
        } else {
            res.json({success: true, message:'Carrinho deletado com sucesso',result: results});
        }
    });
}

export default {
    getCart,
    postCart,
    putCart,
    deleteCart
}