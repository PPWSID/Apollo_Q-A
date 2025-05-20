require('../Config/config');
const testController = require('../Controller/index');

const router = express.Router();

router.get('/', testController.testResponse);


module.exports = router;
