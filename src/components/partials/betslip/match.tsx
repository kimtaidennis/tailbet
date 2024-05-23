import Moment from 'react-moment';
import moment from 'moment';
import { Betslip } from 'models/model';

type Props = { match: Betslip; deleteBetslip: any };

export default function Match( { match, deleteBetslip }: Props ) {
  return (
    <div className='py-2 dashed-border' key={`${match.id.toString()}`}>
        <div className="match-info flex justify-between ">
            <p className='font-semi-bold'>{`${match.home} vs ${match.away}`}</p>
            <span className='text-yellow' onClick={ () => deleteBetslip(match.id) }>
              <i className="icofont-close-squared-alt"></i>
            </span>
        </div>

        { match.type === 'pre-match' && <p className=''>{` ${match.market} • ${match.selected}`}</p> }
        
        { match.type === 'jackpot' && <p className=''>Pick • {` ${match.selected}`}</p> }

        { 
          match.type === 'pre-match' && <div className='text-light-blue text-xs flex justify-between'>
                <span className='time'>Starts <Moment format='hh:ss • DD/MM'>{ moment(`${match.schedule}`) }</Moment></span>
                <span>{ match.odd.toFixed(2) }</span> 
            </div>
        }
    </div>
  )
}
