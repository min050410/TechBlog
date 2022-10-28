import * as React from "react";
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet'

//components
import SEOComponent from "../components/common/seoComponent/SEOComponet"
import HeaderComponent from '../components/common/headerComponent/HeaderComponent'
import PostComment from '../components/layout/comment'
import PopularComponent from '../components/layout/popularComponent/PopularComponent'
import RecentComponent from '../components/layout/recentComponent/RecentComponent'

type Props = {
  location: {
    search: string | null,
    pathname: string
  }
}

const IndexPage: React.FC<Props> = ({ location }) => {

  useEffect(() => {
    document.documentElement.lang = 'kr';
  }, []);

  return (
    <main>
      <SEOComponent title="Dev Log | Main" />
      <body>
        <HeaderComponent path={location.pathname} />
        <div className="fade_in">
          <PopularComponent />
          <RecentComponent location={location} />
        </div>
      </body>
      <div className="hide">
        <PostComment />
      </div>
    </main>
  )
}

export default IndexPage;




