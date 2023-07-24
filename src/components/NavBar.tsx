import { NavBarHolder, NavButton } from "@/styles/MainViewStyles";

//Navbar props
interface NavBarProps {
  // Set tab method
  setTab: (tab: number) => void;
  // Current tab
  tab: number;
}

//Navbar component
export default function NavBar({ setTab, tab }: NavBarProps) {
  return (
    <NavBarHolder>
      <NavButton onClick={() => setTab(0)} selected={tab === 0}>
        CONTACT
      </NavButton>
      <NavButton onClick={() => setTab(1)} selected={tab === 1}>
        ABOUT
      </NavButton>
      <NavButton onClick={() => setTab(2)} selected={tab === 2}>
        WORKS
      </NavButton>
    </NavBarHolder>
  );
}
