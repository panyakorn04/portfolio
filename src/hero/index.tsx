// import { ChevronRightIcon } from '@heroicons/react/20/solid'
import Image from 'next/image';
import { useTranslation } from "next-i18next";
import { FC, ReactNode } from 'react'

import Seo from '@/components/Seo';

type Props = {
  title: ReactNode;
  className?: string;
};


const Hero: FC<Props> = () => {
  const { t } = useTranslation();
  return (
    <>
      <Seo templateTitle="banner" />
      <section>
        <div className="relative isolate overflow-hidden ">
          <div className="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:py-10 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
              <div className="mt-24 sm:mt-32 lg:mt-16">
                <a href="#" className="inline-flex space-x-6">
                  <span className="rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-600/10">
                    What's new
                  </span>
                  <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
                    <span>Just shipped v1.0</span>
                    {/* <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" /> */}
                  </span>
                </a>
              </div>
              <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
                {t('user-name')}
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                fugiat veniam occaecat fugiat aliqua.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </a>
                <a href="#" className="text-base font-semibold leading-7 text-gray-200">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32">
              <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                  <Image
                    src="/images/profile.png"
                    alt="App screenshot"
                    width={500}
                    height={1000}
                    className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero