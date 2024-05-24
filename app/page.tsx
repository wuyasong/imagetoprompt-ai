import CTASection from "@/components/CTA/CTASection";
import FAQSection from "@/components/FAQ/FAQSection";
import FeatureSection from "@/components/Feature/FeatureSection";
import FooterSection from "@/components/Footer/FooterSection";
import HeroSection from "@/components/Hero/heroSection";
import HowToUse from "@/components/How/HowToUse";
import UploadSection from "@/components/Upload/UploadSection";
import { Toaster } from "sonner";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 pt-24 pb-2">
      <HeroSection />
      <UploadSection />
      <HowToUse />
      <FeatureSection />
      <FAQSection />
      <CTASection />
      <FooterSection />
      <Toaster position="top-center" richColors />
    </main>
  );
}
