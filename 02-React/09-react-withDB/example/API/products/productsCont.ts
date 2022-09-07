import { ProductModel } from "./productsModel";

export async function addProduct(req: any, res: any) {
  try {
    const { imgSrc, price, title, publish } = req.body;
console.log(imgSrc, price, title, publish)
    const product = new ProductModel({ imgSrc, price, title, publish });
    await product.save();
    res.send({ ok: true, meesage: "product added" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
}
