import User from "../modules/User.js";

export const getUserProfileAndRepos = async(req, res) => {

    const { username } = req.params;

    try {
        // fetch user profile
        const userRes = await fetch(`https://api.github.com/users/${username}`, {
            headers: {
             authorization: `token ${process.env.GITHUB_API_SECRET}`
            }
        });
        const userProfile = await userRes.json();

        console.log(userProfile);
        
        // get all repo of user
        const userRepos = await fetch(userProfile?.repos_url, {
            headers: {
                authorization: `token ${process.env.GITHUB_API_SECRET}`
            }
        });
        const repos = await userRepos.json();

        res.status(200).json({ userProfile, repos });
        
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
}

export const likeProfile = async (req, res) => {
    try {
        
        const { username } = req.params;
        const user = await User.findById(req.user._id.toString());
        console.log(user);

        const userToLike = await User.findOne({ username });
        if (!user || !userToLike) return res.status(404).json('User not found');

        if(user.likedProfiles.includes(userToLike.username)) return res.status(404).json({ message: 'Already liked this profile' });
    //     let alreadyLiked = false;
    //     for (let i=0; i < user.likes.length; i++) {
    //        if (user.likes[i].equals(userToLike._id)) {
    //            alreadyLiked = true; 
    //            break;
    //        }
    //    };

        userToLike.likedBy.push({ username: user.username, avatarUrl: user.avatarUrl, likeDate: Date.now()});
        user.likedProfiles.push(userToLike.username);

        // await userToLike.save();
        // await user.save();

        await Promise.all([
            user.save(),
            userToLike.save()
        ]);

        res.status(201).json({ message: 'Successfully liked profile' })
    } catch (error) {
        return res.status(500).json({ Error: error.message})
    };
};

export const getLikes = async (req, res) => {
    try {
        const user = await User.findById(req.user._id.toString());
        return res.status(200).json({ likedBy: user.likedBy })
    } catch (error) {
        return res.status(500).json({ Error: error.message});
    };
};