import '@vime/core/themes/default.css';
import { DefaultUi, Player, Youtube } from '@vime/react';

interface Props {
  video_id: string;
}

export default function VideoPlayer({ video_id }: Props) {
  return (
    <Player>
      <Youtube videoId={video_id} />
      <DefaultUi />
    </Player>
  );
}
