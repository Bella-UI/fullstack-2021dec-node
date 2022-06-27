import uid from "./helpers";

interface Product{
   id:string;
   name:string;
}
let products: Array<Product> = []

export function getProducts(req, res) {
   try {
      res.send({products});
   } catch (error) {
      console.error(error)
      res.send({error:error.message})
   }
}

export function addProduct(req, res){
    try {
      const {name} = req.body;
      if(!name) throw new Error('Name of product is require');
      const id = uid();
      if(!id) throw new Error('Id is missing');
      const product1 = {id, name}
      products.push(product1);
      res.send({products})
   } catch (error) {
      console.error(error)
      res.send({error:error.message})
   }
}

export function deleteProduct(req, res) {
   try {
      const {productId} = req.body;
      if(!productId) throw new Error("productId is missing");

      products = products.filter(product => product.id !== productId);

      res.send({products});
   } catch (error) {
      console.error(error);
      res.send({error:error.message});
   }
}