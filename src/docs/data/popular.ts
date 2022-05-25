// 배열에 모든 mdx 정보 저장
// id : blog index
// title : title of blog
// filename : blog filename
// img : blog img filename

const popular: {
  id: number,
  title: string,
  filename: string,
  img: string
}[] = [
    {
      id: 1,
      title: 'Flask 튜토리얼',
      filename: 'Flask',
      img: 'flask',
    },
    {
      id: 2,
      title: 'CORS와 해결방법',
      filename: 'Cors',
      img: 'CORS',
    },
    {
      id: 3,
      title: 'Window 터미널 꾸미기',
      filename: 'Ohmyposh',
      img: 'ohmyposh',
    },
    {
      id: 4,
      title: '비선형구조 정리',
      filename: 'NonLinear',
      img: 'datastucture',
    },
    {
      id: 5,
      title: 'RN camera 적용법',
      filename: 'Camera',
      img: 'camera',
    },
    {
      id: 6,
      title: '왜 typescript인가?',
      filename: 'Typescript',
      img: 'typescript',
    }
  ];

export default popular;