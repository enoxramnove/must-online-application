// This function will run when someone POSTs to /applications
exports.create = (req, res) => {
  const { name, email, phone } = req.body; // data sent from fronted form

  console.log("Received application data:", req.body);

  // For now, just sent back succes. Later we will save to D
  res.status(201).json({
    success: true,
    message: "Application created successfull",
    data: req.body
  });
};