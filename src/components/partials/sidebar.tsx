import { useEffect } from "react";
import { getMenu } from "services/api";
import { useAppDispatch } from "redux/hooks";
import { addMenu } from "redux/modules/feeds/gamesSlice";
import { useNavigate } from "react-router-dom";
import { useMyState } from "hooks";

export default function Sidebar() {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const { menu, sportId:id }  = useMyState();

    const link = (id:string) => {
      navigate(`/sport/${id}`);
    }

    useEffect(() => {
        getMenu().then( res => dispatch(addMenu(res)));
    }, [dispatch])
    
  return (
    <ul className="list-none lg:max-w-[180px] lg:min-w-[180px]">
        {
            menu.map( el => <li className={ `hover:text-yellow p-1 mb-1 ${ id === el.id ? 'text-yellow' : '' }`} key={el.id.toString()} onClick={ () => link(el.id.toString()) }>{ el.name}</li>)
        }
    </ul>
  )
}
