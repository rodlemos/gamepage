import { Filters } from '../../components/Filters';
import { Footer } from '../../components/Footer';
import { GuideCard } from '../../components/GuideCard';
import { Header } from '../../components/Header';
import { PrimaryButton } from '../../components/PrimaryButton';

export default function Champions() {
  return (
    <>
      <Header />
      <div className="flex-1">
        <main className="w-full max-w-5xl mx-auto px-2 xl:px-0">
          <div className="my-10 py-10 bg-slate-800 rounded-md p-4">
            <Filters />

            <div className="grid gap-2">
              <GuideCard
                description="updated at 12/09/2022"
                image="http://ddragon.leagueoflegends.com/cdn/12.17.1/img/champion/Sivir.png"
                lane="adc"
                title="Sivir from thrash to OP"
              />
              <GuideCard
                description="updated at 12/09/2022"
                image="http://ddragon.leagueoflegends.com/cdn/12.17.1/img/champion/Sivir.png"
                lane="adc"
                title="Sivir from thrash to OP"
              />
              <GuideCard
                description="updated at 12/09/2022"
                image="http://ddragon.leagueoflegends.com/cdn/12.17.1/img/champion/Sivir.png"
                lane="adc"
                title="Sivir from thrash to OP"
              />
              <GuideCard
                description="updated at 12/09/2022"
                image="http://ddragon.leagueoflegends.com/cdn/12.17.1/img/champion/Sivir.png"
                lane="adc"
                title="Sivir from thrash to OP"
              />
              <GuideCard
                description="updated at 12/09/2022"
                image="http://ddragon.leagueoflegends.com/cdn/12.17.1/img/champion/Sivir.png"
                lane="adc"
                title="Sivir from thrash to OP"
              />
            </div>
            <div className="max-w-2xl mx-auto flex gap-2 mt-2 items-center justify-center">
              <span className="text-lg">1</span>
              <span className="text-lg">2</span>
              <span className="text-lg">3</span>
              <PrimaryButton title="Next" />
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
