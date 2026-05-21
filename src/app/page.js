import Hero from "./components/Hero";
import PetCareTipsPage from "./components/petCareTips";
import WhyAdoptPetPage from "./components/whyadopt";



export default function Home() {
  return (
    <div>
      <Hero />
      < WhyAdoptPetPage />
      < PetCareTipsPage />
    </div>
  );
}
