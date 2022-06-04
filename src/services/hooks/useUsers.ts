import { useQuery, UseQueryOptions } from "react-query"
import { api } from "../api"

// posso colocar essa tipagem tanto no useQuery pelo generic
// ou no retorno da funções getUsers como uma Promisse que inferirá o tipo
// automaticamente ao data
type User={
    id: string;
    name: string;
    email: string;
    createdAt: string;
}

type GetUserResponse = {
    totalCount: number,
    users: User[]
}

export async function getUsers(page: number, options: UseQueryOptions): Promise<GetUserResponse> {
    const { data, headers } = await api.get('/users', {
        params:{
            page,
        }
    })

    const totalCount = Number(headers['x-total-count'])

    const users = data.users.map(user => {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            createdAt: new Date(user.createdAt).toLocaleDateString('pt-br', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            })
        }
    })

    return {
        users,
        totalCount
    }
}

export function useUsers(page: number) {
    // chave da query que ficará no cache do navegador.
    return useQuery(['users', page], () => getUsers(page, {}), {
        staleTime: 1000 * 5, // 5 segundos para recarregar o cache
    })
}

// temos que mandar um parametro que irá diferir uma página da outra.