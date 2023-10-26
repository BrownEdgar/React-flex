import { IntlProvider } from "react-intl";
import messages from "./messages"
import { LOCALES } from "./locales";
import { Fragment } from "react";


export default function Provider({children, locale = LOCALES.ENGLISH}) {
  return (
    <IntlProvider
      locale ={locale}
      textComponent={Fragment}
      messages={messages[locale]}
    >
      {children}
    </IntlProvider>
  )
}
