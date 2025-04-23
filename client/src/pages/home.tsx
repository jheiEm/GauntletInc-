import { About } from "@/components/home/about";
import { Approach } from "@/components/home/approach";
import { Clients } from "@/components/home/clients";
import { Contact } from "@/components/home/contact";
import { Hero } from "@/components/home/hero";
import { Leadership } from "@/components/home/leadership";
import { Mission } from "@/components/home/mission";
import { Services } from "@/components/home/services";
import { Stats } from "@/components/home/stats";
import { MainLayout } from "@/components/layout/main-layout";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <MainLayout>
      <Helmet>
        <title>Gauntlet Inc - Solutions Integration Specialists</title>
        <meta name="description" content="Gauntlet Inc is a premier solutions integration company specializing in the implementation of Service-Oriented Architecture (SOA) frameworks." />
      </Helmet>
      
      <Hero />
      <About />
      <Stats />
      <Leadership />
      <Mission />
      <Approach />
      <Services />
      <Clients />
      <Contact />
    </MainLayout>
  );
}
