

export default function ResetPassword() {
    return (
        <>
            <h4 className="text-slate-300 font-light my-4">Reset Password </h4>
            
            <form>
                <div className="mb-5">
                    <label htmlFor="" className="block my-2">Password:</label>
                    <input type="password" placeholder="Password" required className="form-control" v-model="password" />
                </div>
                <div className="form-group mb-5">
                    <label htmlFor="" className="block my-2">Confirm Password:</label>
                    <input type="password" placeholder="Password" required className="form-control" v-model="confirm_password" />
                </div>
                <div className="form-group mb-5">
                    <button type="submit" className="btn mb-2">Reset</button>
                </div>
            </form>
        </>
    )
}
