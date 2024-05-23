import { Market, Match, MatchMarket } from 'models/model';
import Moment from 'react-moment';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { useMyState,useAddBetslip } from 'hooks';
import { Odd } from "./button"

type Props = { match: Match, markets: Market[] }

const Main = ({ match, markets }: Props) => {  
  let navigate = useNavigate();
  const { addMatch } = useAddBetslip();
  const { betslip } = useMyState();

  const filterMatch = (arr: MatchMarket,id: number) => {
    return arr.odds!.find( el => el.outcomeId === parseInt(id.toString()));
  }

  const moreMarkets = (id: number) => {
    navigate(`/single-match/${id}`);
  }

  const select = betslip.findIndex(g => g.id === match.id) > -1;

  return (
    <div className=" flex justify-between px-2 md:px-0 dashed-border  py-2 font-normal" >
      <div className="flex flex-col justify-center w-1/2 md:w-auto" onClick={ () => moreMarkets(match.id) }> 
          <div className='text-xs font-extralight'>
            <span className=' text-gray-400'>
              <Moment format='hh:ss • DD/MM'>{ moment(`${match.scheduled}`) }</Moment>
            </span>  
            <span className={ `ml-1 text-yellow ${select ? ' text-orange-300' : ''}` } onClick={ () => moreMarkets(match.id) }>
              <i className="icofont-bubble-right mr-1"></i>+{ match.markets.length } Markets
            </span>
          </div>
          <span className='font-normal'>{ match.home }</span>
          <span className='font-normal'>{ match.away }</span>
      </div>
      <div className="flex justify-end gap-5 items-center w-1/2 md:w-auto">
          {
            markets!.map( el =>  {
              const arr = match.markets.find( x => x.marketId === el.id.toString() && el.handicap === x.handicap) as MatchMarket;
              if(arr) {
                return <div key={el.id.toString()}  className={`text-center w-full ${el.selections.length === 3 ? 'lg:w-[15rem]' : 'lg:w-[9.4rem]'} ${ el.mobile ? '' : 'hidden lg:block' }`}>
                      <div className="flex justify-between gap-2">
                        {
                          el.selections.map( (elem : any) => {
                            if( filterMatch(arr,elem.id) !== null ) {
                              const ab = filterMatch(arr,elem.id);
                              return  <Odd key={elem.id.toString()} type={true} odd={ab!.odds.toFixed(2)} select={ betslip.findIndex(g => g.oddId === ab!.id.toString()) > -1 } addMatch={ () => addMatch(match,el.name,ab!.name,ab!.odds,ab!.id.toString(),'pre-match')}/>;
                            } else {
                              return  <Odd key={elem.id.toString()} type={false}/>;
                            }
                          })
                        }
                      </div>
                  </div>;
              } else {
                return <div key={el.id.toString()}  className={`w-full text-center ${el.selections.length === 3 ? 'lg:w-[15rem]' : 'lg:w-[9.4rem]'} ${ el.mobile ? '' : 'hidden lg:block' }`} >
                  <div className="flex justify-between gap-2">
                      {
                          el.selections.map( (elem : any) => 
                              <Odd key={elem.id.toString()} type={false} />
                          )
                      }
                  </div>
                </div>
              }
            })
          }
      </div>
  </div>  
  )
}

export default Main