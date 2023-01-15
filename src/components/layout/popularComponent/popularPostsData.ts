/** 
 * id : blog index
 * title : title of blog
 * filename : blog filename
 * img : blog img filename */

export type popularPostsDataType = {
    id: number,
    title: string,
    filename: string,
    imgLineOne: string,
    imgLineTwo: string
}[];

const popularPostsData: popularPostsDataType = [
    {
        id: 1,
        title: '개인 블로그를 개발한 이유',
        filename: 'Blog',
        imgLineOne: '',
        imgLineTwo: 'My Blog'
    },
    {
        id: 2,
        title: 'CORS와 해결방법',
        filename: 'Cors',
        imgLineOne: '',
        imgLineTwo: 'CORS'
    },
    {
        id: 15,
        title: '다익스트라 알고리즘',
        filename: 'Dijkstra',
        imgLineOne: '',
        imgLineTwo: 'Dijkstra',
    },
    {
        id: 16,
        title: '플로이드 워셜 알고리즘',
        filename: 'Floyed-warshell',
        imgLineOne: 'Floyed',
        imgLineTwo: 'Warshell',
    },
    {
        id: 17,
        title: 'KMP 알고리즘 정리',
        filename: 'KMP',
        imgLineOne: '',
        imgLineTwo: 'KMP',
    },
    {
        id: 13,
        title: '클린 아키텍처에 대해 알아보자',
        filename: 'The-clean-architecture',
        imgLineOne: 'Clean',
        imgLineTwo: 'Architecture',
    },
    {
        id: 1,
        title: '개인 블로그를 개발한 이유',
        filename: 'Blog',
        imgLineOne: '',
        imgLineTwo: 'My Blog'
    },
    {
        id: 2,
        title: 'CORS와 해결방법',
        filename: 'Cors',
        imgLineOne: '',
        imgLineTwo: 'CORS'
    },
    {
        id: 15,
        title: '다익스트라 알고리즘',
        filename: 'Dijkstra',
        imgLineOne: '',
        imgLineTwo: 'Dijkstra',
    },
    {
        id: 16,
        title: '플로이드 워셜 알고리즘',
        filename: 'Floyed-warshell',
        imgLineOne: 'Floyed',
        imgLineTwo: 'Warshell',
    },
    {
        id: 17,
        title: 'KMP 알고리즘 정리',
        filename: 'KMP',
        imgLineOne: '',
        imgLineTwo: 'KMP',
    },
    {
        id: 13,
        title: '클린 아키텍처에 대해 알아보자',
        filename: 'The-clean-architecture',
        imgLineOne: 'Clean',
        imgLineTwo: 'Architecture',
    }
];

export default popularPostsData;