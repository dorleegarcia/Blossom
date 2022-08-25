import { StyledBackgroundVideo, StyledBackgroundVideoTag } from "./styles";

interface IBackgroundVideoProps {
  video: string;
}

function BackgroundVideo({ video }: IBackgroundVideoProps): React.ReactElement {
  return (
    <StyledBackgroundVideo>
      <StyledBackgroundVideoTag muted loop autoPlay playsInline>
        <source src={video} type="video/mp4" />
      </StyledBackgroundVideoTag>
    </StyledBackgroundVideo>
  );
}

export default BackgroundVideo;
