import { useState } from "react";

const Section = ({ title, desc, visible, setVisible }) => {
  
  return (
    <div className="about_section">
      <h3>{title}</h3>
      {visible ? (
        <>
        <button onClick={() => setVisible(false)}>Hide</button>
        <p>{desc}</p>
        </>
        
      ) : (
        <button onClick={() => setVisible(true)}>show</button>
      )}

      
    </div>
  );
};

const About = () => {
  const [visibleSection, setVisibleSection] = useState("");

  return (
    <>
      <h1>Details</h1>
      <Section
        title={"About Food Villa"}
        desc={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        }
        visible={visibleSection==="about"}
        setVisible={()=>{
          setVisibleSection("about")
        }}
      />
      <Section
        title={"Food-Villa Core Team"}
        desc={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        }
        visible={visibleSection==="team"}
        setVisible={()=>{
          setVisibleSection("team")
        }}
      />

      <Section
        title={"Customer Services"}
        desc={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        }
        visible={visibleSection==="services"}
        setVisible={()=>{
          setVisibleSection("services")
        }}
      />

      <Section
        title={"FAQ"}
        desc={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        }
        visible={visibleSection==="faq"}
        setVisible={()=>{
          setVisibleSection("faq")
        }}
      />
    </>
  );
};

export default About;
