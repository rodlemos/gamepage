import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { TutorialCard } from '../../components/TutorialCard';
import { roles } from '../../data';

export default function Tutorials() {
  return (
    <>
      <Header />
      <div className="flex-1">
        <main className="w-full my-10 max-w-5xl mx-auto px-2 xl:px-0">
          <h1 className="text-2xl mb-10 font-bold text-center xl:text-left">
            Tutorials
          </h1>
          <div className="bg-slate-800 rounded-md p-4">
            <div className="flex flex-col items-center gap-4 lg:flex-row lg:items-start">
              <ul className="flex justify-center gap-1 w-full max-w-max lg:flex-col">
                {roles.map((role) => (
                  <li className="flex gap-1 items-center bg-slate-700 p-2 rounded-sm lg:w-44">
                    <img
                      src={role.image}
                      alt=""
                      className="w-7 h-7 inline-block"
                    />
                    <span className="hidden md:inline font-semibold">
                      {role.name}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="grid md:grid-cols-2 gap-4 mx-auto">
                <TutorialCard />
                <TutorialCard />
                <TutorialCard />
                <TutorialCard />
                <TutorialCard />
                <TutorialCard />
                <TutorialCard />
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
}
