import { GetStaticProps } from 'next';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { api } from '../../services/api';

interface Props {
  guide: {
    title: string;
    champion: {
      name: string;
      image_url: string;
      abilities: string[];
    };
    role: {
      name: string;
      image_url: string;
    };
    items: {
      item: {
        id: string;
        image_url: string;
      };
    }[];
    updated_at: Date;
  };
}

export default function Guide({ guide }: Props) {
  const date = new Date(guide.updated_at).toLocaleDateString();

  return (
    <>
      <Header />
      <div className="flex-1">
        <main className="w-full my-10 max-w-5xl mx-auto px-2 xl:px-0">
          <header className="bg-slate-800 p-4 flex flex-col rounded-md">
            <div className="flex">
              <img
                src={guide.champion.image_url}
                alt=""
                className="w-20 h-20 rounded-md md:w-28 md:h-28"
              />

              <div className="ml-2 md:ml-4">
                <h1 className="text-sm font-bold md:text-2xl leading-tight">
                  {guide.title}
                </h1>
                <p className="text-xs md:text-sm">
                  updated at <span className="text-orange-300">{date}</span>
                </p>
                <div className="inline-flex border mt-1 px-2 rounded-full border-gray-400 items-center justify-center gap-1">
                  <img
                    src={guide.role.image_url}
                    alt={guide.role.name}
                    className="w-6 h-6"
                  />
                  <span className=" text-sm font-light text-gray-300">
                    {guide.role.name}
                  </span>
                </div>
              </div>
            </div>
          </header>

          <div className="mt-6 p-4 rounded-md bg-slate-800">
            <div className="grid gap-2 md:grid-flow-col md:auto-cols-max md:justify-evenly">
              <div className="bg-slate-700 p-4 rounded-md">
                <h2 className="text-lg font-semibold">Abilities</h2>
                <div className="flex gap-1 md:gap-2 mt-2">
                  {guide.champion.abilities.map((skill) => (
                    <img
                      src={skill}
                      alt=""
                      key={skill}
                      className="w-10 h-10 md:w-14 md:h-14 ring-2 ring-slate-800/50"
                    />
                  ))}
                </div>
              </div>

              <div className="bg-slate-700 p-4 rounded-md">
                <h2 className="text-lg font-semibold">Items</h2>
                <div className="flex gap-1 md:gap-2 mt-2">
                  {guide.items.map((item) => (
                    <img
                      src={item.item.image_url}
                      alt=""
                      key={item.item.id}
                      className="w-9 h-9 md:w-14 md:h-14 ring-2 ring-slate-800/50"
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="max-w-4xl p-4 md:py-6 rounded-md mx-auto mt-10 text-gray-300 bg-slate-700">
              <div className="flex flex-col gap-4 max-w-[66ch] mx-auto">
                <p className="">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nesciunt consequatur necessitatibus voluptate, laudantium
                  magni commodi exercitationem quisquam nam in est, fugit hic
                  perferendis beatae quia, dolorem deleniti error ad dignissimos
                  provident. Aperiam, est in! Hic officia perspiciatis
                  praesentium quaerat sit error repellendus nihil consequuntur?
                  Dolor dolorum obcaecati sequi veritatis sapiente debitis
                  reiciendis? Tenetur nesciunt modi maxime accusamus dolorem, ut
                  optio autem, a commodi ea voluptatibus aspernatur repudiandae
                  similique. Aut voluptates praesentium perferendis numquam
                  iusto suscipit blanditiis fuga consequatur, recusandae
                  asperiores hic magnam iure laborum excepturi quasi eligendi
                  quisquam nulla ullam voluptate facere odio dolore alias? Quam
                  aliquid consequatur illum officiis?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
                  similique quidem temporibus sit aperiam, voluptates cum ipsam
                  expedita accusantium nobis est mollitia sequi beatae numquam
                  assumenda veritatis omnis ducimus dolorum suscipit pariatur id
                  possimus! Tenetur, nihil fugiat. Eum sequi tenetur et magnam
                  nobis aut illum, obcaecati sint dolorem maxime ullam, qui
                  ducimus pariatur vitae inventore, iste accusantium quos
                  laudantium vero nam dicta? Sequi provident unde quae
                  reiciendis. Beatae nisi doloribus quidem mollitia, adipisci
                  consequuntur vero ipsum aut iure vel quos repellendus tempore
                  voluptatum consectetur aliquam illo, odio qui voluptas rem
                  fugiat accusamus eligendi labore molestias. Explicabo
                  voluptates, velit blanditiis ipsam, minus quidem at illo
                  recusandae mollitia officia ad dolores eum nulla? Tenetur amet
                  quam, eos cum porro qui quas ea.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;
  const response = await api.get(`/guides/${slug}`);
  const result = response.data;

  const guide = {
    title: result.title,
    champion: result.champion,
    role: result.role,
    items: result.items,
    updated_at: result.updated_at,
  };

  return {
    props: { guide },
    revalidate: 60 * 60 * 24, //1 day
  };
};
