import 'swiper/css';
import { Card } from '../components/Card';
import { FeatureCard } from '../components/FeatureCard';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { PrimaryButton } from '../components/PrimaryButton';
import { Slider } from '../components/Slider';

export default function Home() {
  return (
    <>
      <Header />
      <main className="my-10 mx-auto flex-1">
        <Slider />

        <section className="mt-16 max-w-5xl mx-auto p-2 xl:p-0">
          <div className="bg-slate-800 rounded-md p-4">
            <h1 className="text-2xl font-bold text-center xl:text-left">
              Latest turotials:
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-4 my-8">
              <FeatureCard />
              <FeatureCard />
              <FeatureCard />
            </div>
            <div className="flex justify-center">
              <PrimaryButton title="View all Tutorial" />
            </div>
          </div>
        </section>

        <section className="my-8 max-w-5xl mx-auto p-2 xl:p-0">
          <div className="bg-slate-800 rounded-md p-4">
            <h1 className="text-2xl font-bold text-center xl:text-left">
              Newest guides:
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-4 my-8">
              <Card image="http://ddragon.leagueoflegends.com/cdn/12.17.1/img/champion/Syndra.png" />
              <Card image="http://ddragon.leagueoflegends.com/cdn/12.17.1/img/champion/Nilah.png" />
              <Card image="http://ddragon.leagueoflegends.com/cdn/12.17.1/img/champion/Pantheon.png" />
              <Card image="http://ddragon.leagueoflegends.com/cdn/12.17.1/img/champion/Viego.png" />
              <Card image="http://ddragon.leagueoflegends.com/cdn/12.17.1/img/champion/Nidalee.png" />
              <Card image="http://ddragon.leagueoflegends.com/cdn/12.17.1/img/champion/Sivir.png" />
            </div>
            <div className="flex justify-center">
              <PrimaryButton title="View all guides" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
