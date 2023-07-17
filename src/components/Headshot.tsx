import {
  HeadshotHolder,
  Headshot,
  AboutText,
  AboutHolder,
  AboutTitle,
} from '@/styles/HeadshotStyles';

export default function () {
  return (
    <HeadshotHolder
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1 }}
    >
      <Headshot src='craig_headshot.jpg' alt='headshot' />
      <AboutHolder>
        <AboutTitle>About Me</AboutTitle>
        <AboutText>
          I am a software engineer with a passion for creating and learning. I
          have experience with full-stack web development, mobile development,
          and game development. I am currently working as a software engineer at
          a startup called
        </AboutText>
      </AboutHolder>
    </HeadshotHolder>
  );
}
