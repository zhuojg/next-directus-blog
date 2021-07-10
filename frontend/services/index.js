import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

const client = new ApolloClient({
  uri: process.env.SERVICE_URL,
  cache: new InMemoryCache(),
})

export const getTypeDataById = async (type, id) => {
  const result = await client
    .query({
      query: gql`
        query {
          ${type}_by_id(id: "${id}") {
            title
            content
            date_created
            date_updated
          }
        }
      `,
    })
    .then((res) => res)
    .catch((err) => err)

  const { data } = result

  if (!data) {
    return { error: 'SERVER_ERROR_MESSAGE' }
  }

  return { data: data[`${type}_by_id`] }
}

export const getAllTypeBasicInfo = async (type) => {
  const result = await client
    .query({
      query: gql`
        query {
          ${type} {
            id
            title
            date_created
          }
        }
      `,
    })
    .then((res) => res)
    .catch((err) => err)

  const { data } = result

  if (!data) {
    return { error: 'SERVER_ERROR_MESSAGE' }
  }

  return { data: data[type] }
}
