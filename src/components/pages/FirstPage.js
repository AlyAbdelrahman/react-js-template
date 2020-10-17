import React from "react";
import { useTranslation } from "react-i18next";
export default function FirstPage() {
    const { t, i18n } = useTranslation();
    const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
    };

  return (
    <>
      <h1>{t("hello")}</h1>
      <div onChange={changeLanguage}>
        <input type="radio" value="en" name="language" defaultChecked /> English
        <input type="radio" value="ar" name="language" /> arabic
      </div>
    </>
  );
}
