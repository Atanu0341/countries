import HomeSection from "@/components/home-section";
import { GridBackgroundDemo } from "@/components/ui/grid-background";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <GridBackgroundDemo>
        <HomeSection />
      </GridBackgroundDemo>
    </main>
  );
}
