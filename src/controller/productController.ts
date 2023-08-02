import {Request, Response} from "express";

import db from '../config/database';

async function getProduct(req: Request, res: Response) {
    db.connection.query('SELECT * FROM products',(err, results)=>{ 
        if(err) {
            res.json({ success: false})
        
        }else{ 
            res.json({success: true, message:'Listagem de produtos realizada com sucesso',result: results});
        }
    }); 
}

async function postProduct(req: Request, res: Response) {
    const querysql = 'INSERT INTO products(ds_name,ds_description,nm_value,ds_brand,ds_status)VALUES (?,?,?,?,?);';
    const params = Array(
        req.body.ds_name,
        req.body.ds_description,
        req.body.nm_value,
        req.body.ds_brand,
        req.body.ds_status
    );

    db.connection.query(querysql,params, (err, results)=>{ 
        if (err) {
            res.json({ success: false})
        } else {
            res.json({success: true, message:'Cadastro de produto realizado com sucesso',result: results});
        }
    });
}

async function putProduct(req: Request, res: Response) {
    const idProduct = req.params.id;
    const querysql = "UPDATE products SET ds_name=?,ds_description=?,nm_value=?,ds_brand=?,ds_status=? WHERE id_product=?;";
    const params = Array(
        req.body.ds_name,
        req.body.ds_description,
        req.body.nm_value,
        req.body.ds_brand,
        req.body.ds_status,
        idProduct
    );
    db.connection.query(querysql,params, (err, results)=>{
        if (err) {
            res.json({ success: false})
        } else {
            res.json({success: true, message:'Produto atualizado com sucesso',result: results});
        }
    });
}

async function deleteProduct(req: Request, res: Response) {
    const queryString = "DELETE FROM products WHERE id_product=?";
   
    db.connection.query(queryString,req.params.id, (err, results)=>{
        if (err) {
            res.json({ success: false})
        } else {
            res.json({success: true, message:'Produto deletado com sucesso',result: results});
        }
    });
}

export default {
    getProduct,
    postProduct,
    putProduct,
    deleteProduct
}