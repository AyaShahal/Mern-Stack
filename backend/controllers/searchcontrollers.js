import Model from "../models/product.js";
class Controller {
  get(req, res, next) {
    const query = req.query.q;
    Model.find(
      { name: { $regex: `.*${query}.*`, $options: "i" } },
      (err, products) => {
        if (err) {
          res.send(err);
        } else {
          res.send(products);
        }
      }
    );
  }
}
const controller = new Controller();
export default controller;
