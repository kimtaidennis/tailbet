import { list } from 'utils/utils'

export default function CasinoSidebar() {

  return (
      <ul className="list-none lg:max-w-[180px] lg:min-w-[180px]">
        {
          list.map( (el,i) => <li key={ i } className={ `font-normal hover:text-yellow  p-1 mb-1 ${ i === 0 ? 'text-yellow' : '' }`}>{ el }</li>)
        }   
      </ul>
  )
}
