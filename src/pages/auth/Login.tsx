import { useAuth } from 'auth/AuthProvider';
import { useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'

type RedirectLocationState = {
    redirectTo: Location;
};

export default function Login() {
    
    const navigate = useNavigate();
    const { setToken } = useAuth();
    const { state: locationState } = useLocation();

    const [user,setUser] = useState({ phone: '', pin: '',remember: false , gender: ''});
    const onChange = (event: any) => {
        const { name,value,type,checked } = event.target
        setUser( (prevFormData) => {
            return {
                ...prevFormData,
                [name] : type === 'checkbox' ? checked : value
            }
        })
    }

    const onSubmit = (e:any) => {
        e.preventDefault();
        if(user.phone === '123456' && user.pin === '1000') {
            setToken("this is a test token");
            if (locationState) {
                // state is any by default
                const { redirectTo } = locationState as RedirectLocationState;
                navigate(`${redirectTo.pathname}${redirectTo.search}`);
            } else {
                navigate("/", { replace: true });
            }
            
        } else {
            console.log('Invalid Credentials');
        }
    }

    return (
        <>
            <h4 className="text-slate-300 font-light my-4">Login</h4>
            {JSON.stringify(user)}
            <form onSubmit={ (e) => onSubmit(e) } className='text-left'>
                <div className="mb-5">
                    <label htmlFor="phone" className='block'>Phone Number:</label>
                    <input id="inputEmail" type="text" placeholder="0722-123-456" name="phone" className="form-control" value={ user.phone } onChange={ (event) => onChange(event) } />
                </div>

                <div className="mb-5">
                    <label htmlFor="password" className='block'>Password:</label>
                    <input id="inputPassword" type="password" placeholder="Password" name="pin" className="form-control" value={ user.pin } onChange={ (event) => onChange(event) } />
                </div>
                <div className="mb-5 flex gap-4">
                    <input id="remember" type="checkbox" className='inline'  name="remember" checked={user.remember} onChange={ (event) => onChange(event) } />
                    <label htmlFor="remember" className='block'>Remember Me</label>
                </div>

                <div className="mb-5 flex">
                    <div className="flex gap-2 cursor-pointer">
                        <input id="male" type="radio" className='inline'  name="gender" value='male' checked={user.gender === 'male'} onChange={ (event) => onChange(event) } />
                        <label htmlFor="male" className='block'>Male</label>
                    </div>
                    <div className="flex gap-2 ml-5 cursor-pointer">
                        <input id="female" type="radio" className='inline'  name="gender" value='female' checked={user.gender === 'female'} onChange={ (event) => onChange(event) } />
                        <label htmlFor="female" className='block'>Female</label>
                    </div>
                </div>
                
                <div className="my-6">
                    <button type="submit" className="btn mb-2">Submit</button>
                </div>
            </form>
            <div className="text-right">
                <NavLink to="/forgot-password" className="hover:text-yellow">Forgot Password?</NavLink>
            </div>
        </>
    )
}
