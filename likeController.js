//import model

const Post= require("../models/postModel");
const Like= require("../models/likeModel");


exports.likePost= async(req, res)=>{
    try{
        //fetch data from the body
        const{post ,user}=req.body;
        const like= new Like({
            post,user
        });

        const saveLike= await like.save();

        //find  the post by id and add the new comment to its comment array
        const updatePost = await Post.findByIdAndUpdate(post,{$push:{likes:saveLike._id}},{new:true})
        .populate("likes")//populate the comment array with the comment document
        .exec();



        res.json({
          post:updatePost,
        });
    }
    catch(error){
            return res.status(500).json({
                error:'Error while liking a post'
            });
    }
};

exports.unlikePost= async(req,res)=>{
    try{
        const {post,like}= req.body;
        //find and delete  the like
        const deleteLike= await Like.findOneAndDelete({post:post,_id:like});
        //update the post

        const updatedPost = await Post.findByIdAndUpdate(post,{$pull:{likes:deleteLike._id}},{new:true});
        res.json({
          post:updatedPost,
        });
    }
    catch(error){
         return res.status(500).json({
                error:'Error while UNliking a post'
            });

            
    }
}