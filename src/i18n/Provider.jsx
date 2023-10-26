import { IntlProvider } from 'react-intl'
import { LOCALES } from './locales'
import messages from './messages'
import { Fragment } from 'react'

export default function Provider({ children, locale = LOCALES.ENGLISH }) {
  return (
    <IntlProvider
    locale={locale}
    textComponent={ Fragment }
    messages={messages[locale]}
    >
      {children}
    </IntlProvider>
  )
}
