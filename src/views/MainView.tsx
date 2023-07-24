import { Background, VideoHolder } from "@/styles/MainViewStyles";
import Title from "@/components/Title";
import Headshot from "@/components/Headshot";
import NavBar from "@/components/NavBar";
import { useState } from "react";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
export default function MainView() {
  const [tab, setTab] = useState(1);

  return (
    <Background>
      <Title />
      <NavBar setTab={setTab} tab={tab} />
      {tab === 1 ? (
        <>
          <VideoHolder
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
          >
            {/* Youtube embed */}
            <iframe
              src="https://www.youtube.com/embed/pnaA-wNaXGQ"
              title="YouTube video player"
              style={{
                width: "100%",

                aspectRatio: "16/9",
              }}
            ></iframe>
          </VideoHolder>
          <Headshot />
        </>
      ) : (
        <></>
      )}

      {tab === 2 ? <Work /> : <></>}
      {tab === 0 ? <Contact /> : <></>}
    </Background>
  );
}
