import { useAppDispatch } from 'redux/hooks'
import { clearBetslip, clearJackpotSlip, deleteBetslip, deleteJackpotSlip } from 'redux/modules/feeds/gamesSlice';
import Match from './betslip/match';
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAddBetslip, useMyState } from 'hooks';
import { useAuth } from 'auth/AuthProvider';

type Props = { type: String }

export default function BetslipSection({ type } : Props) {

    const [amount,setAmount] = useState(100);
    const { betslip, jackpot } = useMyState();
    const { token } = useAuth();
    const { possibleWin } = useAddBetslip()
    
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    
    const login = () => {
        navigate('/login');
    }

    const whichType = () => {
        if(type === 'Jackpot') {
            return jackpot.length > 0 ? `(${jackpot.length})` : '';
        } else {
            return betslip.length > 0 ? `(${betslip.length})` : ''; //clearJackpotSlip
        }
    }

    const totalOdds = useMemo( () => betslip.reduce( (a,v) => a * v.odd,1), [betslip])

    return (
        <>
            <div className="py-2  dashed-border flex justify-between items-center font-normal lg:max-w-[350px] lg:min-w-[350px]">
                <p>Betslip  { whichType() } </p>
                {  betslip.length > 0  && type === 'Pre-Match' && <p className='clear' onClick={ () => dispatch( clearBetslip() ) }>Clear </p> }
                {  jackpot.length > 0  && type === 'Jackpot' && <p className='clear' onClick={ () => dispatch( clearJackpotSlip() ) }>Clear </p> }
            </div>

            {/* Prematch & Live Betslip */}
            {  betslip.length > 0 && type === 'Pre-Match' && <>
                    <div className="">
                        {
                            betslip.map( x => <Match match={x}  deleteBetslip={ () => dispatch(deleteBetslip(x.id))} key={x.oddId.toString()} />)
                        }
                    </div>

                    <br />
                    <div className="py-2">
                        <div className="flex justify-between py-1.5">
                            <p>Total Odds</p>
                            <p>{ totalOdds.toFixed(2) }</p>
                        </div>
                        <div className="flex justify-between py-1.5">
                            <p>Possible Win</p>
                            <p>{ possibleWin(amount,totalOdds).toLocaleString() }</p>
                        </div>
                        <div className="py-1.5">
                            <input type="number" className="form-control" value={amount} onChange={ (e) => setAmount(parseInt(e.target.value)) }/>
                        </div>
                        <div className="flex justify-between gap-3 mt-3">
                            {
                                token ? <button className='p-2.5 bg-yellow text-dark-bg rounded-md'>place bet</button> : <button className='p-2.5 bg-yellow text-dark-bg w-1/2 rounded-md' onClick={ login }>login</button>
                            }
                            
                            <button className='p-2.5 bg-red-400 w-1/2 rounded-md'>share bet</button>
                        </div>
                    </div>
                </>
            }

            {/* Jackpot Betslip */}
            {  jackpot.length > 0 && type === 'Jackpot' && <>
                    <div className="mt-3">
                        {
                            jackpot.map( x => <Match match={x}  deleteBetslip={ () => dispatch(deleteJackpotSlip(x.id))} key={x.oddId.toString()} />)
                        }
                    </div>

                    <br />
                    <div className="show-odds-info">
                        <div className="form-group">
                            <input type="number" className="form-control" value={amount} onChange={ (e) => setAmount(parseInt(e.target.value)) }/>
                        </div>
                        <div className="betslip-buttons">
                            {
                                token ? <button className='p-2.5 bg-yellow text-dark-bg w-1/2 rounded-md'>place bet</button> : <button className='p-2.5 bg-yellow text-dark-bg w-1/2 rounded-md' onClick={ login }>login</button>
                            }
                            <button className='p-2.5 bg-red-400 w-1/2 rounded-md'>share bet</button>
                        </div>
                    </div>
                </>
            }

            {/* Empty Prematch Betslip */}
            {
                betslip.length === 0 && type === 'Pre-Match' && <div className='bg-dark-op p-12 rounded-lg my-4'>
                    <p className='font-semi-bold'>You have not selected any bet</p>
                    <span className=''>Make your first pick to start playing.</span>
                </div>
            }

            {/* Empty Jackpot Betslip */}
            {
                jackpot.length === 0 && type === 'Jackpot' && <div className='bg-dark-op p-12 rounded-lg my-4'>
                    <p className='font-semi-bold'>You have not selected any jackpot bet</p>
                    <span className=''>Make your first pick to start playing.</span>
                </div>
            }
          
        </>
    )
}
