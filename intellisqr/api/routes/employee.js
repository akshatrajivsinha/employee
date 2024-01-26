const router = require("express").Router();
const Employee = require("../models/Employee");

router.post("/create", async (req, res) => {
  try {
    const saveuser = new Employee(req.body);
    const rest = await saveuser.save();
    res.status(201).json(rest);
  } catch (err) {
    res.status(500).json("error");
  }
});

router.get("/", async (req, res) => {
  try {
    const result = await Employee.find();
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/filtersalary", async (req, res) => {
  const { salary } = req.query;

  try {
    const result = await Employee.find({ salary });
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/filterfname", async (req, res) => {
  const { fname } = req.query;

  try {
    const result = await Employee.find({ fname });
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/filter", async (req, res) => {
  const { lname, fname, salary } = req.query;

  try {
    const result = await Employee.find({ lname, salary, fname });
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.delete("/:employee_id", async (req, res) => {
  try {
    await Employee.deleteOne({ employee_id: req.params.employee_id });
    res.status(200).json("employee deleted");
  } catch (err) {
    res.status(500).json("error");
  }
});

module.exports = router;
