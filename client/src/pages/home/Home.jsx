import Search from "../../components/search/Search";
import SortRepos from "../../components/sortRepo/SortRepos";

const Home = () => {
  return (
    <div className="m-4">
      <Search />
      <SortRepos />
      <div className="flex gap-4 flex-col lg:flex-row justify-center items-center">
        {/* <ProfileDetails />
        <Repos />
        <Spinner /> */}
      </div>
    </div>
  )
}

export default Home
