import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { useRouter } from 'next/router';
import 'swiper/css';
import { Card } from '../components/Card';
import { FeatureCard } from '../components/FeatureCard';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { PrimaryButton } from '../components/PrimaryButton';
import { Slider } from '../components/Slider';
import { getFromApi } from '../services/api';

export default function Home() {
  const router = useRouter();
  const tutorials = useQuery(['latestTutorials'], () =>
    getFromApi('tutorials/latest')
  );
  const guides = useQuery(['latestGuides'], () => getFromApi('guides/latest'));

  function handleRedirect(path: string) {
    router.push(path);
  }

  return (
    <>
      <Header />
      <main className="w-full my-10 mx-auto flex-1">
        <Slider />

        <section className="mt-16 max-w-5xl mx-auto p-2 xl:p-0">
          <div className="bg-slate-800 rounded-md p-4">
            <h1 className="text-2xl font-bold text-center xl:text-left">
              Latest turotials:
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-4 my-8">
              {tutorials.data?.map((tutorial) => (
                <Link href={`tutorials/${tutorial.slug}`} key={tutorial.id}>
                  <a className="w-72 sm:w-[31%] aspect-video">
                    <FeatureCard video_id={tutorial.video_id} />
                  </a>
                </Link>
              ))}
            </div>
            <div className="flex justify-center">
              <PrimaryButton
                title="View all Tutorial"
                onClick={() => handleRedirect('/tutorials')}
              />
            </div>
          </div>
        </section>

        <section className="my-8 max-w-5xl mx-auto p-2 xl:p-0">
          <div className="bg-slate-800 rounded-md p-4">
            <h1 className="text-2xl font-bold text-center xl:text-left">
              Newest guides:
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-4 my-8">
              {guides.data?.map((guide) => (
                <Link href={`guides/${guide.slug}`} key={guide.id}>
                  <a>
                    <Card
                      image={guide.champion.image_url}
                      title={guide.title}
                      date={guide.updated_at}
                      items={guide.items}
                    />
                  </a>
                </Link>
              ))}
            </div>
            <div className="flex justify-center">
              <PrimaryButton
                title="View all guides"
                onClick={() => handleRedirect('/guides')}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
