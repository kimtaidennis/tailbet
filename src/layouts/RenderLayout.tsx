import { Outlet,useNavigate } from "react-router-dom";
import Header from "components/common/header";
import Nav from "components/common/nav";
import FooterSection from "components/common/footer";
import FooterNav from "components/common/footerNav";

export default function RenderLayout() {
  const navigate = useNavigate();
  return (
    <>
        <div className="hidden lg:block">
            <Header />
            <Nav />
            <Outlet />
            <FooterSection/>
            <FooterNav />
        </div>
        <div className="block lg:hidden">
            <div className="flex items-center px-2 py-3" onClick={ () => navigate(-1) }>
              <i className="icofont-bubble-left"></i>
              <span className="font-semibold">Back</span>
            </div>
            <Outlet />
        </div>
    </>
  )
}