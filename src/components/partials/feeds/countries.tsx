import { Country, Menu } from "models/model";
import ReactCountryFlag from "react-country-flag"
import { useMyState } from "hooks";
import { useState } from "react";

export default function Countries() {

  const [id,setId] = useState<number>(0)
  const { flags,sportId, menu:all } = useMyState();
  const menu = all.find( x => x.id === sportId) as Menu;

  const countries: Country[] = [...menu.country].sort(function(a, b) {
    if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
    if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
    return 0;
  });

  return (
    <ul className=" list-none px-3 md:px-0">
      {
        countries.map( el => <li key={ el.id.toString() }>
          <span key={`#ct${el.id}`} onClick={ () => setId(el.id)}  className={`py-2 block font-light cursor-pointer ${ id === el.id ? 'text-yellow font-normal' : 'text-white'}`} >
          <ReactCountryFlag countryCode={ flags[el.name]} svg className="mr-2 mb-1"/> { el.name } ({ el.leagues.length })
          </span>
          <ul id={`ct${el.id}`} className={`list-none transition ease-in-out bg-pattern bg-repeat-y bg-scroll bg-[length:1px_4px] bg-origin-padding bg-clip-border ${ id === el.id ? 'block' : 'hidden'}`}>
            {
              el.leagues.map( ell => <li key={ ell.id.toString() } className="pl-2 text-light-blue text-sm font-light py-1 hover:cursor-pointer hover:text-white"><i className="icofont-bubble-right"></i> { ell.name }</li>)
            }
          </ul>
        </li> )
      }
    </ul>
  )
}
