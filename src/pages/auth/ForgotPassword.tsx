import { NavLink } from 'react-router-dom';

export default function ForgotPassword() {
    return (
        <>
            <h4 className="text-slate-300 font-light my-4">Forgot Password </h4>
            <p className="text-slate-300 font-light my-2">Reset password request will be send to entered email.</p>
            <form>
                <div className="mb-5">
                    <label htmlFor="" className='block mb-1'>Email:</label>
                    <input id="inputEmail" type="email" placeholder="Email" required className="form-control" />
                </div>
                
                <div className="form-group mb-3">
                    <button type="submit" className="btn btn-default-theme btn-block text-uppercase mb-2">Send</button>
                </div>
            </form>
            <div className="text-right">
                <NavLink to="/login" className="hover:text-yellow">Login</NavLink>
            </div>
        </>
    )
}
