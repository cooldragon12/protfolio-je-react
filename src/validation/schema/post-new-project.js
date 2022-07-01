import {object, string, mixed} from 'yup';

const postNewProject = object().shape({
    title:string().min(4).max(20).required(),
    subtitle: string().min(4).max(30),
    description: string().min(4).max(250).required(),
    image: mixed().test(),
    language: string().required(),
})

export default postNewProject;
