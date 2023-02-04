import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { TutorialCard } from '../../components/TutorialCard';
import { getFromApi } from '../../services/api';

type rolesData = {
  id: string;
  name: string;
  image_url: string;
};

export default function Tutorials() {
  const [tutorials, setTutorials] = useState([]);
  const [category, setCategory] = useState('');
  const roles = useQuery(['roles'], () => getFromApi('/roles'));
  const allTutorials = useQuery(['tutorials'], () => getFromApi('/tutorials'));
  const [value, setValue] = useState(null);

  function handleChangeCategory(index: number, role_id: string) {
    setValue(index);

    if (role_id === category) {
      setValue(null);
      return setCategory('');
    }

    setCategory(role_id);
  }

  useEffect(() => {
    setTutorials(allTutorials.data);
  }, [allTutorials.data]);

  useEffect(() => {
    function getTutorials() {
      if (category === '') {
        return setTutorials(allTutorials.data);
      }

      const filteredTutorials = allTutorials.data.filter((item) => {
        return item.id_role === category;
      });

      setTutorials(filteredTutorials);
    }
    getTutorials();
  }, [category, allTutorials.data]);

  return (
    <>
      <Header />
      <div className="flex-1">
        <main className="w-full my-10 max-w-5xl mx-auto px-2 xl:px-0">
          <h1 className="text-2xl mb-10 font-bold text-center xl:text-left">
            Tutorials
          </h1>
          <div className="min-h-[500px] bg-slate-800 rounded-md p-4">
            <div className="flex flex-col items-center gap-4 lg:flex-row lg:items-start">
              <ul className="flex justify-center gap-1 w-full max-w-max lg:flex-col">
                {roles.data?.map((role: rolesData, index: number) => (
                  <li
                    key={role.id}
                    className="flex gap-1 items-center bg-slate-700 p-2 rounded-sm lg:w-44 group cursor-pointer"
                    onClick={() => handleChangeCategory(index, role.id)}
                  >
                    <img
                      src={role.image_url}
                      alt={role.name}
                      className={`w-7 h-7 inline-block ${
                        value === index && 'hue-rotate-180 md:hue-rotate-0'
                      }`}
                    />
                    <span
                      className={`hidden md:inline font-semibold uppercase group-hover:text-rose-500 ${
                        index === value && 'text-rose-500'
                      }`}
                    >
                      {role.name}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="grid md:grid-cols-2 gap-4 mx-auto">
                {tutorials?.map((tutorial) => (
                  <Link
                    href={`/tutorials/${tutorial.slug}`}
                    passHref
                    key={tutorial.id}
                    legacyBehavior
                  >
                    <a>
                      <TutorialCard
                        title={tutorial.title}
                        video_id={tutorial.video_id}
                        role={tutorial.role}
                      />
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
}
