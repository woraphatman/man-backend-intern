import {object, string,number} from 'yup'

interface Movie {
    id: number;
    name: string;
    description : string;
    image: string;

}
export default object ({
    id: number().required(),
    name: string().required(),
    description : string().max(255).min(15).required(),
    image: string().url("Must be a vaild URL.png").required(),
    
})