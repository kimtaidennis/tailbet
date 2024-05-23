import BetslipSection from 'components/partials/betslip';
import { useMyState } from 'hooks';

export default function Betslip() {

  const { type } = useMyState()

  return (
    <div className="betslip px-2 py-2 h-screen">
      <BetslipSection type={ type }/>
    </div>
  )
}
