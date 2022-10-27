import * as React from "react"
import { Helmet } from 'react-helmet'

type SEOComponentProps = {
    title: string;
}

const SEOComponent: React.FC<SEOComponentProps> = ({ title }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="google-site-verification" content="Vfqlx3gjgzF7VwfWKG3BDziWEL76_QpnF4LvF0bgj8I" />
            <meta name="description" content="Dev Log - 기술 블로그" />
        </Helmet>
    )
}
export default SEOComponent;