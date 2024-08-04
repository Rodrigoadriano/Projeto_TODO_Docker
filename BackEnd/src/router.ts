import express from 'express';
const router = express.Router();

router.get('/test', (rq,res, s)=>{ res.send('{Testes ok!}')});

export default router;