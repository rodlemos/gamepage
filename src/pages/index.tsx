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
      <div className="flex flex-1 items-start">
        <main className="container my-10 mx-auto">
          <Slider />

          <section className="mt-16 max-w-5xl mx-auto">
            <h1 className="text-2xl font-bold text-center ml-4 xl:text-left">
              Latest Tutorials:
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-4 my-8">
              <FeatureCard />
              <FeatureCard />
              <FeatureCard />
            </div>
            <div className="flex justify-center">
              <PrimaryButton title="View all Tutorial" />
            </div>
          </section>

          <section className="my-8 max-w-5xl mx-auto">
            <h1 className="text-2xl font-bold text-center xl:text-left">
              New Guides:
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
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
