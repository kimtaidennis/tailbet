import { Outlet } from "react-router-dom";
import Header from "components/common/header";
import Nav from "components/common/nav";
import FooterSection from "components/common/footer";
import FooterNav from "components/common/footerNav";

export default function Default() {
  return (
    <>
      <Header />
      <Nav />
      <Outlet />
      <FooterSection/>
      <FooterNav />
    </>
  )
}
