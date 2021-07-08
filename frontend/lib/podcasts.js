import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

const client = new ApolloClient({
  uri: process.env.SERVICE_URL,
  cache: new InMemoryCache(),
})

export const getPodcastData = async (id) => {
  const result = await client
    .query({
      query: gql`
      query {
        podcasts_by_id(id: ${id}) {
          title
          content
          date_created
        }
      }
    `,
    })
    .then((res) => res)
    .catch((err) => err)

  const { data } = result

  if (!data) {
    return { error: 'Server Error.' }
  }

  return { data: data['podcasts_by_id'] }
}

export const getAllPodcastsBasicInfo = async () => {
  const result = await client
    .query({
      query: gql`
        query {
          podcasts {
            id
            title
          }
        }
      `,
    })
    .then((res) => res)
    .catch((err) => err)

  const { data } = result

  if (!data) {
    return { error: 'Server Error.' }
  }

  return { data: data['podcasts'] }
}
