export const handleExploreLanguages = async(req, res) => {
    const {language} = req.params;
    try {
        
        const explore = await fetch(`https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc&per_page=10`, {
            headers: {
                authorization: `token ${process.env.GITHUB_API_KEY}`
            }
        })

        const data = await explore.json();
        console.log(data.items);

        res.status(200).json({ repos: data.items })

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error.message });
    }
}