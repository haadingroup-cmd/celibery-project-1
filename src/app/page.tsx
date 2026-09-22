import { HeroCarousel } from "@/components/home/HeroCarousel";
import { SignatureSeries } from "@/components/home/SignatureSeries";
import { VideoShowcase } from "@/components/home/VideoShowcase";
import { ProductLineupPills } from "@/components/home/ProductLineupPills";
import { MadeToMatchWorld } from "@/components/home/MadeToMatchWorld";
import { DrivenByInnovation } from "@/components/home/DrivenByInnovation";
import { GlobalPartners } from "@/components/home/GlobalPartners";
import { MediaVoices } from "@/components/home/MediaVoices";
import { WhatProsAreSaying } from "@/components/home/WhatProsAreSaying";
import { Newsroom } from "@/components/home/Newsroom";
import { QuickServicesRow } from "@/components/home/QuickServicesRow";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <SignatureSeries />
      <VideoShowcase />
      <ProductLineupPills />
      <MadeToMatchWorld />
      <DrivenByInnovation />
      <GlobalPartners />
      <MediaVoices />
      <WhatProsAreSaying />
      <Newsroom />
      <QuickServicesRow />
    </>
  );
}
