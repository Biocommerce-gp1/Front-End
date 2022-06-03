import axios from 'axios';

export const api= axios.create({
    baseURL:'http://biocommerce.herokuapp.com/'
})

//cadastro usuário:
export const cadastroUsuario = async(url: any,dados: any,setDado: any) => { 
    const resposta = await api.post(url,dados)
    setDado(resposta.data)
}

//login:
export const login = async(url: any,dados: any,setDado: any) => { 
    const resposta = await api.post(url,dados)
    setDado(resposta.data.token)
}




