import Head from 'next/head'
import { useRouter } from 'next/router'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Layout from '../../components/layout'
import { getAllTypeBasicInfo } from '../../services'

export const getServerSideProps = async ({ params, locale }) => {
  const { data, error } = await getAllTypeBasicInfo('podcasts')

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
  const { t } = useTranslation('common')
  const router = useRouter()

  return (
    <Layout error={!!error || !data}>
      <Head>
        <title>{t('PODCASTS_SHOW_NAME')}</title>
      </Head>
      <div className="text-5xl">{t('PODCASTS_SHOW_NAME')}</div>
      <div className="mt-8 mx-auto">
        {data.map((item) => (
          <div
            className="rounded-md hover:bg-gray-100 cursor-pointer p-4 my-2"
            onClick={() => {
              router.push(`/podcasts/${item.id}`)
            }}
            key={item.title}
          >
            <div className="text-2xl">{item.title}</div>
            <div>{item.date_created}</div>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default Podcast
