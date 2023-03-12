import React from "react";
import { LanguageContext } from "./LanguageContext";

const Strings = {
  EN: { LANG: "The language is set to English" },
  IT: { LANG: "La lingua è impostata su Italiano" },
  ES: { LANG: "El idioma esta puesto en espanol" },
};

export function DisplayLanguage() {
  const lang = useContext(LanguageContext);
  
  return (
    <div>
      <LanguageContext.Consumer>
        {(language) => {
          return <h1>{Strings[language].LANG}</h1>;
        }}
      </LanguageContext.Consumer>
    </div>
  );
}
