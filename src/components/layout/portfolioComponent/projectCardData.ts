/**
 * id : blog index
 * title : title of blog
 * filename : blog filename
 * img : blog img filename */

export type projectCardsDataType = {
    id: number;
    filename: string;
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
        filename: "Project-2048",
        stack: "fullstack",
        name: "2048",
        date: { month: "APR", year: "2022" },
        logo: "->",
    },
    {
        id: 2,
        filename: "Project-Tech2",
        stack: "front, server",
        name: "TechBlog1",
        date: { month: "APR", year: "2022" },
        logo: "->",
    },
    {
        id: 3,
        filename: "Project-Tech3",
        stack: "front, server",
        name: "TechBlog2",
        date: { month: "APR", year: "2022" },
        logo: "->",
    },
    {
        id: 4,
        filename: "Project-Techblog",
        stack: "front, server",
        name: "TechBlog3",
        date: { month: "APR", year: "2022" },
        logo: "->",
    },
    {
        id: 5,
        filename: "Project-Techblog",
        stack: "front, server",
        name: "TechBlog4",
        date: { month: "APR", year: "2022" },
        logo: "->",
    },
];

export default projectCardsData;
