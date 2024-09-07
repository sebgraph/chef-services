import Section from "../components/section";


const Home = () => {
  return(  
    <>
    <Section
      title="First Section Title" 
      subtitle="This is the first section subtitle." 
      backgroundClass="bg-neutral-900" 
      colorClass="clr-neutral-100"
      paragraphs={["Paragraph 1", "Paragraph 2"]}
      hasSubtitle={false}
    />

    <Section
    title="First Section Title" 
    subtitle="This is the first section subtitle." 
    backgroundClass="bg-neutral-200" 
    colorClass="clr-neutral-900"
    paragraphs={["Paragraph 1", "Paragraph 2"]}
    hasSubtitle={false}
    hasEvenColumns={true}
    textCenter="text-center"
    dataDecoration={true}
  />

<Section
    title="First Section Title" 
    subtitle="This is the first section subtitle." 
    backgroundClass="bg-neutral-200" 
    colorClass="clr-neutral-900"
    paragraphs={["Paragraph 1", "Paragraph 2", "Paragraph 3", "Paragraph 4"]}
    hasSubtitle={false}
    hasEvenColumns={true}
    textCenter="text-center"
    dataDecoration={true}
  />
  </>
  )
  };
  
  export default Home;