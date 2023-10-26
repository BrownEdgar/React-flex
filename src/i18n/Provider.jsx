import { Fragment } from 'react'
import { LOCALES } from './locales'
import { IntlProvider } from 'react-intl'
import messages from './messages'

export default function Provider({ children, locale = LOCALES.ENGLISH }) {
  return (
    <IntlProvider
      locale={locale}
      textComponent={Fragment}
      messages={messages[locale]}
    >
      {children}
    </IntlProvider>
  )
}
