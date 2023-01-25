const asynHandler = require("express-async-handler");
const Job = require("../models/entreprise.model");
const User = require("../models/user.model");
const share = asynHandler(async (req, res) => {
  try {
    const { nom_entreprise, categories, specialite, adresse, telephone } =
      req.body;

    if (!nom_entreprise || !categories || !specialite || !adresse || !telephone)
      return res.status(400).json({ msg: "Please fill in all fields." });
    const job = new Job({
      ...req.body,
      postedBy: req.user,
    });
    await job.save();

    res.status(200).json({ job, message: "success" });
  } catch (error) {
    res.status(500).json(error);
  }
});
const getAllJobs = asynHandler(async (req, res) => {
  try {
    let users = await Job.find();

    return res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
});
const apply = asynHandler(async (req, res) => {
  try {
    const { followId } = req.body;
    const id = req.user._id;
    const followUser = await Job.findById(followId); //followers[followId]
    const followingUser = await User.findById(id);

    if (!followUser.applyinthisjobs.includes(id)) {
      await followUser.updateOne({ $push: { applyinthisjobs: id } });
      await followingUser.updateOne({ $push: { numbre_apply: followId } });
      res.status(200).json({ message: "Apply!" });
    } else {
      res.status(403).json({ message: "you are already Apply this job" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = {
  share,
  getAllJobs,
  apply,
};
