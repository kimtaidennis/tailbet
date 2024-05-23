import { useEffect, useState } from 'react';
import Sidebar from 'components/partials/sidebar'
import { Sport } from 'models/model';
import { useAppDispatch } from 'redux/hooks';
import { getSport } from 'services/api';
import { addBetslipType, setupGames, updateSportId,searchTeam } from 'redux/modules/feeds/gamesSlice';
import BetslipSection from 'components/partials/betslip';
import Market from 'components/partials/feeds/market';
import Main from 'components/partials/feeds/main';
import Countries from 'components/partials/feeds/countries';
import Gallery from 'components/partials/carousel';
import { useParams } from 'react-router-dom';
import MSidebar from 'components/partials/msidebar';
import { useMyState, useOnlineStatus } from 'hooks';

export default function Home() {
  
  const dispatch = useAppDispatch();

  const { feeds, sportsMarkets, sportId } = useMyState();
  const { id } = useParams();
  const isOnline = useOnlineStatus();

  dispatch( addBetslipType('Pre-Match'));
  
  const sport = sportsMarkets.find( el => el.id === sportId) as Sport;
  const [tab,setTab] = useState('featured');
  const spid: number = id !== undefined ? parseInt(id) : 10;
  
  useEffect( () =>  {
    setTab('featured');
    dispatch( updateSportId(spid) );
    getSport(spid).then( res => dispatch( setupGames(res))).catch( err => console.log('Error--',err) );
  }, [spid,dispatch]);
  
  return (
    <>
       <div className="md:flex gap-3 lg:p-2">
        <div className="md:flex gap-2 sm:w-full md:w-full">

          {/* ---Sidebar--- */}
          <div className="sidebar hidden lg:block lg:w-48">
            <Sidebar />
          </div>

          <MSidebar />

          {/* ---Main--- */}
          <div className="main-home mb-5 lg:w-fit sm:w-full md:w-full">

            {/* ---Carousel--- */}
           <Gallery />

            
           
            {/* ---Quick links--- */}
            <div className="md:flex md:justify-between md:items-center px-2 md:px-0 border-b border-b-dark-border border-dashed py-2">
              <div className="py-2 space-x-3 ">
                <span className={ `${tab === 'featured' ? 'text-yellow' : ''}`} onClick={ () => setTab('featured') } >Featured</span>
                <span className={ `${tab === 'today' ? 'text-yellow' : ''}`} onClick={ () => setTab('today') } >Today</span>
                <span className={ `${tab === 'upcoming' ? 'text-yellow' : ''}`} onClick={ () => setTab('upcoming') } >Upcoming</span>
                <span className={ `${tab === 'countries' ? 'text-yellow' : ''}`} onClick={ () => setTab('countries') } >Countries</span>
              </div>
              <div className=''>
                <input type="text" className="form-control" placeholder='Search Team' onChange={ (e) => dispatch( searchTeam(e.target.value) )}/>
              </div>
            </div>

            { !isOnline && <div className="alert alert-danger mt-3">
              <div className="py-2 font-semi-bold">No Internet</div>
            </div>

            }

            { tab !== 'countries' && isOnline &&
              <>
                {/* ---Markets--- */}
                {  typeof sport === 'object' &&  <Market sport={sport}/> }

                {/* ---Matches--- */}
                { feeds.length > 0 && typeof sport === 'object' && feeds.map( x => <Main key={ x.id.toString() }  match={x} markets={ sport.markets }/>) }
              </>
            }
            
            { tab === 'countries' && isOnline && <Countries /> }
          </div>
          
        </div>

        {/* ---Betslip--- */}
        <div className="betslip hidden lg:block">
          <BetslipSection type='Pre-Match'/>
        </div>

       </div>
    </>
  )
}
