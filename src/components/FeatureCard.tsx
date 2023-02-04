type Props = {
  video_id: string;
};

export function FeatureCard({ video_id }: Props) {
  return (
    <div className="w-full h-full cursor-pointer hover:outline hover:outline-2 hover:outline-rose-600">
      <img
        src={`https://img.youtube.com/vi/${video_id}/maxresdefault.jpg`} // hqdefault
        alt=""
        className="object-cover"
      />
    </div>
  );
}
