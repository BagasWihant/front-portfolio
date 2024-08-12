import { About } from "@/components/about";
import Contact from "@/components/contact";
import { HeroSection } from "@/components/hero-sections";
import Project from "@/components/project";
import next from "next";

HeroSection
const getapi = async () => {
  const res = await fetch("https://admin-portfolio.wihant.com/api/getDataPortfolio",{next: {revalidate: 10}});
    if(!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
};
export default async function Home() {
  const data = await getapi();
  return (
    <main className="bg-custom-100 overflow-hidden flex items-center justify-between mx-auto sm:px-6 flex-col">
     <HeroSection text={data?.text[0]} />  
     <About text={data?.text[0]} />
     <Project project={data?.project} />
     <Contact  />
    </main>
  );
}
