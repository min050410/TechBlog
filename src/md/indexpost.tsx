// 배열에 모든 mdx 저장
// id : post index
// title : title of post
// filename : ref post mdx
// img : img filename
// tag : post tag(max 3)

const posts = [
    {
      id: 1,
      title: 'Flask 튜토리얼',
      filename: 'Flask',
      img: 'flask',
      tag: '#python',
      tag2: '#flask',
      tag3: '#backend',

    },
    {
      id: 2,
      title: 'CORS와 해결방법',
      filename: 'Cors',
      img: 'CORS',
      tag: '#cors',
      tag2: '#frontend',
      tag3: '#backend',
    },
    {
      id: 3,
      title: 'Window 터미널 꾸미기',
      filename: 'Ohmyposh',
      img: 'ohmyposh',
      tag: '#terminal',
      tag2: '#window',
      tag3: '',
    },
    {
      id: 4,
      title: '자료구조 정리',
      filename: 'Structure',
      img: 'datastucture',
      tag: '#C',
      tag2: '#tree',
      tag3: '#graph',
    },
    {
      id: 5,
      title: 'RN camera 튜토리얼',
      filename: 'Camera',
      img: 'camera',
      tag: '#react',
      tag2: '#module',
      tag3: '',
    },
    {
      id: 6,
      title: 'TypeScript 개발일지',
      filename: 'Typescript',
      img: 'react-native',
      tag: '#react',
      tag2: '#ts',
      tag3: '',
    }
  ];

export default posts;