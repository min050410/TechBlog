/**
 * id : blog index
 * title : title of blog
 * filename : blog filename
 * img : blog img filename */

export type projectCardsDataType = {
    id: number;
    stack: string;
    name: string;
    date: {
        month: string;
        year: string;
    };
    logo: string;
}[];

const projectCardsData: projectCardsDataType = [
    {
        id: 1,
        stack: "fullstack",
        name: "2048",
        date: { month: "APR", year: "2022" },
        logo: "->",
    },
];

export default projectCardsData;
