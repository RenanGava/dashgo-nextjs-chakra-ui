import { createServer, Factory, Model, Response, ActiveModelSerializer } from 'miragejs'
import { faker } from '@faker-js/faker'
type User = {
    name: string
    email: string
    created_at: string
}


export function makeServer() {
    const server = createServer({
        serializers:{
            application: ActiveModelSerializer,
        },

        models: {
            user: Model.extend<Partial<User>>({})
        },

        factories: {
            user: Factory.extend({
                name(i: number) {
                    return `User ${i + 1}`
                },
                email() {
                    return faker.internet.email().toLowerCase()
                },
                createdAt() { 
                    return faker.date.recent(10)
                },
            })
        },

        seeds(server) {
            server.createList('user', 200)
        },

        routes() {
            this.namespace = 'api'
            this.timing = 750 // para ter um delay na resposta é em (ms)

            this.get('/users', function (schema, request){
                const { page = 1, per_page = 10 } = request.queryParams

                const totalUsers = schema.all('user').length

                const pageStart = (Number(page) - 1) * Number(per_page)
                const pageEnd = pageStart + Number(per_page)

                const users = this.serialize(schema.all('user')).users.slice(pageStart, pageEnd)
                console.log(users);
                
                return new Response(
                    200,
                    {'x-total-count': String(totalUsers)},
                    { users }
                )
            })

            this.get('/users/:id')
            this.post('/users')

            // para não dar conflito com as rotas de api na psta pages
            // declaramos o namespace aqui no final como em branco novamente
            // podemos também utilizar o namespaece diferente para isso não acontecer

            this.namespace = ''
            this.passthrough()
        }
    })

    return server
}
