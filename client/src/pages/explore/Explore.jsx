/* eslint-disable no-mixed-spaces-and-tabs */
import { useState } from "react";
import toast from "react-hot-toast";
import Repos from "../../components/repos/Repos";
import Spinner from "../../components/spinner/Spinner"

const Explore = () => {
	const [loading, setloading] = useState(false);
	const [repos, setrepos] = useState([]);
	const [selectedLanguage, setselectedLanguage] = useState("");

	const handleExploreLanguages = async(language) => {
       setloading(true);
	   setrepos([]);

	   try {
		const  res = await fetch(`https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc&per_page=10`);
		const data = await res.json();
		setrepos(data.items);
		setselectedLanguage(language);

	   } catch (error) {
		toast.error("error.message");
		} finally{
		setloading(false);
	   }
	}
	
	return (
		<div className='px-4'>
			<div className='bg-glass max-w-2xl mx-auto rounded-md p-4'>
				<h1 className='text-xl font-bold text-center'>Explore Popular Repositories</h1>
				<div className='flex flex-wrap gap-2 my-2 justify-center'>
					<img src='/javascript.svg' onClick={() => handleExploreLanguages("javascript")} alt='JavaScript' className='h-11 sm:h-20 cursor-pointer' />
					<img src='/typescript.svg' alt='TypeScript logo' onClick={() => handleExploreLanguages("typescript")} className='h-11 sm:h-20 cursor-pointer' />
					<img src='/php.svg' alt='PHP logo' onClick={() => handleExploreLanguages("php")} className='h-11 sm:h-20 cursor-pointer' />
					<img src='/python.svg' alt='Python logo' onClick={() => handleExploreLanguages("python")} className='h-11 sm:h-20 cursor-pointer' />
					<img src='/java.svg' alt='Java logo' onClick={() => handleExploreLanguages("java")} className='h-11 sm:h-20 cursor-pointer' />
				</div>

				{ repos.length > 0 && (
					<h2 className='text-lg font-semibold text-center my-4'>
						<span className='bg-blue-100 text-blue-800 font-medium me-2 px-2.5 py-0.5 rounded-full'>
							{selectedLanguage.toUpperCase()}{" "}
						</span>
						Repositories
					</h2>
				)}
				 { !loading && repos.length > 0 && <Repos repos={repos} alwaysFullWidth />}
				 { loading && <Spinner />}
			</div>
		</div>
	);
};

export default Explore;