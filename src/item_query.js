// function gatherer(url){
    
//     fetch(url)
//     .then(data => data.json)
//     .then(data =>{
//         if (!data.ok) {
//             throw new Error(data.error);
//         }
//         return data;
//     }).catch(err => console.log(err));
// }

// export const list_items = gatherer(url) === "404" ? currentItem:gatherer(url) 
import ED from './static/Photo_Project/ED.png'
import ExperiBot from './static/Photo_Project/Experimeriment Bot.png'
import Fluariste from './static/Photo_Project/fleuriste.png'

import photo1 from './static/Photo_Gallery/IMG_4672.jpg'
// import photo2 from './static/Photo_Gallery/IMG_5223.jpg'
import photo3 from './static/Photo_Gallery/IMG_5225.jpg'
import photo4 from './static/Photo_Gallery/IMG_20200312_174314.jpg'
// import photo5 from './static/Photo_Gallery/IMG_20200411_081328.jpg'
import photo6 from './static/Photo_Gallery/IMG_20200411_081428.jpg'
import photo7 from './static/Photo_Gallery/IMG_20200706_081429.jpg'
import photo8 from './static/Photo_Gallery/IMG_20201003_122318.jpg'
// import photo9 from './static/Photo_Gallery/IMG_20201129_163550.jpg'
// import photo10 from './static/Photo_Gallery/IMG_20210101_112321.jpg'
// import photo11 from './static/Photo_Gallery/IMG_20210305_150234.jpg'
// import photo12 from './static/Photo_Gallery/IMG_20210305_151015.jpg'
// import photo13 from './static/Photo_Gallery/IMG_20210305_170145.jpg'
// import photo14 from './static/Photo_Gallery/IMG_20210427_134129.jpg'
// import photo15 from './static/Photo_Gallery/IMG_20210501_083336.jpg'
// import photo16 from './static/Photo_Gallery/IMG_20210501_083447.jpg'
// import photo17 from './static/Photo_Gallery/IMG20210305173008 (1).jpg'
// import photo18 from './static/Photo_Gallery/inbound5758176825499046300.jpg'




export const GalleryItem =[
    {
        name:"Dawn of Time",
        extra_description:``,
        image:photo1,
    },
    // {
    //     name:"Little Blue Fly",
    //     extra_description:``,
        
    //     image:photo2,
    // },
    {
        name:"The Blue Fly",
        extra_description:``,
        image:photo3,
    },
    {
        name:"Lonely Leaf",
        extra_description:``,
        image:photo4,
    },
    // {
    //     name:"Plumbago auriculata",
    //     extra_description:``,
    //     image:photo5,
    // },
    {
        name:"Plumbago auriculata 2",
        extra_description:``,
        image:photo6,
    },
    {
        name:"Sunflower",
        extra_description:``,
        image:photo7,
    },
    {
        name:"Sulfur cosmos",
        extra_description:``,
        image:photo8,
    },
    // {
    //     name:"",
    //     extra_description:``,
    //     image:photo9,
    // },
    // {
    //     name:"",
    //     extra_description:``,
        
    //     image:photo10,
    // },
    // {
    //     name:"",
    //     extra_description:``,
    //     image:photo11,
    // },
    // {
    //     name:"",
    //     extra_description:``,
    //     image:photo12,
    // },
    // {
    //     name:"",
    //     extra_description:``,
    //     image:photo13,
    // },
    // {
    //     name:"",
    //     extra_description:``,
    //     image:photo14,
    // },
    // {
    //     name:"",
    //     extra_description:``,
    //     image:photo15,
    // },
    // {
    //     name:"",
    //     extra_description:``,
    //     image:photo16,
    // },
    // {
    //     name:"",
    //     extra_description:``,
    //     image:photo17,
    // },
    // {
    //     name:"",
    //     extra_description:``,
    //     image:photo18,
    // },
]
export const CurrentItem = [
    {
        name:"ED Website",
        subtitle:"News Website",
        description:`The ED Website is a news website that I made using Django Framework for backend,
        HTML, CSS, along with Javascript for Frontend. This is created for the Organization I joined. `,
        image:ED,
        credit:[
            {
                username:"@ichirovicencio",
                site:"Behance",
                link:"https://www.behance.net/ichirovicencio",
            }
        ],
        github_link:"",
        tag:["Python", "Django","Javascript"]
    },
    {
        name:"Jinx Bot",
        subtitle:"Experiment Bot",
        description:"A discord bot just have simple function like greetings and sending secret message. Just for fun. Can add more features or experiment on it.",
        image:ExperiBot,
        
        credit:[
            // {
            //     username:"",
            //     site:"",
            //     link:"",
            // }
        ],
        github_link:"",
        tag:["Python"]
    },
    {
        name:"Fleuriste",
        subtitle:"Flower Delivery App",
        description:`A Transactional App. Shop for bouquets online with no hassle. Choose from a wide variety of bouquets suited for different types of occasions by using Fleuriste.
        This app was created using React Native`,
        image:Fluariste,
        credit:[
            // {
            //     username:"",
            //     site:"",
            //     link:"",
            // },
            {
                username:"@mcassandrax",
                site:"Instagram",
                link:"https://www.instagram.com/mcassandrax",
            },
            {
                username:"@iyadesigns",
                site:"Instagram",
                link:"https://www.instagram.com/iyadesigns",
            },
            {
                username:"@iconikks25",
                site:"Instagram",
                link:"https://www.instagram.com/iconikks25/",
            },
            {
                username:"@cooldragon12",
                site:"Github",
                link:"https://github.com/cooldragon12",
            },
        ],
        github_link:"https://github.com/cooldragon12/FlowerDeliveryApp",
        tag:[
            "React Native", 
            "Javascript"]
    }
]