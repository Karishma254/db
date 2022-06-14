const bookidgen = require("bookidgen");
const config = require("../source/config");
const bottleSchema = require("../Schema/bottleSchema")
// const model = require("../model/bottle")


// Post

const addBottel = async (req, res) => {
   let { BottelName,BottelPrice } = req.body;
  try {
    if (!BottelName || !BottelPrice) {
       res.json({ message: "Enter all data", status: false })
    } else {
      let BottleId = bookidgen("BottleId", 14522, 199585);
      const Plans = await bottleSchema.create({
        BottelName,
        BottelPrice,
      });
      const user = Plans.save()
      if (!Plans) {
        res.json({
          message: "SOME ISSUE'S  ARE THERE WHILE CREATING DATA",
          status: false,
        });
      } else {
        res.json({
          message: "DATA CREATED SUCCESSFULLY",
          data: Plans,
          status: true,
        });
      }
    }
  } catch (error) {
    res.status(500).send({
      message: error.message,
      status: false,
    });
  }
};

module.exports = { addBottel };
