import React from 'react'
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { FC } from "react";


const options = [
  {
    id: "th",
    label: "TH",
    value: "th",
  },
  {
    id: "en",
    label: "EN",
    value: "en",
  },
];


type Props = {}

const SelectLanguage: FC<Props> = () => {
  const { i18n } = useTranslation();
  const router = useRouter();

  return (
    <select
      className='select-language select-language--mobile text-sm font-medium rounded-lg   bg-transparent border-none outline-none focus:none'
      value={i18n.language}
      onChange={(e) => {
        const nextLanguage = e.target.value;
        console.log("changing language to: ", nextLanguage);
        i18n.changeLanguage(nextLanguage);

        console.log("reload content..");
        router.push(router.pathname, router.asPath, {
          locale: nextLanguage,
          shallow: true,
        });
      }}
    >
      {options.map((option) => (
        <option key={option.id} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

export default SelectLanguage