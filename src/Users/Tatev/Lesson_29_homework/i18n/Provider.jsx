import { Fragment } from "react";
import { LOCALES } from "./locales";
import messages from "./messages"
import { IntlProvider } from "react-intl";



export default function Provider({children, locale = LOCALES.ENGLISH}) {
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
