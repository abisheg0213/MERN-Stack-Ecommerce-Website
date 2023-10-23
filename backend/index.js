const express=require('express')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
const cors=require('cors')

app=express()
app.use(bodyParser.json());
app.use(cors())
app.listen(5000)
let pid=5001
let uid=2001
mongoose.connect('mongodb://127.0.0.1:27017/ecommerce')
product_schema=mongoose.Schema({
    prodname:String,
    prodId:Number,
    prodimg:String,
    prod_old_price:Number,
    prod_new_price:Number,
    prod_desc:String,
    gender:String,
    popular:Boolean
})
user_schema=mongoose.Schema(
    {
        username:String,
        userId:String,
        on_going_orders:[],
        completed_orders:[]
    }
)
cart_schema=mongoose.Schema({
    userid:String,
    products:[]
})
order_schema=mongoose.Schema({
    userid:String,
    products:[],
    orderid:String,
    time:String,
    address:String,
    delivered:Boolean
})
order_model=mongoose.model('order',order_schema)
cart_model=mongoose.model('cart',cart_schema)
product_model=mongoose.model('product',product_schema)
user_model=mongoose.model('user',user_schema)
app.get('/products/popular',function(req,res)
{
    console.log("****")
    product_model.find({popular:true}).then((data)=>
    {
        res.send(data)
    })
})
app.get('/products/men',function(req,res)
{
    product_model.find({gender:'men'}).then((data)=>
    {
        res.send(data)
    })
})
app.get('/products/women',function(req,res)
{
    product_model.find({gender:'women'}).then((data)=>
    {
        res.send(data)
    })
})
app.get('/product/:prod_id',function(req,res)
{
    console.log(req.params.prod_id)
    product_model.find({prodId:Number(req.params.prod_id)}).then((data)=>
    {
        console.log(data)
        res.send(data)
    })
})
app.get('/adddata',function(req,res)
{
    data1=new product_model({
        prodname:'Biscuit Color Indian Sherwani',
        prodId:5006,
        prodimg:"https://manyavar.scene7.com/is/image/manyavar/I03_0R5A4165%20copy_20-10-2021-20-04:650x900",
        prod_old_price:725,
        prod_new_price:550,
        prod_desc:"Biscuit Color Indian Sherwani",
        gender:'men',
        popular:false
    })
    data2=new product_model({
        prodname:'A Elegent Pink Legnenga',
        prodId:5007,
        prodimg:"https://manyavar.scene7.com/is/image/manyavar/M297015-LIGHT%20PINK.20841_11-05-2023-19-59:650x900",
        prod_old_price:900,
        prod_new_price:825,
        prod_desc:"A Elegent Pink Legnenga",
        gender:'women',
        popular:true
    })
   
    data1.save()
    data2.save()

    res.send("data added")
})
app.post('/create_user',function(req,res)
{
    console.log(req.body)
    data1=new user_model({
        
        username:req.body.username,
        userId:req.body.userid,
        on_going_orders:[],
        completed_orders:[]
    })
    cdata=new cart_model({
        userid:req.body.userid,
        products:[]
    })
    console.log(cdata)
    data1.save()
    cdata.save()
    uid=uid+1
})
app.post('/addtocart',function(req,res)
{
    console.log("**************")
    console.log(req.body)
    cart_model.find({userid:req.body.user_id}).then((data)=>
    {
        console.log(data)
       let li= data[0].products
       li.push(req.body.prodid)
       console.log(li)
       cart_model.updateOne({userid:req.body.user_id},{products:li}).then((res)=>
       {
        console.log(res)
       })
    })
})
app.get('/viewcart/:userid',function(req,res)
{
    console.log(req.params.userid)
    cart_model.find({userid:req.params.userid}).then((data)=>
    {
        console.log(data)
       let li= data[0].products
       product_model.find({prodId:{$in:li} }).then((data)=>
       {
        console.log(data)
        res.send(data)
       })
    })
})
app.post('/create_order',function(req,res)
{
    console.log(req.body)
    data1=new order_model({userid:req.body.userid,
    products:req.body.prods,
    orderid:req.body.order_id,
    time:req.body.timestamp,
    address:req.body.add,
    delivered:false})
    data1.save()
    console.log(req.body.userid)
       cart_model.updateOne({userid:req.body.userid},{products:[]}).then((res)=>
       {
        console.log("&&&")
        console.log(res)
       })
       user_model.find({userId:req.body.userid}).then((data)=>
    {
        console.log(data)
       let li= data[0].on_going_orders
       li.push(req.body.order_id)
       user_model.updateOne({userId:req.body.userid},{on_going_orders:li}).then((res)=>
       {
        console.log(res)
       })
       
    })
})
app.get('/on-orders/:userid',function(req,res)
{
    console.log(req.params.userid)
    user_model.find({userId:req.params.userid}).then((data)=>
    {
        console.log(data)
       let li= data[0].on_going_orders
       order_model.find({$and:[{orderid:{$in:li}} ,{delivered:false}]}).then((data)=>
       {
        console.log(data)
        res.send(data)
       })
    })
})
app.post("/order_delivered",function(req,res)
{
    console.log(req.body)
    order_model.updateOne({orderid:req.body.order_id},{delivered:true}).then((data)=>
    {
        res.send("successful")
    })
})
app.get("/order/:orderid",function(req,res)
{
    console.log(req.params.orderid)
    order_model.find({orderid:req.params.orderid}).then((data)=>
    {
        console.log(data)
        res.send(data)
    })
})