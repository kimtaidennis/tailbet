import { useEffect } from "react";
import BetslipSection from "components/partials/betslip";
import Main from "components/partials/jackpot/main";
import Market from "components/partials/jackpot/market";
import Sidebar from "components/partials/sidebar";
import { Sport } from "models/model";
import { useAppDispatch } from "redux/hooks";
import { addBetslipType, setupJackpotGames } from "redux/modules/feeds/gamesSlice";
import { getJackpot } from "services/api";
import { useAddBetslip,useMyState } from 'hooks';


export default function Jackpot() {

    const dispatch = useAppDispatch();

    const { jackpotMatches:feeds, sportsMarkets } = useMyState();
    const { autoSelectMatch } = useAddBetslip();
    const sport = sportsMarkets.find( el => el.id === 10 ) as Sport;

    dispatch( addBetslipType('Jackpot'));

    const autoSelect = () => {
        feeds.forEach( (el) => {
            let ind = Math.floor(Math.random() * 3) + 1;
            const market = el.markets.find( el => el.marketId === '2');
            
            if( market ) {
                market.odds.forEach( arg => {
                    if( arg.outcomeId === ind ) {
                        autoSelectMatch( el,market.name,arg.name,arg.odds,arg.id.toString(),'jackpot' );
                    }
                });
            }
        });
    }

    useEffect( () =>  {
        getJackpot().then( res => dispatch( setupJackpotGames(res))).catch( err => console.log('Error--',err) );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    return (
        <div className="md:flex  gap-3 md:p-2">
            <div className="md:flex gap-2 lg:w-3/4 sm:w-full md:full">
                
                {/* ---Sidebar--- */}
                <div className="sidebar hidden lg:block lg:w-48">
                    <Sidebar />
                </div>

                {/* ---Main--- */}
                <div className="main-home mb-5 lg:w-fit sm:w-full md:w-full">

                    {/* ---Carousel--- */}
                    <img src="/images/image3.png" alt="Home" className="w-full md:rounded-md"/>
                    
                    {/* Auto Select */}
                    <div className="md:py-2.5 text-right p-2 md:px-0 dashed-border ">
                        <button className="px-8 py-2 bg-yellow font-medium text-dark-bg rounded-md" onClick={ autoSelect }>Auto Select</button>
                    </div>

                    
                    {/* ---Markets--- */}
                    {  typeof sport === 'object' &&  <Market sport={sport}/> }

                    {/* ---Matches--- */}
                    { feeds.length > 0 && typeof sport === 'object' && feeds.map( x => <Main key={ x.id.toString() }  match={x} />) }
                    
                </div>
            </div>

            {/* ---Betslip--- */}
            <div className="betslip hidden lg:block">
                <BetslipSection type='Jackpot'/>
            </div>
        </div>
    )
}
