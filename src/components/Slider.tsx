import Link from 'next/link';
import { useRouter } from 'next/router';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button } from './Button';

export function Slider() {
  const router = useRouter();

  function handleRedirect(path: string) {
    router.push(path);
  }

  return (
    <div className="max-w-5xl aspect-video mx-auto ring-4 ring-cyan-700/[0.3]">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        spaceBetween={20}
        slidesPerView="auto"
      >
        <SwiperSlide>
          <div className=" w-full aspect-video bg-slate-600/[0.3] bg-[url('https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zeri_0.jpg')] bg-cover bg-blend-overlay">
            <span className="absolute top-2 left-0 block px-[0.6em] py-[0.2em] bg-lime-600 rounded-r-md font-medium">
              Pro Guide
            </span>

            <div className="absolute flex flex-col gap-2 lg:gap-4 items-start bottom-[20%] left-[5%] mr-auto">
              <h1 className="inline-block text-white text-center md:text-3xl lg:text-6xl lg:max-w-[10ch]">
                New Pro guide for{' '}
                <span className="text-lime-500 font-bold">Zeri</span>
              </h1>
              <div className="w-full text-center">
                <Button
                  bg="bg-lime-900"
                  border="border-lime-500"
                  title="View guide"
                  onClick={() =>
                    handleRedirect('/guides/Shocking-good-with-Zeri')
                  }
                />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full aspect-video max-h-[576px] bg-slate-600/[0.4] bg-[url('https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Udyr_0.jpg')] bg-cover bg-top bg-blend-overlay">
            <div className="absolute top-[15%] left-[5%] flex flex-col gap-2 lg:gap-4 items-start  mr-auto">
              <header>
                <strong className="text-lg lg:text-5xl leading-none uppercase block text-indigo-500">
                  Udyr
                </strong>
                <span className="text-sm uppercase">The spirit walker</span>
              </header>
              <h1 className="inline-block text-white md:max-w-[14ch] md:text-3xl lg:text-5xl lg:max-w-[15ch] lg:mb-4">
                New guides for Udyr post rework
              </h1>

              <Button
                bg="bg-indigo-900"
                border="border-indigo-500"
                title="View guide"
                onClick={() => handleRedirect('guides/Udyr-going-wild')}
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <Link
            href="/tutorials/This-1-Simple-Rule-STOPS-You-From-DYING"
            legacyBehavior
          >
            <a>
              <div className="realtive w-full aspect-video max-h-[579px] bg-[url('https://img.youtube.com/vi/xnedGgS5jsU/maxresdefault.jpg')] bg-cover" />
            </a>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
