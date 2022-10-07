import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Filters } from '../../components/Filters';
import { Footer } from '../../components/Footer';
import { GuideCard } from '../../components/GuideCard';
import { Header } from '../../components/Header';
import { getFromApi } from '../../services/api';

interface Guides {
  id: string;
  title: string;
  slug: string;
  champion: {
    image_url: string;
  };
  items: {
    item: {
      id: string;
      name: string;
      image_url: string;
    };
  }[];
  role: {
    id: string;
    name: string;
    image_url: string;
  };
  updated_at: Date;
}

export default function Guides() {
  const [guides, setGuides] = useState<Guides[]>([]);
  const [category, setCategory] = useState('');
  const roles = useQuery(['roles'], () => getFromApi('/roles'), {
    staleTime: 1000 * 60 * 60 * 24,
  });
  const allGuides = useQuery(['allGuides'], () => getFromApi('/guides'), {
    staleTime: 1000 * 60 * 30,
  });

  useEffect(() => {
    setGuides(allGuides.data);
  }, [allGuides.data]);

  useEffect(() => {
    function getGuides() {
      if (category === '') {
        return setGuides(allGuides.data);
      }

      const filteredGuides = allGuides.data.filter(
        (item: { role: { id: string } }) => {
          return item.role.id === category;
        }
      );

      setGuides(filteredGuides);
    }
    getGuides();
  }, [category, allGuides.data]);

  return (
    <>
      <Header />
      <div className="flex-1">
        <main className="w-full max-w-5xl mx-auto px-2 xl:px-0">
          <h1 className="text-2xl my-10 font-bold text-center xl:text-left">
            Champion guides
          </h1>

          <div className=" flex flex-col min-h-[400px] mb-10 py-6 bg-slate-800 rounded-md p-4">
            <div className=" mb-6 py-4 bg-slate-700 rounded-md p-4">
              <Filters
                roles={roles.data}
                category={category}
                setCategory={setCategory}
              />
            </div>

            <div className="flex flex-1 flex-col gap-2 h-full">
              {guides?.map((guide) => (
                <Link href={`/guides/${guide.slug}`} key={guide.id}>
                  <a>
                    <GuideCard
                      date={guide.updated_at}
                      image={guide.champion.image_url}
                      lane={guide.role}
                      title={guide.title}
                      items={guide.items}
                    />
                  </a>
                </Link>
              ))}
            </div>

            <div className="w-full bg-slate-700 rounded-md mt-2">
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
