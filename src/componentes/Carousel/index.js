import { VideoCardGroupContainer, VideoCardList, Title, ExtraLink } from './styles';
import VideoCard from './components/VideoCard';


function VideoCardGroup( {
   titulo,
   cor,
   link_extra,
   videos
}) {


  return (
    <VideoCardGroupContainer>
        <>
          <Title style={{ backgroundColor: cor || 'red' }}>
             {titulo}
          </Title>
          <ExtraLink href={link_extra.url} target="_blank">
            {link_extra.text}
          </ExtraLink>
        </>
      <VideoCardList>
                {videos.map(video => <VideoCard
                videoTitle={video.titulo}
                videoURL={video.url}
                categoryColor={cor}
              />)}
      </VideoCardList>
    </VideoCardGroupContainer>
  );
}


export default VideoCardGroup;
