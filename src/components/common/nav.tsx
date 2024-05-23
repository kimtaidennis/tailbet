import { NavLink } from 'react-router-dom'
import { nav } from 'utils/utils'

export default function Nav() {
  return (
    <div className=' bg-dark-op px-2 py-2'>
        <ul className="flex items-center gap-3 mb-0 pl-1 py-1">
            {
              nav.map( (link,i) => (
                <li key={i}><NavLink className={`hover:no-underline  hover:text-yellow cursor-pointer ${i === 0 ? 'pl-0 pr-2' : 'px-2 md:px-3'}`} to={link.to}>{ link.label }</NavLink></li>
              ))
            }
        </ul>
    </div>
  )
}
