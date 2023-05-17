import { AppBar } from "components/AppBar/AppBar";
import { Suspense } from "react";

import {Outlet} from "react-router-dom"
import { ContainerLayout } from "./Layout.styled";


export const Layout = () => {
  return (
    <ContainerLayout>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </ContainerLayout>
  );
};




