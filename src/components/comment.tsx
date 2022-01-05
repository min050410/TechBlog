import React, { useRef, useEffect } from 'react';

const utterancesSettings = {
    src: 'https://utteranc.es/client.js',
    repo: 'min050410/TechBlog',
    'issue-term': 'title',
    label: 'utterances',
    theme: 'dark-blue',
    crossorigin: 'anonymous',
    async: 'false',
};
  
  const PostComment = () => {
    const ref = useRef(null);

    useEffect(() => {
      if (ref.current !== null) {
        const utterances = document.createElement('script');
        Object.entries(utterancesSettings).forEach(([key, value]) => {
          utterances.setAttribute(key, value);
        });
        ref.current.appendChild(utterances);
      }
    }, []);
    return <div ref={ref}></div>;
  };

export default PostComment;