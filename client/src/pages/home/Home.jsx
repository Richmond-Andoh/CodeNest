import { useState, useEffect, useCallback } from "react";
import Search from "../../components/search/Search";
import SortRepos from "../../components/sortRepo/SortRepos";
import ProfileDetails from "../../components/profileDetails/ProfileDetails";
import Repos from "../../components/repos/Repos";
import toast from "react-hot-toast";
//import Spinner from "../../components/spinner/Spinner";

const Home = () => {
  const [userProfile, setuserProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setloading] = useState(false);

  const [sortType, setsortType] = useState("forks")

  const getUserProfileAndRepos = useCallback(async() => {
    //set loading to true before making the request
    setloading(true);

    try {
      
      // fetch user profile
      const userRes = await fetch("https://docs.github.com/en/rest/users/richmond-andoh");
      const userProfile = await userRes.json();
      setuserProfile(userProfile);

      // get all repo of user
      const userRepos = await fetch(userProfile?.repos_url);
      const repos = await userRepos.json();
      setRepos(repos);

      // log response to console
       console.log("User Profile: ", userProfile, "repos: ", repos);


    } catch (error) {
      toast.error(error.message)
    }
  })

  useEffect(() => {
    getUserProfileAndRepos();
  }, [getUserProfileAndRepos]);
  
  return (
    <div className="m-4">
      <Search />
      <SortRepos />
      <div className="flex gap-4 flex-col lg:flex-row justify-center items-center">
        <ProfileDetails />
        <Repos />
        {/* <Spinner /> */}
      </div>
    </div>
  )
}

export default Home;
