import Layout from '../components/layout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Head from 'next/head'

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})

const About = () => {
  const { t } = useTranslation('common')

  return (
    <Layout>
      <Head>
        <title>{t('ABOUT_SHOW_NAME')}</title>
      </Head>
      <div>
        <div className="text-5xl">{t('ABOUT_SHOW_NAME')}</div>
      </div>
    </Layout>
  )
}

export default About
