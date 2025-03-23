import { Usuario } from "@prisma/client";

const usuarios: Usuario[] = [
    {
        id: "1",
        email: "ana@empresa.com.br",
        nome: "Ana",
        senha: "123456"
    },
    {
        id: "2",
        email: "pedro@empresa.com.br",	
        nome: "Pedro",
        senha: "123456"
    },
    {
        id: "3",
        email: "maria@empresa.com.br",
        nome: "Maria",
        senha: "123456"
    },
    {
        id: "4",
        email: "augusto@empresa.com.br",	
        nome: "Augusto",
        senha: "123456"
    },
    {
        id: "5",
        email: "joao@empresa.com.br",
        nome: "João",
        senha: "123456"
    }, 
    {
        id: "6",
        email: "amanda@empresa.com.br",
        nome: "Amanda",
        senha: "123456"
    }
];

export default usuarios;