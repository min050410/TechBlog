import * as React from "react";
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet'

//components
import SEO from "../components/SEO"
import Header from '../components/header'
import PostComment from '../components/comment'
import Popular_components from '../components/popular'
import Recent_components from '../components/recent'

type Props = {
  location: {
      search: string | null,
      pathname: string
  }
}

const IndexPage: React.FC<Props> = ({ location }) => {
  
  //<html lang="kr">
  useEffect(() => {
    document.documentElement.lang = 'kr';
  }, []);

  return (
    <main>
      <SEO title="Dev Log | Main"/>
      <body>
        <Header path={location.pathname}/>
        <div className="fade_in">
          <Popular_components/>
          <Recent_components location={location}/>
        </div>
      </body>
      <div className="hide">
        <PostComment/>
      </div>
    </main>
  )
}

export default IndexPage;




