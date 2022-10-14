var mysql = require('mysql2');
var mysqlConfig = require('./config.js');

var connection = mysql.createConnection(mysqlConfig);
connection.connect((err)=>{
    err ? console.log(err) : console.log('db conected')
})

module.exports ={
    dashBoar:(cb,value)=>{
        // authontification query that get the id wish is the foreign key
        var sql='select idresto from resto where restaurentName = ? AND restaurentPasword = ? '
        connection.query(sql,[value.name,value.password],(err,res)=>{
            cb(err,res)
        })
    },
    dashP:(cb,value)=>{
        // authontification query that get the id wish is the foreign key
        var sql='insert into orders(resto_idresto,whattoorder,price) values(?,?,?)'
        connection.query(sql,[value.id,value.whattoorder,value.price],(err,res)=>{
            cb(err,res)
        })
    },
    dashHome:(cb,value)=>{
        // authontification query that get the id wish is the foreign key
        var sql='select * from orders where resto_idresto=? '
        connection.query(sql,[value],(err,res)=>{
            cb(err,res)
        })
    },
    passorder:(cb,value)=>{
        var sql='insert into orderr(redyStatus,Ordered,resto_idresto) values(?,?,?) '
        connection.query(sql,[false,value.order,value.idRest],(err,res)=>{
            cb(err,res)
        })
    },
   
    updateDash:(cb,value)=>{
        var sql='update orders set whattoorder=? , price=? where idorders=?'
        connection.query(sql,[value.ord,value.price,value.id],(err,res)=>{
            cb(err,res)
        })
    },
    deleteOrd:(cb,value)=>{
        var sql='delete from orderr where client_idclient=?'
        connection.query(sql,[value.id],(err,res)=>{
            cb(err,res)
        })
    }
} 