import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: "Parkinson's Disease Prediction System",
        description: "Machine learning project aimed at predicting Parkinson's disease based on various input features. The project utilizes Python and machine learning techniques to analyze and predict outcomes based on provided datasets.",
        tools: ['Python', 'Sklearn', 'Jupyter',  'Pandas', 'NumPy'],
        role: 'ML Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Port Scanner App',
        description: 'The Port Scanner Project allows users to scan ports on a target host within a specified range. It provides a user-friendly interface where users can enter the target host, start port, and end port, and initiate the scanning process with the click of a button. The scanning results are displayed in real-time on the web page, indicating whether each port is open or closed.',
        tools: ['Python', 'Flask', "HTML", "CSS", "JavaScript", "SMTP"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },