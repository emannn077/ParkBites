const { Cart } = require('../models')

const GetCarts = async (req, res)=>{
try {
  const carts = await Cart.find({} )
  res.status(200).send(carts)
}catch (error){
  res.status(500).send(error.message)
}
}
const CreateCart = async (req, res) => {
  try{
    const cart = await Cart.create(req.body)
    res.status(200).send(cart)
  }catch(error){
res.status(500).send(error.message)
  }
}

const UpdateCart = async (req, res) => {
  try{
    const cart = await Cart.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).send(cart)
  }catch(error){
  res.status(500).send(error.message)
  }
}

const DeleteCart = async (req, res) => {
  try{
    await Cart.findByIdAndDelete(req.params.id)
    res.status(200).send({msg: 'Cart Deleted'})
  }catch(error){
  res.status(500).send(error.message)
  }
}

module.exports = {
  GetCarts,
  CreateCart,
  UpdateCart,
  DeleteCart
}
