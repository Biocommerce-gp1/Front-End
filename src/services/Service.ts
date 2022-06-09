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
export const busca = async(url: any, setDados: any, header: any) => {
    const resposta = await api.get(url, header)
    setDados(resposta.data)
}
export const buscaId = async(url: any, setDados: any, header: any) => {
    const resposta = await api.get(url, header)
    setDados(resposta.data)
}

export const post = async(url: any, dados: any, setDados: any, header: any) => {
    const resposta = await api.post(url, dados, header)
    setDados(resposta.data)
}

export const put = async(url: any, dados: any, setDados: any, header: any) => {
    const resposta = await api.put(url, dados, header)
    setDados(resposta.data)
}

export const deleteId = async(url: any, header: any) => {
    await api.delete(url, header)
}



