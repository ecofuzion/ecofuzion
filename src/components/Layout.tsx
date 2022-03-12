import * as React from "react"
import Navigation from "./Navigation";
import './Layout.sass'


interface LayoutParams {
    pageTitle: string
    children: React.ReactNode;
}

const Layout = ({ pageTitle, children } : LayoutParams) => {
    return (
        <div>
            <title>{pageTitle}</title>
            <Navigation />
            <main>
                {children}
            </main>
        </div>
    )
}
export default Layout