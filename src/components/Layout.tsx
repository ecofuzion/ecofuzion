import * as React from "react"
import {Helmet} from "react-helmet";
import Navigation from "./Navigation";
import './Layout.scss'
import Footer from "./Footer";
import ShutterPage from "./ShutterPage";
import {Features} from "../Features";


interface LayoutParams {
    pageTitle: string
    children: React.ReactNode;
}

const Layout = ({ pageTitle, children } : LayoutParams) => {
    return (Features.isShuttered ? <ShutterPage /> :
        <div>
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <title>{pageTitle}</title>
            </Helmet>
            <Navigation />
            <main>
                <div className="start parallax"/>
                {children}
                <div className="parallax"/>
            </main>
            <Footer />
        </div>
    )
}
export default Layout