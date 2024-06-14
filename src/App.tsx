import './assets/css/icofont.css';
import { Suspense, lazy } from 'react';
import { Route, RouterProvider, createHashRouter,createRoutesFromElements } from "react-router-dom";
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { ProtectedRoute } from 'routes/ProtectedRoute';
import { AuthLayout, BaseLayout, Default, RenderLayout } from 'layouts';
import AuthProvider from 'auth/AuthProvider';
import Loader from 'components/partials/loader';


const Home = lazy(() => import("pages/Home"));
const Jackpot = lazy(() => import("pages/public/Jackpot"));
const SingleMatch = lazy(() => import("pages/public/SingleMatch"));
const Casino = lazy(() => import("pages/public/Casino"));
const Betslip = lazy(() => import("pages/public/Betslip"));
const Jetx = lazy(() => import("pages/public/Jetx"));
const Aviatrix = lazy(() => import("pages/public/Aviatrix"));
const NotFound = lazy(() => import("pages/public/NotFound"));
const PrivacyPolicy = lazy(() => import("pages/public/PrivacyPolicy"));
const Terms = lazy(() => import("pages/public/Terms"));
const Profile = lazy(() => import("pages/protected/Profile"));
const MyBets = lazy(() => import("pages/protected/MyBets"));
const Login = lazy(() => import("pages/auth/Login"));
const Register = lazy(() => import("pages/auth/Register"));
const ForgotPassword = lazy(() => import("pages/auth/ForgotPassword"));
const ResetPassword = lazy(() => import("pages/auth/ResetPassword"));
const Workers = lazy(() => import("pages/public/WorkerTest"));


const App = () => {
  const router = createHashRouter(
    createRoutesFromElements(
      <Route  path='/'  >
        {/* Public Pages */}
        <Route element={ <Default/> }>
          <Route index element={ <Suspense fallback={ <Loader /> }><Home/></Suspense> } />
          <Route path='jackpot' element={ <Suspense fallback={ <Loader /> }><Jackpot/></Suspense> } />  
          <Route path='sport/:id' element={ <Suspense fallback={ <Loader /> }><Home/></Suspense> } /> 
          <Route path='single-match/:id' element={ <Suspense fallback={ <Loader /> }><SingleMatch/></Suspense> } /> 
          <Route path='casino' element={ <Suspense fallback={ <Loader /> }><Casino /></Suspense> }/> 
          <Route path='betslip' element={ <Suspense fallback={ <Loader /> }><Betslip/></Suspense> }/> 

          <Route element={ <ProtectedRoute/> }>
            <Route path='profile' element={ <Suspense fallback={ <Loader /> }><Profile/></Suspense> }/>
            <Route path='my-bets' element={ <Suspense fallback={ <Loader /> }><MyBets/></Suspense> }/>
          </Route>
        </Route>

        <Route element={ <RenderLayout /> }>
          <Route path='jetx' element={ <Suspense fallback={ <Loader /> }><Jetx /></Suspense> }/> 
          <Route path='aviatrix' element={ <Suspense fallback={ <Loader /> }><Aviatrix /></Suspense> }/> 
        </Route>

        <Route element={ <BaseLayout /> }>
          <Route path='privacy-policy' element={ <Suspense fallback={ <Loader /> }><PrivacyPolicy /></Suspense> }/>
          <Route path='terms' element={ <Suspense fallback={ <Loader /> }><Terms /></Suspense> }/>
          <Route path='workers' element={ <Suspense fallback={ <Loader /> }><Workers /></Suspense> }/>
        </Route>

        <Route element={ <AuthLayout/> }>
          <Route path='login' element={ <Suspense fallback={ <Loader /> }><Login /></Suspense> }/> 
          <Route path='register' element={ <Suspense fallback={ <Loader /> }><Register /></Suspense> }/> 
          <Route path='forgot-password' element={ <Suspense fallback={ <Loader /> }><ForgotPassword /></Suspense> }/> 
          <Route path='reset-password' element={ <Suspense fallback={ <Loader /> }><ResetPassword /></Suspense> }/> 
        </Route>

        {/* 404 */}
        <Route path="*" element={ <NotFound/> }/> 
      </Route>
    )
  );

  return (
    <Provider store={ store }>
      <AuthProvider>
        <RouterProvider router={ router } />
      </AuthProvider>
    </Provider>
    
  );
}

export default App;