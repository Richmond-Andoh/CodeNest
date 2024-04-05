export const getUserProfileAndRepos = async(req, res) => {

    const { username } = req.params;

    try {
        // fetch user profile
        const userRes = await fetch(`https://api.github.com/users/${username}`, {
            headers: {
             authorization: `token ${process.env.GITHUB_API_KEY}`
            }
        });
        const userProfile = await userRes.json();

        // get all repo of user
        const userRepos = await fetch(userProfile?.repos_url, {
            headers: {
                authorization: `token ${process.env.GITHUB_API_KEY}`
            }
        });
        const repos = await userRepos.json();

        res.status(200).json({ userProfile, repos });
        
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
}