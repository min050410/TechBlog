// 배열에 모든 mdx 정보 저장
// id : blog index
// title : title of blog
// filename : blog filename
// img : blog img filename
// tag : blog tag(max 3)
// filter : filter tag

const recent: {
  id: number,
  title: string,
  filename: string,
  imgLineOne: string,
  imgLineTwo: string,
  date: string,
  tag: string,
  tag2: string,
  tag3: string,
  filter: string,
}[] = [
    {
      id: 1,
      title: '타입스크립트를 많이 쓰는 이유',
      filename: 'Typescript',
      date: '2021-11-17',
      imgLineOne: 'Why',
      imgLineTwo: 'typescript?',
      tag: 'react',
      tag2: 'ts',
      tag3: '',
      filter: 'react'
    },
    {
      id: 2,
      title: 'RN camera 적용법',
      filename: 'Camera',
      date: '2021-11-26',
      imgLineOne: 'React-Native',
      imgLineTwo: 'Camera',
      tag: 'react-native',
      tag2: 'module',
      tag3: 'camera',
      filter: 'react'
    },
    {
      id: 3,
      title: 'CORS와 해결방법',
      filename: 'Cors',
      imgLineOne: '',
      imgLineTwo: 'CORS',
      date: '2021-12-09',
      tag: 'cors',
      tag2: 'frontend',
      tag3: 'backend',
      filter: 'backend'
    },
    {
      id: 4,
      title: 'Flask 튜토리얼',
      filename: 'Flask',
      imgLineOne: 'Python',
      imgLineTwo: 'Flask',
      date: '2021-12-11',
      tag: 'python',
      tag2: 'flask',
      tag3: 'backend',
      filter: 'python'
    },
    {
      id: 5,
      title: '비선형구조 정리',
      filename: 'NonLinear',
      imgLineOne: '',
      imgLineTwo: 'Non-Linear',
      date: '2021-12-17',
      tag: 'C',
      tag2: 'tree',
      tag3: 'graph',
      filter: 'c'
    },
    {
      id: 6,
      title: 'Window 터미널 꾸미기',
      filename: 'Ohmyposh',
      imgLineOne: 'Oh My',
      imgLineTwo: 'Posh',
      date: '2021-12-18',
      tag: 'terminal',
      tag2: 'window',
      tag3: '',
      filter: 'etc'
    },
    {
      id: 7,
      title: 'Big-O 표기법과 수행',
      filename: 'Algorithm',
      imgLineOne: '',
      imgLineTwo: 'Big-O',
      date: '2021-12-20',
      tag: 'Big O',
      tag2: 'sort',
      tag3: 'DP',
      filter: 'c'
    },
    {
      id: 8,
      title: '개인 블로그를 개발한 이유',
      filename: 'Blog',
      date: '2022-1-9',
      imgLineOne: '',
      imgLineTwo: 'My Blog',
      tag: 'blog',
      tag2: 'gatsby',
      tag3: 'ts',
      filter: 'react'
    },
    {
      id: 9,
      title: 'C++ 예외처리 매커니즘 - try, catch',
      filename: 'Cpp-exception',
      date: '2022-3-2',
      imgLineOne: 'C++',
      imgLineTwo: 'Exception',
      tag: 'cpp',
      tag2: 'exception',
      tag3: 'try, catch',
      filter: 'cpp'
    },
    {
      id: 10,
      title: '힙 정렬에 대해 알아보자',
      filename: 'Heapsort',
      date: '2022-3-21',
      imgLineOne: '',
      imgLineTwo: 'Heap sort',
      tag: 'cpp',
      tag2: 'algorighm',
      tag3: '',
      filter: 'cpp'
    },
    {
      id: 11,
      title: 'Type-Alias 타입 앨리어스란?',
      filename: 'Type-alias',
      date: '2022-4-30',
      imgLineOne: '',
      imgLineTwo: 'Type-alias',
      tag: 'ts',
      tag2: 'type',
      tag3: 'interface',
      filter: 'ts'
    },
    {
      id: 12,
      title: 'IoC: 제어의 역전',
      filename: 'Ioc',
      date: '2022-5-25',
      imgLineOne: '',
      imgLineTwo: 'IOC',
      tag: 'spring',
      tag2: '',
      tag3: '',
      filter: 'java'
    },
    {
      id: 13,
      title: '클린 아키텍처에 대해 알아보자',
      filename: 'The-clean-architecture',
      date: '2022-5-30',
      imgLineOne: 'Clean',
      imgLineTwo: 'Architecture',
      tag: 'architecture',
      tag2: 'dependency',
      tag3: '', 
      filter: 'architecture'
    },
    {
      id: 14,
      title: 'SQL 개발자 자격증 취득 후기',
      filename: 'Sql-developer',
      date: '2022-6-20',
      imgLineOne: '',
      imgLineTwo: 'SQLD',
      tag: 'sql',
      tag2: 'certification',
      tag3: '', 
      filter: 'sql'
    },
    {
      id: 15,
      title: '다익스트라 알고리즘 정리',
      filename: 'Dijkstra',
      date: '2022-8-18',
      imgLineOne: '',
      imgLineTwo: 'Dijkstra',
      tag: 'algorithm',
      tag2: 'cpp',
      tag3: '', 
      filter: 'cpp'
    },
    {
      id: 16,
      title: '플로이드 워셜 알고리즘 정리',
      filename: 'Floyed-warshell',
      date: '2022-8-28',
      imgLineOne: 'Floyed',
      imgLineTwo: 'Warshell',
      tag: 'algorithm',
      tag2: 'cpp',
      tag3: '', 
      filter: 'cpp'
    },
    {
      id: 17,
      title: 'KMP 알고리즘 정리',
      filename: 'KMP',
      date: '2022-8-31',
      imgLineOne: '',
      imgLineTwo: 'KMP',
      tag: 'algorithm',
      tag2: 'cpp',
      tag3: '', 
      filter: 'cpp'
    }
  ];


export default recent;
