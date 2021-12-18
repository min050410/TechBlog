// 배열에 모든 mdx 저장
// id : post index
// title : title of post
// filename : ref post mdx
// img : img filename
// tag : post tag(max 3)

const recent = [
    {
      id: 1,
      title: 'Flask 튜토리얼',
      filename: 'Flask',
      img: 'flask',
      date: '12월 11일',
      tag: 'python',
      tag2: 'flask',
      tag3: 'backend',
    },
    {
      id: 2,
      title: 'CORS와 해결방법',
      filename: 'Cors',
      img: 'CORS',
      date: '12월 9일',
      tag: 'cors',
      tag2: 'frontend',
      tag3: 'backend',
    },
    {
      id: 3,
      title: 'Window 터미널 꾸미기',
      filename: 'Ohmyposh',
      img: 'ohmyposh',
      date: '11월 30일',
      tag: 'terminal',
      tag2: 'window',
      tag3: '',
    },
    {
      id: 4,
      title: '자료구조 정리',
      filename: 'Structure',
      img: 'datastucture',
      date: '11월 25일',
      tag: 'C',
      tag2: 'tree',
      tag3: 'graph',
    },
    {
      id: 5,
      title: 'RN camera 튜토리얼',
      filename: 'Camera',
      date: '11월 22일',
      img: 'camera',
      tag: 'react',
      tag2: 'module',
      tag3: '',
    },
    {
      id: 6,
      title: 'TypeScript 개발일지',
      filename: 'Typescript',
      date: '11월 12일',
      img: 'react-native',
      tag: 'react',
      tag2: 'ts',
      tag3: '',
    }
  ];

export default recent;