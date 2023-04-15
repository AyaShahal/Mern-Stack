import Model from "../models/product.js";
import fs from "fs";
import image from "../middleware/image.js";
class Controller {
  getAll(req, res, next) {
    Model.find({}, (err, response) => {
      if (err) return next(err);
      res.status(200).send({ success: true, response });
    });
  }

  //get by id
  get(req, res, next) {
    let { id } = req.params;
    Model.findOne({ _id: id }, (err, response) => {
      if (err) return next(err);
      res.status(200).send({ success: true, response });
    });
  }

  // create
  // async post(req, res, next) {
  //   try {
  //     let body = req.body;
  //     let newproduct = new Model(body);
  //     newproduct.save((error, response) => {
  //       if (error) return res.status(500).send(error);
  //       res
  //         .status(200)
  //         .send({ success: true, message: "Product Added Succesfully" });
  //     });
  //   } catch (e) {
  //     console.error(e);
  //     return res.status(500).send({ error: e.message });
  //   }
  // }

  post(req, res, next) {
    let body = req.body;
    let product = new Model({
      name:req.body.name,
      price:req.body.price,
      description:req.body.description,
      image:req.file.path,
     } ); 
     product.save((err, response) => {
      if (err) return next(err);
      res.status(200).send(response);
    });
  }

 


  updateProduct(req, res, next) {
    const id = req.params.id;
    const newProduct = req.body;
    Model.findByIdAndUpdate(id, newProduct, {
      new: true,
      runValidators: true,
    })
      .then((update) => {console.log(update)
        if (update) {
          res.status(200).send(update);
        } else {
          res.status(404).send("Not Found");
        }
      })
      .catch((err) => {
        res.status(500).send(err.message);
      });
  }
  
  // update
  // async put(req, res, next) {
  //   let body = req.body;
  //   let data = {};
  //   let id = req.params.id;
  //   if ("name" in body) data.name = body.name;
  //   if ("price" in body) data.price = body.price;
  //   if ("description" in body) data.description = body.description;
  //   try {
  //     const product = await Model.findOne({ _id: id });
  //     if (!product) {
  //       res.status(404).send({ success: false, message: "Product not found" });
  //     } else {
  //       await fs.promises.unlink(product.image);
  //       product.image = req.image;
  //       const updateProduct = await product.save();
  //       res.status(201).send({ success: true, updateProduct });
  //     }
  //   } catch (err) {
  //     console.error(err);
  //     res.status(500).send({ success: false, message: "An error occurred" });
  //   }
  // }



}
// export async function updateProduct(req, res, next) {
//   let body = req.body;
//   let productId = req.params.id;

//   try {
//     let product = await Model.findById(productId);
//     if (!product) return res.status(404).send({ message: "Product not found." });

//     product.name = req.body.name || product.name;
//     product.price = req.body.price || product.price;
//     product.description = req.body.description || product.description;
//     if (req.file) product.image = req.file.path;

//     let updatedProduct = await product.save();
//     return res.status(200).send(updatedProduct);
//   } catch (error) {
//     return next(error);
//   }
// }

      
export async function deleteOne(req, res, next) {
  const { id } = req.params;

  Model.findOneAndDelete({ _id: id })
    .then((response) => {
      if (!response) {
        res.status(404).send({ status: 404, message: "Not Found" });
      } else {
        fs.unlinkSync(response.image);
        res.status(200).send({ status: 200, message: "deleted successfully" });
      }
    })
    .catch((error) => {
      res.status(500).send({ status: 500, message: error.message });
    });
}


const controller = new Controller();

export default controller;
