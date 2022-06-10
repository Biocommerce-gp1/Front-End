interface UserLogin {
    id: number;
    usuario: string;
    senha: string;
    tipo?: string | null;
    token?: string| null
}

export default UserLogin;





