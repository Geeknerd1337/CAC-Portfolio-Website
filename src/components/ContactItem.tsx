import {
  ContactIcon,
  ContactItemHolder,
  ContactLink,
} from "@/styles/ContactStyles";

// ContactItem interface
interface ContactItemProps {
  icon: string;
  text: string;
  href: string;
}

export default function ContactItem(props: ContactItemProps) {
  return (
    <ContactItemHolder>
      <ContactIcon src={props.icon} alt="icon" />
      <ContactLink href={props.href} target="_blank">
        {props.text}
      </ContactLink>
    </ContactItemHolder>
  );
}
