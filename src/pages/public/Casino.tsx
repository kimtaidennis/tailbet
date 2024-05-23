import { useEffect, useMemo, useState } from 'react';
import CasinoSidebar from 'components/partials/casinoSidebar';
import { debounce } from "lodash";
import { casinoGames } from 'utils/utils';

type CasinoType = { image: string, name: string }

export default function Casino() {
  const [query, setQuery] = useState<string>("");

  let filteredGames: CasinoType[] = [];

  if (query !== "") { 
    filteredGames = casinoGames.filter((el: CasinoType) => el.name.toLowerCase().includes(query.toLowerCase()) );
  } else {
    filteredGames = casinoGames;
  }

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const debounceChangeHandler =  useMemo(
    () => debounce(changeHandler,300),
  []);

  useEffect(() => {
    return () => {
      debounceChangeHandler.cancel()
    }
  }, [debounceChangeHandler])
  

  return (
    <div className="md:flex gap-2 p-2">

      {/* ---Sidebar--- */}
      <div className="hidden lg:block lg:w-48 ">
        <CasinoSidebar />
      </div>

      {/* ---Main--- */}
      <div className="lg:w-fit  mb-4">

        <div className="flex py-2 mb-2">
          <input type="text" className="form-control lg:w-96" placeholder='Search Games' onChange={ debounceChangeHandler}/>
        </div>

        <div className=" grid  grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5 ">

          {/* ----Casino Game----- */}
          { [...Array(filteredGames.length)].map((x, i) => {
            return <div className="relative dashed-border" key={ `c1${i}`}>
              <div className="">
                <img src={ filteredGames[i].image } alt={filteredGames[i].name} className="w-full rounded" />
                {/* <div className="casino-game-overlay">
                  <button data-v-4e193da9="" className="btn btn-sm bg-theme mb-2">Launch demo</button>
                  <button data-v-4e193da9="" className="btn btn-sm bg-theme">Play the game</button>
                </div> */}
              </div>
              <div  className="py-2 text-xs">
                <i className="icofont-shield-alt"></i>
                <span className='font-light'>{ filteredGames[i].name }</span>
              </div>
            </div> } )
          }
          { [...Array(filteredGames.length)].map((x, i) => {
            return <div className="relative dashed-border" key={ `c2${i}`}>
              <div className="">
                <img src={ filteredGames[i].image } alt={filteredGames[i].name} className="w-full rounded" />
                {/* <div className="casino-game-overlay">
                  <button data-v-4e193da9="" className="btn btn-sm bg-theme mb-2">Launch demo</button>
                  <button data-v-4e193da9="" className="btn btn-sm bg-theme">Play the game</button>
                </div> */}
              </div>
              <div  className="py-2 text-xs">
                <i className="icofont-shield-alt"></i>
                <span className='font-light'>{ filteredGames[i].name }</span>
              </div>
            </div> } )
          }

        </div>
      </div>

    </div>
  )
}
