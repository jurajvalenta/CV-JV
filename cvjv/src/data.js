// Return today's date and time
const currentTime = new Date()

// returns the year (four digits)
const actualYear = currentTime.getFullYear()

export const infoBlocks = [
    {
        id: 1,
        type: "school",
        title: "Master's degree",
        subject: "Teaching of Physical Education and Teaching of Information Technology",
        place: "University of Matej Bel - faculty of phylosophy",
        adress:"Banská Bystrica, Tajovského 40",
        years: "2015-2017"

    },
    {
        id: 2,
        type: "school",
        title: "Bachelor's degree",
        subject: "Teaching of Physical Education and Teaching of Information Technology",
        place: "University of Matej Bel - faculty of phylosophy",
        adress:"Banská Bystrica, Tajovského 40",
        years: "2012-2015"
    },
    {
        id: 3,
        type: "school",  
        title: "High school",
        subject: "Mechanic of computer networks",
        place: "Spojená stredná odborná škola elektrotechnická",
        adress:"Banská Bystrica, Zvolenská cesta 18",
        years: "2008-2012"

    },
    {
        id: 4,
        type: "job",  
        title: "Teacher",
        subject: "Teaching of Physical Education and Teaching of Information Technology",
        place: "Základná škola Hrnčiarska",
        adress:"Zvolen, Hrnčiarska 1",
        years: "2020-" + actualYear

    },
    
    {
        id: 5,
        type: "job",  
        title: "Freelancer",
        subject: "Web design, templates, technical management of e-shops and websites",
        place: "Side Job",
        adress:"Home office",
        years: "2015-2022"

    },
    {
        id: 6,
        type: "job",  
        title: "Self-employed person",
        subject: "Assistant coach of the Slovak national team and head of the service team",
        place: "Slovenský zväz biatlonu",
        adress:"Partizánska cesta 3501/71, Banská Bystrica",
        years: "2016-2020"

    },
    {
        id: 7,
        type: "job",  
        title: "Staffline",
        subject: "Warehouse Picker",
        place: "",
        adress:"Tesco Extra store - Reading, UK",
        years: "April - June 2019"

    },

    {
        id: 8,
        type: "job",  
        title: "WaT - Illinois, USA",
        subject: "Houskeeping, Set-up",
        place: "Grand Geneva Resort & SPA",
        adress:"7036 Grand Geneva Way, Lake Geneva, WI 53147, USA",
        years: "June - Okt. 2016/2017"

    },
];

 
export const contact = [ 
    {
        id: 1,
        name: "Juraj VALENTA",
        email: "jurajvalenta@gmail.com",
        phone: "+421 915 129 626",
        residence: "Banská Bystrica, Slovakia",
        location: "https://goo.gl/maps/3UXnT7UuuUjBeYpK8"
    },

];


export const languageSkills = [
    {
        id: 1,
        language: "Slovak",
        level: "100",
        class: "hundret"
    },
    {
        id: 2,
        language: "English",
        level: "70",
        class: "seventy"
    },
    {
        id: 3,
        language: "German",
        level: "25",
        class: "twentyfive"
    },
];


export const extraSkills = [
    {
        id: 1,
        title: "Driving license",
        drivingLicense: "B, B1",
    },
];


export const skills = [
    {
        id: 1,
        name: "ReactJS",
        level: "80%",
        class: "eighty"
    },
    {
        id: 2,
        name: "JavaScript",
        level: "70%",
        class: "seventy"
    },
    {
        id: 3,
        name: "TypeScript",
        level: "60%",
        class: "sixty"
    },
    {
        id: 4,
        name: "PHP",
        level: "70%",
        class: "seventy"
    },

    {
        id: 5,
        name: "HTML",
        level: "80%",
        class: "eighty"
    },
    {
        id: 6,
        name: "CSS",
        level: "70%",
        class: "seventy"
    },
    {
        id: 7,
        name: "SQL",
        level: "70%",
        class: "seventy"
    },
    {
        id: 8,
        name: "Prestashop",
        level: "90%",
        class: "ninety"
    },
    {
        id: 9,
        name: "Wordpress",
        level: "80%",
        class: "eighty"
    },
    {
        id: 10,
        name: "Photoshop",
        level: "80%",
        class: "eighty"
    },
    {
        id: 11,
        name: "Illustrator",
        level: "80%",
        class: "eighty"
    },
];


export const certificates = [ 
    {
        name: "CCNA EXPLORATION",
        subject: "Network Fundamentals",
    },
    {
        name: "CCNA EXPLORATION",
        subject: "Routing Protocols and Concepts",
    },

];