import {useState} from 'react';

export const useForm = (callback,initaialState = {}) =>{
    const [values,setValues] = useState(initaialState);
    const onChange = e => setValues({...values,[e.target.name]:e.target.value});

    const onSubmit = e =>{
       
        e.preventDefault();
        callback();
    }

    return{
        values,
        onChange,
        onSubmit
    }
}