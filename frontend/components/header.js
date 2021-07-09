import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { MENUS } from '../constants'

const Header = ({ toggleDarkMode }) => {
  const router = useRouter()
  const { t } = useTranslation('common')

  return (
    <div className="container px-2 lg:px-0 mx-auto h-16 border-b-2">
      <div className="grid grid-cols-4 h-full">
        <div className="flex flex-col flex-grow-0 justify-center">
          <div className="flex flex-row">
            <div
              className="p-2 m-0 font-mono cursor-pointer rounded-md hover:bg-gray-100"
              onClick={() => {
                router.push('/')
              }}
            >
              {t('SITE_NAME')}
            </div>
          </div>
        </div>

        <div className="col-span-3 flex flex-col justify-center flex-grow-0">
          <div className="flex flex-row justify-end">
            {MENUS.map((item) => (
              <div
                className="flex flex-col flex-grow-0 justify-center m-2 cursor-pointer rounded-md p-2 hover:bg-gray-100"
                onClick={() => {
                  router.push(item.path)
                }}
                key={item.name}
              >
                {t(item.name)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
