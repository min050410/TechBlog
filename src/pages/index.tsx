import * as React from "react";
import { useEffect } from 'react';
import { HeaderType } from "../components/common/headerComponent/headerTypeEnum";

//components
import SEOComponent from "../components/common/seoComponent/SEOComponet";
import HeaderComponent from '../components/common/headerComponent/HeaderComponent';
import PostComment from '../components/layout/comment';
import PopularComponent from '../components/layout/popularComponent/PopularComponent';
import RecentComponent from '../components/layout/recentComponent/RecentComponent';

const IndexPage = () => {

  return (
    <main>
      <SEOComponent title="Dev Log | Main" />
      <div>
        <HeaderComponent headerType={HeaderType.FIXED} />
        <div className="fade_in">
          <PopularComponent />
          <RecentComponent />
        </div>
      </div>
      <div className="hide">
        <PostComment />
      </div>
    </main>
  )
}

export default IndexPage;




