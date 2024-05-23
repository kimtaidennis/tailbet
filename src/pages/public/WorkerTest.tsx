import { Fibs } from "models/model";
import { useMyState } from "hooks";
import { useAppDispatch } from "redux/hooks";
import { setError, updateFibo, setNumber, setFibo } from "redux/modules/auth/authSlice";
import { ordinal_suffix } from "utils/utils";
import { useState } from "react";

const FetchUsers = () => {

    const [alert,setAlert] = useState<string>('info')
    const { err,num,computedFibs } = useMyState();
    const dispatch = useAppDispatch();

    const [num1,setNum1] = useState<number>(0);
    const [num2,setNum2] = useState<number>(0);
    const [num3,setNum3] = useState<string>('');

    const myWorker = new SharedWorker("workers/app.workers.js");

    

    const square = () => {
        
        myWorker.port.postMessage({num1, num2:num1});
        console.log("Message posted to worker");

        myWorker.port.onmessageerror = (e) => {
            console.log(e);
            
        }

        myWorker.port.onmessage = (e) => {
            setNum3(e.data);
            console.log("Message received from worker");
        };
    }

    const multiply = () => {
        myWorker.port.postMessage([num1, num2]);
        console.log("Message posted to worker");

        myWorker.port.onmessage = (e) => {
            setNum3(e.data);
            console.log("Message received from worker");
        };
    }

    const runWorker = (num: number, id:number) => {
        dispatch(setError(''));
        const worker = new Worker(new URL("workers/fib.workers.ts", import.meta.url))
        
        
        worker.postMessage({ num });
        worker.onerror = (err) => err;
        worker.onmessage = (e) => {
            const { time, fibNum } = e.data;
            dispatch(
                updateFibo({ id,time,fibNum,loading:false})
            );
            setAlert('success');
            worker.terminate();
        };
    };

    return (
        <>
            <div className="row">
                <div className="offset-md-2 col-md-3 my-3 py-3">
                    {/* -------------------------------------- */}
                    <h4>Fibonacci Number</h4>
                    { err ? <div className="alert alert-warning">{ err }</div> : ''}
                    <br />
                    <input type="text" className="form-control" value={num} onChange={(e) => dispatch( setNumber(window.Number(e.target.value) )) } />
                    <button className="btn btn-info mt-4" onClick={() => {
                        if (num < 2) {
                            dispatch( setError('Please enter a number greater than 2'));
                            return;
                        }
                        const id = computedFibs.length;
                        dispatch( setFibo({id,loading:true,nth: ordinal_suffix(num),time:0,fibNum:0}));
                        runWorker(num, id);

                    }}>Calculate Fibonacci</button>
                    <button className="btn btn-primary mt-4 ml-2" onClick={ () => setAlert('danger')}>Change Alert</button>

                    <br />
                    <Results results={computedFibs} alert={alert} />
                </div>

                {/* -------------------------------------- */}
                <div className="col-md-3 my-3 py-3">
                    <h4>Shared Workers</h4>
                    <br />
                    <input type="text" className="form-control mb-2" value={num1} onChange={(e) => setNum1(window.Number(e.target.value) ) } />
                    <input type="text" className="form-control mb-3" value={num2} onChange={(e) => setNum2(window.Number(e.target.value) ) } />
                   
                    <div className="py-2">
                        <button className="btn btn-info mr-2" onClick={ ()=> square() }>Square</button>
                        <button className="btn btn-info" onClick={ ()=> multiply() }>Multiply</button>
                    </div>
                    <p>Result { num3 }</p>
                </div>
                
            </div>
            
        </>
    ) 
}

export default FetchUsers;

type Props = { results: Fibs[],alert:string }
const Results = ({ results,alert} : Props) => { 
    const seconds = (ms?:number):number => (ms) ? Math.floor((ms/1000) % 60) : 0;
    return (
        <>
        {
            results.map((fb) => {
                const { id, nth, time, fibNum, loading } = fb;
                
                return <div  key={id} className={`alert alert-${alert} my-2`}>
                    { loading ? (
                        <p className="font-bold" style={{ marginBottom: 0}}>Calculating the{" "}
                        <span className="bold" id="nth">
                          { nth }
                        </span>{" "}
                        Fibonacci number...</p>
                    ) : (
                        <>
                            <p className="font-semi-bold" style={{ marginBottom: 0}}>
                                Time: <span className="bold">{ seconds(time)} second(s)</span>
                            
                                <span className="font-bold mx-1" id="nth">
                                    - {nth}
                                </span>
                                Fibonacci number:
                                <span className="font-bold" id="sum">
                                    {fibNum}
                                </span>
                            </p>
                        </>
                    )}
                </div>
            })
        }
    </>
    )
}