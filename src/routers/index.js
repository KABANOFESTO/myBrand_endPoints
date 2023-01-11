
import {Router} from "express";
import userRouter from "./userRouter"
import blogRouter from "./blogRouter"
import messageRouter from "./messageRouter"
import docrouter from "../swagger/index.doc";

const router = Router()
router.use('/user',userRouter);
router.use('/post',blogRouter);
router.use('/message',messageRouter);

router.use('/docs',docrouter)

export default router;