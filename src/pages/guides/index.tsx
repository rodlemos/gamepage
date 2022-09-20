import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Filters } from '../../components/Filters';
import { Footer } from '../../components/Footer';
import { GuideCard } from '../../components/GuideCard';
import { Header } from '../../components/Header';

export default function Champions() {
  return (
    <>
      <Header />
      <div className="flex-1">
        <main className="w-full max-w-5xl mx-auto px-2 xl:px-0">
          <h1 className="text-2xl my-10 font-bold text-center xl:text-left">
            Champion guides
          </h1>

          <div className="mb-10 py-6 bg-slate-800 rounded-md p-4">
            <div className=" mb-6 py-4 bg-slate-700 rounded-md p-4">
              <Filters />
            </div>

            <div className="grid gap-2">
              <GuideCard
                description="updated at 12/09/2022"
                image="http://ddragon.leagueoflegends.com/cdn/12.17.1/img/champion/Sivir.png"
                lane="adc"
                title="Sivir from trash to OP"
              />
              <GuideCard
                description="updated at 12/09/2022"
                image="http://ddragon.leagueoflegends.com/cdn/12.17.1/img/champion/Sivir.png"
                lane="adc"
                title="Sivir from trash to OP Like no ever before"
              />
              <GuideCard
                description="updated at 12/09/2022"
                image="http://ddragon.leagueoflegends.com/cdn/12.17.1/img/champion/Sivir.png"
                lane="adc"
                title="Sivir from trash to OP"
              />
              <GuideCard
                description="updated at 12/09/2022"
                image="http://ddragon.leagueoflegends.com/cdn/12.17.1/img/champion/Sivir.png"
                lane="adc"
                title="Sivir from trash to OP"
              />
              <GuideCard
                description="updated at 12/09/2022"
                image="http://ddragon.leagueoflegends.com/cdn/12.17.1/img/champion/Sivir.png"
                lane="adc"
                title="Sivir from trash to OP"
              />
            </div>
            <div className="w-full bg-slate-700 rounded-md">
              <div className="max-w-2xl mx-auto flex gap-2 mt-2 items-center justify-center ">
                <button type="button" className="border-none bg-transparent">
                  <FiChevronLeft size={25} className="text-rose-500" />
                </button>
                <span className="text-lg">1</span>
                <span className="text-lg">2</span>
                <span className="text-lg">3</span>
                <button type="button" className="border-none bg-transparent">
                  <FiChevronRight size={25} className="text-rose-500" />
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
