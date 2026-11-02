import InternHeader from "../headers/InternHeader";
import { Outlet } from "react-router-dom";

export default function InternPageLayout() {
  return (
    <>
      <InternHeader />
      <Outlet />
    </>
  );
}
