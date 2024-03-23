const {Router} = require("express");
const controllers = require("../controllers");
const router = Router();

router.get('/', (req, res) => res.send('Welcome'))

router.post("/akatsukis", controllers.createAkatsuki);
router.get("/akatsukis", controllers.getAllAkatsuki);

module.exports = router