//import model

const Post= require("../models/postModel");
const Comment= require("../models/commentModel");


exports.createComment= async(req, res)=>{
    try{
        //fetch data from the body
        const{body,user,post}=req.body;
        const comment= new Comment({
            post,user,body
        });

        const savedComment= await comment.save();

        //find  the post by id and add the new comment to its comment array
        const updatePost = await Post.findByIdAndUpdate(post,{$push:{comments:savedComment._id}},{new:true})
        .populate("comments")//poppulate the comment array with the comment document
        .exec();



        res.json({
          post:updatePost,
        });
    }
    catch(error){
            return res.status(500).json({
                error:'Error while creating a comment'
            });
    }
}