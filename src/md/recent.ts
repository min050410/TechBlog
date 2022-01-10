// 배열에 모든 mdx 정보 저장
// id : blog index
// title : title of blog
// filename : blog filename
// img : blog img filename
// tag : blog tag(max 3)
// filter : filter tag

const recent = [
  {
    id: 1,
    title: 'Big-O 표기법과 수행',
    filename: 'Algorithm',
    img: 'algorithm',
    date: '2021-12-20',
    tag: 'Big O',
    tag2: 'sort',
    tag3: 'DP',
    filter: 'c'
  },
  {
    id: 2,
    title: 'Window 터미널 꾸미기',
    filename: 'Ohmyposh',
    img: 'ohmyposh',
    date: '2021-12-18',
    tag: 'terminal',
    tag2: 'window',
    tag3: '',
    filter: 'etc'
  },
  {
    id: 3,
    title: '비선형구조 정리',
    filename: 'Structure',
    img: 'datastucture',
    date: '2021-12-17',
    tag: 'C',
    tag2: 'tree',
    tag3: 'graph',
    filter: 'c'
  },
  {
    id: 4,
    title: 'Flask 튜토리얼',
    filename: 'Flask',
    img: 'flask',
    date: '2021-12-11',
    tag: 'python',
    tag2: 'flask',
    tag3: 'backend',
    filter: 'python'
  },
  {
    id: 5,
    title: 'CORS와 해결방법',
    filename: 'Cors',
    img: 'CORS',
    date: '2021-12-09',
    tag: 'cors',
    tag2: 'frontend',
    tag3: 'backend',
    filter: 'backend'
  },
  {
    id: 6,
    title: 'RN camera 적용법',
    filename: 'Camera',
    date: '2021-11-26',
    img: 'camera',
    tag: 'react-native',
    tag2: 'module',
    tag3: 'camera',
    filter: 'react'
  },
  {
    id: 7,
    title: '타입스크립트를 많이 쓰는 이유',
    filename: 'Typescript',
    date: '2021-11-17',
    img: 'typescript',
    tag: 'react',
    tag2: 'ts',
    tag3: '',
    filter: 'react'
  }
];


export default recent;