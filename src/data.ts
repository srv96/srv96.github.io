export interface ExperienceItem {
    period: string;
    role: string;
    company: string;
    description: string;
    position: 'left' | 'right';
}

export const experienceData: ExperienceItem[] = [
    {
        period: "2024 - present",
        role: "Senior Data Engineer",
        company: "Visa AI as a Service , Bangalore ,India",
        description: "Currently Building high-throughput ETL pipelines (40k TPS) with low-latency ( less then 2ms ) to train deep learning models for credit card fraud detection. along with that working on message bridge solution for accepting high-throughput transection from active-mq to ETL pipeline with ensuring dynamic scalability based on throughput requirements with Kubernetes.",
        position: "left"
    },
    {
        period: "2021 - 2024",
        role: "Data Engineer",
        company: "Jp Morgan Chase , Bangalore ,India",
        description: "Have worked as Data Engineer in Investment Banking Sector,Contributed to a project related to AWS migration. Apart from that Working on BigData ETL pipeline design,Data Reconciliation,Report Generation using SQL from the processed Data,Reconciling SQL disparities between legacy and modern systems for data consistency and Many more .",
        position: "right"
    },
    {
        period: "2020 - 2021",
        role: "Software Engineer",
        company: "Jp Morgan Chase , Bangalore ,India",
        description: "Worked as Software Developer in Investment Banking Sector, Worked on Data lifecycle Management, BigData Technologies, Dispute Management and Many more .",
        position: "left"
    },
    {
        period: "2019",
        role: "Software Engineer Intern",
        company: "Jp Morgan Chase , Hyderabad ,India",
        description: "It was a two month Internship , I have work on end-to-end development of Extraction-Transformation-Loading of Business Data with help of java Programming and Apache tools and had mad a GUI with angular js for representation .",
        position: "right"
    },
    {
        period: "2017-2020",
        role: "Student",
        company: "National Institute of technology Warangal",
        description: "Some years full of enthusiasm , Had meet some amazing people with similar passion , Learnt a lot of new things .",
        position: "left"
    },
    {
        period: "2013-2017",
        role: "Student",
        company: "Gangadhar Meher University ,Sambalpur , Odisha",
        description: "Done my Bachelor's degree study from this college , Where I had my speciality in Math and Computer Science. This was the time, when I found myself gradually inclined towards computers and programmings .",
        position: "right"
    },
    {
        period: "2011-2013",
        role: "Student",
        company: "Veer Surendra Sai Institue of Science , Sambalpur",
        description: "My Junior Collage, Where I have elected Physics,Chemistry,Math and Computer Science for Higher education .",
        position: "left"
    },
    {
        period: "2001-2011",
        role: "Student",
        company: "Saraswati Sishu Vidya Mandir ,Titilagarh",
        description: "A small school local to my home-town where I have got my basic education up to Xth standard.",
        position: "right"
    }
];

export interface PortfolioItem {
    filter: string;
    link: string;
    img: string;
    title: string;
}

export const portfolioData: PortfolioItem[] = [
    {
        filter: "filter-1",
        link: "https://github.com/srv96/Data-Analytics-with-python",
        img: "/img/data-analysis.png",
        title: "Data Analytics"
    },
    {
        filter: "filter-2",
        link: "https://github.com/srv96/deep-learning-model-design",
        img: "/img/neuralnet.png",
        title: "Neural Net Design"
    },
    {
        filter: "filter-3",
        link: "https://github.com/srv96/Conway-s-Game-Of-Life",
        img: "/img/gameoflife.gif",
        title: "Game Of Life"
    },
    {
        filter: "filter-1",
        link: "https://github.com/srv96/MovingAverageTrading",
        img: "/img/movingavgtrading.jpeg",
        title: "Moving Average Trading"
    },
    {
        filter: "filter-2",
        link: "https://github.com/srv96/jump-piggy-jump",
        img: "/img/piggy.gif",
        title: "Jump-Piggy-Jump"
    },
    {
        filter: "filter-3",
        link: "https://github.com/srv96/cannonFireGame",
        img: "/img/canon.jpg",
        title: "Cannon Fire Game"
    }
];
