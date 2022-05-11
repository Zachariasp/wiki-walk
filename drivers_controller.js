const Driver = require('../models/driver')


module.exports = {
  greeting(req, res) {
    res.send({hi: 'there'});
  },
  index(req, res, next) {
    const { lat, lng } = req.query;
    Driver.find({
        'geometry.coordinates': {
            $nearSphere: {
                $geometry: {
                    type: "Point",
                    coordinates: [lat, lng]
                },
                $maxDistance: 200000
              }
            }
    })
    .then(drivers => res.send(drivers))
    .catch(next);
  },
  create(req, res, next) {
    const driverProps = req.body;
    Driver.create(driverProps)
      .then(driver => res.send(driver))
      .catch(next);
  },
  edit(req, res, next) {
    const driverId = req.params.id;
    const driverProps = req.body;

    Driver.findByIdAndUpdate({ _id: driverId }, driverProps)
      .then(() => Driver.findById({ _id: driverId }))
      .then(driver => res.send(driver))
      .catch(next);
  },
  delete(req, res, next) {
    const driverId = req.params.id;

    Driver.findByIdAndRemove({ _id: driverId })
      .then(driver => res.status(204).send(driver))
      .catch(next);
  }
};
