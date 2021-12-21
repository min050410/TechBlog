// 배열에 모든 mdx 저장
// id : post index
// title : title of post
// filename : ref post mdx
// img : img filename
// tag : post tag(max 3)

const recent = [
    {
      id: 1,
      title: '개발자를 위한 알고리즘 요약',
      filename: 'Algorithm',
      img: 'algorithm',
      date: '12월 20일',
      tag: 'Big O',
      tag2: 'sort',
      tag3: 'DP',
    },
    {
      id: 2,
      title: 'Window 터미널 꾸미기',
      filename: 'Ohmyposh',
      img: 'ohmyposh',
      date: '12월 18일',
      tag: 'terminal',
      tag2: 'window',
      tag3: '',
    },
    {
      id: 3,
      title: '자료구조 정리',
      filename: 'Structure',
      img: 'datastucture',
      date: '12월 17일',
      tag: 'C',
      tag2: 'tree',
      tag3: 'graph',
    },
    {
      id: 4,
      title: 'Flask 튜토리얼',
      filename: 'Flask',
      img: 'flask',
      date: '12월 11일',
      tag: 'python',
      tag2: 'flask',
      tag3: 'backend',
    },
    {
      id: 5,
      title: 'CORS와 해결방법',
      filename: 'Cors',
      img: 'CORS',
      date: '12월 9일',
      tag: 'cors',
      tag2: 'frontend',
      tag3: 'backend',
    },
    {
      id: 6,
      title: 'RN camera 적용법',
      filename: 'Camera',
      date: '11월 26일',
      img: 'camera',
      tag: 'react-native',
      tag2: 'module',
      tag3: 'camera',
    },
    {
      id: 7,
      title: '타입스크립트를 많이 쓰는 이유',
      filename: 'Typescript',
      date: '11월 17일',
      img: 'typescript',
      tag: 'react',
      tag2: 'ts',
      tag3: '',
    }
  ];

export default recent;