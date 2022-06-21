import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri:'https://api-sa-east-1.graphcms.com/v2/cl4ol9azz0bpt01xtavoo9tr5/master',
    cache: new InMemoryCache()
})