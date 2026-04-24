const express= require("express");
const router= express.Router(); 


const{dummyRoute} = require("../controller/dummyRoute");
const {createComment}=require("../controller/commentController");
const {createPost,getAllPosts}=require("../controller/postController");
const {likePost, unlikePost}=require("../controller/likeController");


router.get("/dummyRoute",dummyRoute);
router.post("/comments/create",createComment);
router.post("/posts/create",createPost);
router.get("/posts",getAllPosts);
router.post("/like",likePost);
router.post("/like/unlike",unlikePost);


module.exports=router;