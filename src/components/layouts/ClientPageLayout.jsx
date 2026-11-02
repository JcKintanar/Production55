import ClientHeader from "../headers/ClientHeader";
import { Outlet } from "react-router-dom";
import ClientFooter from "../footers/ClientFooter";

export default function ClientPageLayout() {
  return (
    <>
      <ClientHeader />
      <Outlet />
      <ClientFooter />
    </>
  );
}
