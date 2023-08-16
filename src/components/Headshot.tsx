import {
  HeadshotHolder,
  HeadshotImg,
  AboutText,
  AboutHolder,
  AboutTitle,
} from '@/styles/HeadshotStyles';

export default function Headshot() {
  return (
    <HeadshotHolder
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
    >
      <HeadshotImg src='craig_headshot.jpg' alt='headshot' />
      <AboutHolder>
        <AboutTitle>About Me</AboutTitle>
        <AboutText>
          Hi, I&apos;m Craig Alan Carroll! I&apos;m a composer with a passion
          for writing music ranging from emotive piano to banging drum and bass.
          I love to deep dive in to genres to create authentic experiences from
          the sounds they offer.
        </AboutText>
      </AboutHolder>
    </HeadshotHolder>
  );
}
