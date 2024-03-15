import Image from "next/image";
import heroImg from "@/public/image/hero.png";
import useTranslation from 'next-translate/useTranslation'

const Hero = () => {
const { t, lang } = useTranslation('all')
  return (
    <>
      <div className="container mx-auto p-8 xl:px-0 flex flex-wrap">
        <div id="home" className="flex w-full items-center lg:w-1/2">
          <div className="mb-8 max-w-2xl">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 dark:text-white lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight">
              IDeA
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 dark:text-gray-300 lg:text-xl xl:text-2xl">
              {t('home.head.description')}
            </p>
          </div>
        </div>
        <div className="flex w-full items-center justify-center lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              className="object-cover"
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;