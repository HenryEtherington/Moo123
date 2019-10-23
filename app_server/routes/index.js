const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');


/* Locations pages */
router.get('/', ctrlLocations.home);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);
/* Other pages */
router.get('/information',ctrlOthers.information);
router.get('/register',ctrlOthers.register);
router.get('/login',ctrlOthers.login);
router.get('/about', ctrlOthers.about);
module.exports = router;
