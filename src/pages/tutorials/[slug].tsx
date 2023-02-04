import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { api } from '../../services/api';

const VideoPlayer = dynamic(() => import('../../components/VideoPlayer'), {
  ssr: false,
});

interface Props {
  tutorial: {
    title: string;
    description: string;
    video_id: string;
  };
}

export default function Tutorial({ tutorial }: Props) {
  return (
    <>
      <Header />
      <div className="flex-1">
        <main className="w-full my-10 max-w-5xl mx-auto px-2 xl:px-0">
          <div className="w-full aspect-video mx-auto">
            <VideoPlayer video_id={tutorial.video_id} />
          </div>

          <div className="bg-slate-800 rounded-md mt-4 p-4">
            <h1 className="font-bold text-lg">{tutorial.title}</h1>

            <p className="mt-2 text-gray-300">{tutorial.description}</p>
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
  const response = await api.get(`/tutorials/${slug}`);
  const result = response.data;

  const tutorial = {
    title: result.title,
    description: result.description,
    video_id: result.video_id,
  };

  return {
    props: { tutorial },
  };
};
