import { apiSlice} from './apiSlice.js'
const USERS_URL = '/api/users'
const CARDS_URL = '/api/cards'

const appApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data)=> ({
                url: `${USERS_URL}/login`,
                method: "POST",
                body: data

            }),
           
        }),
        registration: builder.mutation({
            query: (data)=> ({
                url: `${USERS_URL}/register`,
                method: "POST",
                body: data
            }),
        }),
        getCards: builder.query({
            query: ()=> ({
                url: `${CARDS_URL}` }),
        }),
    })
})

export const {
    useLoginMutation,
    useRegistrationMutation, 
    useGetCardsQuery
} = appApiSlice