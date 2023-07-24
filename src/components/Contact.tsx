import {
  ContactHolder,
  ContactHeadshot,
  ContactText,
  ContactHeader,
} from "@/styles/MainViewStyles";

export default function () {
  return (
    <ContactHolder>
      <ContactHeadshot
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.1 }}
        src="headshot_alt.png"
        alt="headshot"
      />

      <ContactText
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.1 }}
      >
        <ContactHeader>Get in touch!</ContactHeader>
      </ContactText>
    </ContactHolder>
  );
}
