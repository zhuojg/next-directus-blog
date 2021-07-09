import Head from 'next/head'
import Layout from '../../components/layout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { getTypeDataById } from '../../services'

export const getServerSideProps = async ({ params, locale }) => {
  const { data, error } = await getTypeDataById('podcasts', params.id)

  if (!!error) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ['common'])),
        error: error,
      },
    }
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      data: data,
    },
  }
}

const Podcast = ({ data, error }) => {
  return (
    <Layout error={!!error || !data}>
      {!!data && (
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
