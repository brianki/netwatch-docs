import ImageCarousel from '@/components/ImageCarousel';
import "@/public/custom.css";

export const metadata = {
  title: 'Netwatch.ai',
};

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-5xl">
        <ImageCarousel />
      </div>
    </main>
  );
}