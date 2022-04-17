import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from "axios";
import {Form, Input, Button} from "./styles";

const Login = ({setStatus, setIsRequested}) => {

    const formSchema = yup.object().shape({
        username: yup.string().required("Campo obrigatório"),
        password: yup.string().required("Campo obrigatório"),
    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(formSchema)
    })

    const handleForm = (data) => {
        axios.post('https://kenzieshop.herokuapp.com/sessions/', data)
        .then((response) => {
            setStatus(true)
            setIsRequested(true)
        })
        .catch((err) => {
            setStatus(false)
            setIsRequested(true)
        })
    }

    return(
        <div>
            <Form onSubmit={handleSubmit(handleForm)}>
                <Input placeholder="Nome de usuário" {...register("username")} />
                <Input placeholder="Senha" {...register("password")} />
                <Button type="submit">ENTRAR</Button>
            </Form>
        </div>
        
    )
}
export default Login