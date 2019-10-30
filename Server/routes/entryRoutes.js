import express from 'express';
import Entrycontroller from '../controllers/entryControllers';
import entryValidator from '../middleware/entryValidator';
import authorization from '../middleware/authorization';


const router = express.Router();

const entry = new Entrycontroller();

router.post('/entries', authorization, entryValidator, entry.addEntry);
router.patch('/entries/:entryId', authorization, entryValidator, entry.editEntry);
router.get('/entries', authorization, entry.getAllEntry);
router.get('/entries/:entryId', authorization, entry.editEntry);
router.delete('/entries/:entryId', authorization, entry.deleteSpecificEntry);



export default router;