import * as React from 'react';
import {Link} from 'gatsby';

const Layout = (props: { pageTitle: string; children: any; }) => {
    const pageTitle = props.pageTitle
    const children = props.children
    return(
        <div>
            <title>{pageTitle}</title>
            <nav>
                <ul>
                    <li><Link to="/">Homw</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
            <main>
                <h1>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}
export default Layout