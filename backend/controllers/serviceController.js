import Model from "../models/service.js";
import fs from "fs";
class Controller {
  // callback functions used in service routes
  //get all the services
  getAll(req, res, next) {
    Model.find({}, (err, response) => {
      if (err) return next(err);
      res.status(200).send({ success: true, response });
    });
  }

  //get an service by id
  get(req, res, next) {
    let { id } = req.params;
    Model.findOne({ _id: id }, (err, response) => {
      if (err) return next(err);
      res.status(200).send({ success: true, response });
    });
  }

  // get (req, res, next) {
  //   try {
  //     const service = Model.findById(req.params.id);
  //     res.status(200).send({ success: true,
  //   }catch (err) {

  //   }
  // }

  // creating new service
  async post(req, res, next) {
    try {
      let body = req.body;
      let newService = new Model(body);
      newService.save((error, response) => {
        if (error) return res.status(500).send(error);
        res
          .status(200)
          .send({ success: true, message: "Service Added Successfully" });
      });
    } catch (err) {
      return res.status(500).send(err);
    }
  }

  //update an service by _id
  updateService(req, res, next) {
    const id = req.params.id;
    const newService = req.body;
    Model.findByIdAndUpdate(id, newService, {
      new: true,
      runValidators: true,
    })
      .then((update) => {
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

  put(req, res, next) {
    let body = req.body;
    let data = {};
    let id = req.params.id;
    if ("treatmentName" in body) data.treatmentName = body.treatmentName;
    if ("description" in body) data.description = body.description;
    data.image = req.image;
    try {
      Model.findOne({ _id: id }, (err, service) => {
        if (err) return next(err);
        fs.unlink(service.image, (err) => {
          service.image = req.image;
          service.save((err, updateService) => {
            if (err) return next(err);
            res.status(201).send({ success: true, message: updateService });
          });
        });
      });
    } catch (err) {
      res.status(err.status).send(err.message);
    }
  }

  //delete an service by id
  delete(req, res, next) {
    const { id } = req.params;

    Model.findOneAndDelete({ _id: id })
      .then((response) => {
        if (!response) {
          res.status(404).send({ status: 404, message: "Not Found" });
        } else {
          fs.unlinkSync(response.image);
          res
            .status(200)
            .send({ status: 200, message: "deleted successfully" });
        }
      })
      .catch((error) => {
        res.status(500).send({ status: 500, message: error.message });
      });
  }
}

const controller = new Controller();

export default controller;
