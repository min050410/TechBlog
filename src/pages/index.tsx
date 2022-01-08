import * as React from "react";
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet'

//components
import Header from '../components/header'
import PostComment from '../components/comment'
import Popular_components from '../components/popular'
import Recent_components from '../components/recent'

const IndexPage = ({location}) => {
  useEffect(() => {
    document.documentElement.lang = 'kr';
  }, []);

  return (
    <main>
      <Helmet>
        <title>Dev Log | Main</title>
        <meta name="google-site-verification" content="Vfqlx3gjgzF7VwfWKG3BDziWEL76_QpnF4LvF0bgj8I" />
        <meta name="description" content="Dev Log - 고등학교 1학년 재학생이 만든 프로그래밍과 관련된 갖가지 정보들과 에러 해결 방법 등을 모아놓은 블로그입니다." />
      </Helmet>
      <body>
        <Header path={location.pathname}/>
        <div className="fade_in">
          <Popular_components/>
          <Recent_components location={location}/>
        </div>
      </body>
    </main>
  )
}

export default IndexPage;




