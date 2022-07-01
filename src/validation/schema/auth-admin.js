import {object, string} from 'yup';

const authgAdmin = object().shape({
    username: string().required(),
    password: string().required()
})

export default authgAdmin;
