import {
  ContactHolder,
  ContactHeadshot,
  ContactText,
  ContactHeader,
} from '@/styles/MainViewStyles';

import ContactItem from './ContactItem';

export default function Contact() {
  return (
    <ContactHolder>
      <ContactHeadshot
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.1 }}
        src='headshot_alt.png'
        alt='headshot'
      />

      <ContactText
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.1 }}
      >
        <ContactHeader>Get in touch!</ContactHeader>
        <ContactItem
          icon='mail_fill.svg'
          text='Email'
          href='mailto:c.alan.carroll@gmail.com'
        />
        <ContactItem
          icon='gram.svg'
          text='Instagram'
          href='https://www.instagram.com/craig.writes.music/'
        />
        <ContactItem
          icon='twitter.svg'
          text='Twitter'
          href='https://twitter.com/CraigAlanNoise'
        />
      </ContactText>
    </ContactHolder>
  );
}
