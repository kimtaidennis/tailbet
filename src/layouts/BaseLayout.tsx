import { Outlet } from "react-router-dom";
import Header from "components/common/header";
import Nav from "components/common/nav";
import FooterSection from "components/common/footer";

export default function BaseLayout() {
  return (
    <>
        <Header />
        <Nav />
        <Outlet />
        <FooterSection/>
    </>
  )
}