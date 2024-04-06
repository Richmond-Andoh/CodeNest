import { useState, useEffect, useCallback } from "react";
import Search from "../../components/search/Search";
import SortRepos from "../../components/sortRepo/SortRepos";
import ProfileDetails from "../../components/profileDetails/ProfileDetails";
import Repos from "../../components/repos/Repos";
import toast from "react-hot-toast";
import Spinner from "../../components/spinner/Spinner";

const Home = () => {
  const [userProfile, setuserProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setloading] = useState(false);

  const [sortType, setsortType] = useState("recent")

  const getUserProfileAndRepos = useCallback(async(username = "richmond-andoh") => {
    //set loading to true before making the request
    setloading(true);

    try {

      // fetch user profile
      // const userRes = await fetch(`https://api.github.com/users/${username}`, {
      //   headers: {
      //     authorization: `token ${import.meta.env.VITE_GITHUB_API_KEY}`
      //   }
      // });
      // const userProfile = await userRes.json();
      // setuserProfile(userProfile);

      // get all repo of user
      // const userRepos = await fetch(userProfile?.repos_url);
      // const repos = await userRepos.json();

      const res = await fetch(`http://localhost:5050/api/users/profile/${username}`);
      if (!res.ok) throw new Error('Could not find User');

      const { userProfile, repos } = await res.json();

      repos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

      setRepos(repos);
      setuserProfile(userProfile);

      return { userProfile, repos};
      
    } catch (error) {
      toast.error(error.message)
    } finally {
      setloading(false)
    }
  }, [])

  useEffect(() => {
    getUserProfileAndRepos();
  }, [getUserProfileAndRepos]);
  
  // Search functionality
  const  searchInputHandler = async (e, username) => {
    e.preventDefault();

     setloading(true);
     setuserProfile(null);
     setRepos([]);

     const { userProfile, repos} = await getUserProfileAndRepos(username);
     
     setuserProfile(userProfile);
     setRepos(repos);
     setloading(false);
     setsortType("recent")
   
  };

  const sortHandler = (sortType) => {
    if(sortType === "recent"){
      repos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)); // descending order
    }

    else if(sortType === "stars"){
      repos.sort((a, b) => b.stargazers_count - a.stargazers_count); // descending order
    }

    else if(sortType === "forks"){
      repos.sort((a, b) => b.forks_count - a.forks_count);
    }

    setsortType(sortType);
    setRepos([...repos]);
  }
  
  return (
    <div className="m-4">
      <Search searchInputHandler= {searchInputHandler} loading={loading}/>
      { repos.length > 0 && <SortRepos sortHandler={sortHandler} sortType={sortType} />}
      <div className="flex gap-4 flex-col lg:flex-row justify-center">
        { userProfile && !loading && <ProfileDetails  userProfile={userProfile}/>}

        {!loading && <Repos repos={repos}/>}

        { loading && (
          <Spinner />
        )}
        
      </div>
    </div>
  )
}

export default Home;
