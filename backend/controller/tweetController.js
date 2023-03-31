const Post = require('../models/Post');

module.exports= {
     async store(req,res){

        const {tweet, email, userHandle,isLiked } = req.body;
        console.log(req.body);
        const post =await Post.create({
            tweet,
            email,
            userHandle,
            isLiked
        });

        post.save();
        console.log("Db created");
       
        return res.json(post);
    },

    async display(req, res){

        const userInp=req.params.userHandle;
        const post = await Post.find({userHandle : userInp},function(err, result){
            if(err)
            {
            console.log(err);
            }
            if(!result.length)
            {
                console.log("data not found");
            }
            else
            { 
                console.log("Tweet Found");
            }
        }).clone();

       
        return res.json(post);
    }
};