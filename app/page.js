import { About } from "@/components/about";
import Contact from "@/components/contact";
import { HeroSection } from "@/components/hero-sections";
import Project from "@/components/project";

HeroSection
const getapi = async () => {
  try {
    
    return await res.json();
    // return data.data;
  } catch (error) {
    console.log(error);
  }
};
export default async function Home() {
  const res = await fetch("https://admin-portfolio.wihant.com/api/getDataPortfolio");
  const data = await res.json();
  // console.log(data.data.text[0])
  return (
    <main className="bg-custom-100 overflow-hidden flex items-center justify-between mx-auto sm:px-6 flex-col">
     <HeroSection text={data.data?.text[0]} />  
     <About text={data.data?.text[0]} />
     <Project project={data.data?.project} />
     <Contact  />
    </main>
  );
}
