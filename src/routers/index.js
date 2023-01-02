// const express = require("express")
// const Post = require("../models/Post")
// const router = express.Router()

// router.get("/posts", async (req, res) => {
// 	const posts = await Post.find()
// 	res.send(posts)
// })
// router.post("/posts", async (req, res) => {
// 	const post = new Post({
// 		title: req.body.title,
// 		Description: req.body.Description,
// 	})
// 	await post.save()
// 	res.send(post)
// })
// router.get("/posts/:id", async (req, res) => {
// 	const post = await Post.findOne({ _id: req.params.id })
// 	res.send(post)
// })
// router.get("/posts/:id", async (req, res) => {
// 	console.log('here')
// 	try {
// 		const post = await Post.findById(req.params.id)
// 		if (post) {
// 			res.send(post)
// 		} else {
// 			res.send({ error: "oooh nooo Post doesn't exist!" })
// 		}np
// 	} catch {
// 		res.status(404)

// 	}
// })
// router.patch("/posts/:id", async (req, res) => {
// 	try {
// 		const post = await Post.findOne({ _id: req.params.id })

// 		if (req.body.title) {

// 			post.title = req.body.title
// 		}

// 		if (req.body.Description) {
// 			post.Description = req.body.Description
// 		}

// 		await post.save()
// 		res.send(post)
// 	} catch {
// 		res.status(404)
// 		res.send({ check: "Post doesn't exist!" })
// 	}
// })
// router.delete("/posts/:id", async (req, res) => {
// 	try {
// 		await Post.deleteOne({ _id: req.params.id })
// 		res.status(204).send()
// 	} catch {
// 		res.status(404)
// 		res.send({ check: "try exist one!!!" })
// 	}
// })

// module.exports = router

import {Router} from "express";
import userRouter from "./userRouter"
import blogRouter from "./blogRouter"
import messageRouter from "./messageRouter"

const router = Router()
router.use('/user',userRouter);
router.use('/post',blogRouter);
router.use('/message',messageRouter);

export default router;