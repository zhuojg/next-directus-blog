import Head from 'next/head'
import Layout from '../../components/layout'
import { getTypeDataById } from '../../services'

export const getServerSideProps = async ({ params }) => {
  const { data, error } = await getTypeDataById('podcasts', params.id)

  if (!!error) {
    return { props: { error: error } }
  }

  return {
    props: { data: data },
  }
}

const Podcast = ({ data, error }) => {
  return (
    <Layout>
      {!data && (
        <>
          <Head>
            <title>Not Found</title>
          </Head>
          <div className="">
            <div className="text-xl">Not Found</div>
            {!!error && <div className="text-base">{error}</div>}
          </div>
        </>
      )}
      {!!data && !error && (
        <>
          <Head>
            <title>{data.title}</title>
          </Head>
          <div className="text-5xl">{data.title}</div>
          <div className="font-mono mt-4">{data.date_created}</div>
          <div
            className="mt-4"
            dangerouslySetInnerHTML={{ __html: data.content }}
          />
        </>
      )}
    </Layout>
  )
}

export default Podcast
