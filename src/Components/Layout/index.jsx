import React from "react";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
export const LayoutContent = (props) => {
    const {children,listMenu,logo} = props;
    return (
        <>
        <Navbar listMenu={listMenu} logo={logo} />
        <div className="container min-h-screen mx-auto bg-gray-400">
        {children}
        </div>
        <Footer listMenu={listMenu} logo={logo}/>
        </>
    )
}