"use client";

import Hero from "@/components/home/hero";
import SectionTitle from "@/components/home/sectionTitle";
import Image from "next/image";
import React from "react";
import { useRouter } from 'next/router';
import {
  ArrowTrendingUpIcon,
  ChartBarIcon,
  Square3Stack3DIcon,
  GlobeAltIcon,
  MagnifyingGlassIcon,
  CircleStackIcon
} from "@heroicons/react/24/solid";

import benefitOneImg from "@/public/image/benefit-one.png";
import benefitTwoImg from "@/public/image/benefit-two.png";
import { Menu } from "react-feather";
import SliderHome from "@/components/slider-home";
import { useState } from "react";
import Navbar from "@/components/home/navbar";
import Testimonials from "@/components/home/testimonials";
import Faq from "@/components/home/faq";
import Footer from "@/components/footer";
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import { withTranslation, i18n } from "i18n"
import i18nConfig from 'i18n.json';
import setLanguage from 'next-translate/setLanguage'



export default function CV() {
  const [open, setOpen] = useState(false);
  const {t, lang} = useTranslation('all')

  return (
    <div className="bg-white_background_bobby px-6">
        {/* <Link href="/en">
          <h2>Anglais</h2>
        </Link>
        <Link href="/fr">
          <h2>Français</h2>
        </Link> */}
        <div>{example}</div>
        
      <Navbar />
      <div className="relative">
        <div className="fixed right-0 top-0 h-20 w-20 rounded-bl-full bg-brown_bobby"/>
        <div className="fixed right-0 top-0 pr-4 pt-4">
          <div className="flex items-start justify-end">
            <button
              type="button"
              className="text-gray-300 hover:text-white"
              onClick={() => setOpen(!open)}
            >
              <span className="sr-only">Open panel</span>
              <Menu className="h-8 w-8" aria-hidden="true"/>
            </button>
          </div>
        </div>
      </div>
      <Hero />
      <SectionTitle
        id="skills"
        pretitle={t('home.intro.title')}
        title={t('home.intro.subtitle')}>
        {t('home.intro.description')}
      </SectionTitle>
      <div className="container mx-auto p-8 xl:px-0 mb-20 flex flex-wrap lg:flex-nowrap lg:gap-10 ">
        <div
          className={`flex w-full items-center justify-center lg:w-1/2`}>
          <div>
            <Image
              src={benefitOneImg}
              width="521"
              height="auto"
              alt="Benefits"
              className={"object-cover"}
              placeholder="blur"
            />
          </div>
        </div>
        <div
          className={`flex w-full flex-wrap items-center lg:w-1/2`}>
          <div>
            <div className="mt-4 flex w-full flex-col">
              <h3 className="mt-3 max-w-2xl text-3xl font-bold leading-snug tracking-tight text-gray-800 dark:text-white lg:text-4xl lg:leading-tight">
              {t('home.presentation.title.1')}
              </h3>
              <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 dark:text-gray-300 lg:text-xl xl:text-xl">
              {t('home.presentation.subtitle.1')}
              </p>
            </div>
            <div className="mt-5 w-full">
                <div className="mt-8 flex items-start space-x-3">
                  <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-indigo-500 ">
                    <ArrowTrendingUpIcon className="w-7 h-7 text-indigo-50"/>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                    {t('home.presentation.subsubtitle.1a')}
                    </h4>
                    <p className="mt-1 text-gray-500 dark:text-gray-400">
                      A{t('home.presentation.description.1a')}
                    </p>
                  </div>
                </div>
                <div className="mt-8 flex items-start space-x-3">
                  <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-indigo-500 ">
                    <Square3Stack3DIcon className="w-7 h-7 text-indigo-50"/>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                    {t('home.presentation.subsubtitle.1b')}
                    </h4>
                    <p className="mt-1 text-gray-500 dark:text-gray-400">
                    {t('home.presentation.description.1b')}
                    </p>
                  </div>
                </div>
                <div className="mt-8 flex items-start space-x-3">
                  <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-indigo-500 ">
                    <ChartBarIcon className="w-7 h-7 text-indigo-50"/>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                    {t('home.presentation.subsubtitle.1c')}
                    </h4>
                    <p className="mt-1 text-gray-500 dark:text-gray-400">
                    {t('home.presentation.description.1c')}
                    </p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-8 xl:px-0 mb-20 flex flex-wrap lg:flex-nowrap lg:gap-10 ">
        <div
          className={`flex w-full items-center justify-center lg:w-1/2 lg:order-1`}>
          <div>
            <Image
              src={benefitTwoImg}
              width="521"
              height="auto"
              alt="Benefits"
              className={"object-cover"}
              placeholder="blur"
            />
          </div>
        </div>
        <div
          className={`flex w-full flex-wrap items-center lg:w-1/2 lg:justify-end`}>
          <div>
            <div className="mt-4 flex w-full flex-col">
              <h3 className="mt-3 max-w-2xl text-3xl font-bold leading-snug tracking-tight text-gray-800 dark:text-white lg:text-4xl lg:leading-tight">
              {t('all:home.presentation.title.2')}
              </h3>
            </div>
            <div className="mt-5 w-full">
                <div className="mt-8 flex items-start space-x-3">
                  <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-indigo-500 ">
                    <CircleStackIcon className="w-7 h-7 text-indigo-50" />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                    {t('all:home.presentation.subsubtitle.2a')}
                    </h4>
                    <p className="mt-1 text-gray-500 dark:text-gray-400">
                    {t('all:home.presentation.description.2a')}
                    </p>
                  </div>
                </div>
                <div className="mt-8 flex items-start space-x-3">
                  <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-indigo-500 ">
                    <MagnifyingGlassIcon className="w-7 h-7 text-indigo-50" />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                    {t('all:home.presentation.subsubtitle.2b')}
                    </h4>
                    <p className="mt-1 text-gray-500 dark:text-gray-400">
                    {t('all:home.presentation.description.2b')}
                    </p>
                  </div>
                </div>
                <div className="mt-8 flex items-start space-x-3">
                  <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-indigo-500 ">
                    <GlobeAltIcon className="w-7 h-7 text-indigo-50" />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                    {t('all:home.presentation.subsubtitle.2c')}
                    </h4>
                    <p className="mt-1 text-gray-500 dark:text-gray-400">
                    {t('all:home.presentation.description.3c')}
                    </p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <SectionTitle
        id="projects"
        pretitle={t('all:home.project.title')}
        title={t('all:home.project.subtitle')}>
        {t('all:home.project.description.1')}
      </SectionTitle>
      <Testimonials />
      <SectionTitle
        id="faq"
        pretitle={t('all:home.faq.title')}
        title={t('all:home.faq.subtitle')}>
        {t('all:home.faq.description')}
      </SectionTitle>
      {/* <Faq /> */}
      <Footer />
      <SliderHome open={open} setOpen={setOpen}/>
    </div>
  );
}
