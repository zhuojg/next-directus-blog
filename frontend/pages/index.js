import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Layout from '../components/layout'

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})

export default function Home() {
  const { t } = useTranslation()
  return (
    <Layout>
      <Head>
        <title>{t('SITE_NAME')}</title>
        <meta name="description" content="Super Imagination" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="text-5xl">Welcome to {t('SITE_NAME')}</div>
    </Layout>
  )
}
