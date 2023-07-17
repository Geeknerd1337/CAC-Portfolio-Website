import { Background, VideoHolder } from '@/styles/MainViewStyles';
import Title from '@/components/Title';
import Headshot from '@/components/Headshot';
export default function MainView() {
  return (
    <Background>
      <Title />
      <VideoHolder
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        {/* Youtube embed */}
        <iframe
          src='https://www.youtube.com/embed/pnaA-wNaXGQ'
          title='YouTube video player'
          style={{
            width: '100%',

            aspectRatio: '16/9',
          }}
        ></iframe>
      </VideoHolder>
      <Headshot />
    </Background>
  );
}
