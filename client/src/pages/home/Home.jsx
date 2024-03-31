import Search from "../../components/search/Search";
import SortRepos from "../../components/sortRepo/SortRepos";
import ProfileDetails from "../../components/profileDetails/ProfileDetails";
import Repos from "../../components/repos/Repos";
import Spinner from "../../components/spinner/Spinner";

const Home = () => {
  return (
    <div className="m-4">
      <Search />
      <SortRepos />
      <div className="flex gap-4 flex-col lg:flex-row justify-center items-center">
        <ProfileDetails />
        <Repos />
        <Spinner />
      </div>
    </div>
  )
}

export default Home;
