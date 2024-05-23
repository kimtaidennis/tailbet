import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "redux/hooks";
import { addMenu } from "redux/modules/feeds/gamesSlice";
import { getMenu } from "services/api";
import { getIcon } from "utils/utils";
import { useMyState } from "hooks";

export default function MSidebar() {

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
        <div className="block overflow-x-scroll py-3 md:hidden pl-2">
            <div className="flex gap-3 items-center">
                {
                    menu.map( el => 
                        <div className={ `flex flex-col items-center flex-nowrap ${ id === el.id ? 'text-yellow' : '' }`} key={el.id.toString()} onClick={ () => link(el.id.toString()) }>
                            <i className={`mr-0 icofont-${ getIcon(el.id)}`}></i>
                            <span className="text-xs whitespace-nowrap mt-1">{ el.name}</span>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
