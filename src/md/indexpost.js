// useState 배열에 모든 mdx 저장
// list of save
// title of post
// post index
// post mdx - filename
// img - filename
// post tag

const posts = [
    {
      id: 1,
      title: 'Flask 개발일지',
      filename: 'Flask',
      img: 'flask',
      tag: '#python',
      tag2: '#flask',
      tag3: '#backend',

    },
    {
      id: 2,
      title: 'React-native 개발일지',
      filename: 'React-native',
      img: 'react-native',
      tag: '#mobile',
      tag2: '#hook',
      tag3: '#java-script',
    },
    {
      id: 3,
      title: 'TypeScript 개발일지',
      filename: 'Typescript',
      img: 'typescript',
      tag: '#react',
      tag2: '#type-define',
      tag3: '',
    }
  ];

export default posts;