const { response } = require("..");
const Petrostation = require("../Models/Petrostation");

exports.createPetro = async (req, res) => {
  try {
    const createdPetro = await Petrostation.create(req.body);
    console.log(createdPetro);
    res.status(200).json(createdPetro);
  } catch (err) {
    res.status(404).json(err);
  }
};

exports.getAllPetroStation = async (req, resp) => {
  try {
    const getPetro = await Petrostation.find();
    resp.status(200).json(getPetro);
  } catch (err) {
    resp.statu(404).json(err);
  }
};

exports.getOnePetro = async (req, resp) => {
  const id = req.params.id;
  try {
    const getOne = await Petrostation.findById(id);
    console.log(getOne);
    resp.status(200).json(getOne);
  } catch (err) {
    resp.status(404).json(err);
  }
};

exports.updatePetro = async (req, resp) => {
  console.log(req.body);
  console.log(req.params.id);
  try {
    const id = req.params.id;
    console.log(req.body);
    const updatedPetro = await Petrostation.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    console.log(updatedPetro);
    resp.status(201).json({
      status: "success",
      petrostation: updatedPetro,
    });
  } catch (err) {
    resp.status(404).json({
      status: "failure",
      error: err,
    });
  }
};

exports.deletePetrostation = async (req, resp) => {
  try {
    const id = req.params.id;
    console.log(id);
    const deletedPetro = await Petrostation.findByIdAndDelete(id);
    console.log(deletedPetro);
    resp.status(204).json({
      status: "deleted",
      data: [],
    });
  } catch (err) {
    resp.status(404).json(err);
  }
};

exports.withinRadius = async (req, res) => {
  try {
    const { distance, latlng, unit } = req.params;
    const [lat, lng] = latlng.split(",");
    const radius = unit === "mi" ? distance / 3963.2 : distance / 6378.1;
    if (!lat || !lng) {
      res.status(404).json("something is wrong");
    }
    console.log(distance, latlng, unit);
    const petrostation = await Petrostation.find({
      location: { $geoWithin: { $centerSphere: [[lng, lat], radius] } },
    });
    console.log(petrostation);
    res.status(200).json({
      status: "success",
      results: petrostation.length,
      data: petrostation,
    });
  } catch (err) {
    res.status(400).json("error");
  }
};

exports.calcDistance = async (req, res) => {
  try {
    const { latlng, unit } = req.params;
    const [lat, lng] = latlng.split(",");

    const multiplier = unit === "mi" ? 0.000621371 : 0.001;
    if (!lat || !lng) {
      res.status(404).json("something is wrong");
    }
    const distances = await Petrostation.aggregate([
      {
        $geoNear: {
          near: {
            type: "Point",
            coordinates: [lng * 1, lat * 1],
          },
          distanceField: "distance",
          distanceMultiplier: multiplier,
        },
      },
      {
        $project: {
          distance: 1,
          name: 1,
        },
      },
    ]);
    res.status(200).json({
      status: "success",
      data: {
        data: distances,
      },
    });
  } catch (err) {
    res.status(400).json(err);
  }
};
