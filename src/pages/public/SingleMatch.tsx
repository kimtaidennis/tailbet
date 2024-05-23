import Sidebar from 'components/partials/sidebar';
import BetslipSection from 'components/partials/betslip';
import { useAppDispatch } from 'redux/hooks';
import Moment from 'react-moment';
import moment from 'moment';
import { addBetslipType, getSingleMatch } from 'redux/modules/feeds/gamesSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useMyState,useAddBetslip } from 'hooks';

export default function SingleMatch() {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const { id } = useParams();
    const { match,betslip } = useMyState();
    const { addMatch } = useAddBetslip();
    
    dispatch( addBetslipType('Pre-Match'));

    useEffect(() => {
        dispatch( getSingleMatch( parseInt(id!) ) );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])
        
    return (
        <>
            <div className="md:flex justify-between gap-3 md:p-3">
                <div className="md:flex gap-3 flex-1">

                    {/* ---Sidebar--- */}
                    <div className="hidden lg:block lg:w-48">
                        <Sidebar />
                    </div>

                    {/* ---Main--- */}
                    <div className="px-2 flex flex-col flex-1">
                    {
                        Object.keys(match).length > 0 && <>
                            <div className="flex dashed-border py-2.5">
                                <p onClick={() => navigate(-1)} className='cursor-pointer w-24 text-light-blue'>
                                    <i className="icofont-bubble-left !mr-0"></i>
                                    <span className="font-semi-bold">Back</span>
                                </p>
                                <p className="font-semi-bold ">
                                    { match.sportName }, { match.country } • { match.tournamanent}
                                </p>
                            </div>

                            <div className="flex justify-between items-center py-2 dashed-border">
                                <div className="flex flex-col items-center">
                                    <i className="icofont-cop-badge"></i>
                                    <p className='font-semi-bold'>{ match.home }</p>
                                </div>
                                <div className="team">
                                    <p className='time'><Moment format='hh:ss • DD/MM'>{ moment(`${match.scheduled}`) }</Moment></p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <i className="icofont-cop-badge"></i>
                                    <p className='font-semi-bold'>{ match.away }</p>
                                </div>
                            </div>

                            <br />
                            
                            {  match && match.markets.map( el => {
                                    return <div className="flex flex-col dashed-border py-2" key={el.id}>
                                        <p className="py-1.5">
                                            <i className="icofont-shield-alt"></i>
                                            <span className="font-semi-bold">{ el.name }</span>
                                        </p>
                                        <div className={`grid gap-3 ${el.odds.length > 2 ? ' grid-cols-2 md:grid-cols-3' : ' grid-cols-2'} `}>

                                            { el.odds.map( elem => {
                                                return <div className={`py-2.5 bg-dark-op rounded-md px-2  flex justify-between ${ betslip.findIndex(g => g.oddId === elem.id.toString()) > -1 ? 'bg-yellow text-dark-bg' : 'text-light-blue'}`} key={elem.id} onClick={ () => addMatch(match,el.name,elem.name,elem.odds,elem.id.toString(),'pre-match')} >
                                                    <span className='w-4/6 truncate'>{ elem.name }</span>
                                                    <span className='w-1/6 text-right'>{ elem.odds.toFixed(2) }</span>
                                                </div>
                                            }) }
                                        </div>
                                    </div>;
                                })  
                            }
                        </>
                    }                        
                    </div>

                </div>

                {/* ---Betslip--- */}
                <div className="betslip hidden lg:block lg:w-96">
                    <BetslipSection type="Pre-Match" />
                </div>

            </div>
        </>
    )
}
