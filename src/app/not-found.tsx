import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="py-24 sm:py-32">
      <Container className="flex flex-col items-center gap-4 text-center">
        <span className="font-display text-6xl font-bold text-emerald-100">404</span>
        <h1 className="font-display text-2xl font-semibold text-neutral-900">Page not found</h1>
        <p className="max-w-sm text-neutral-500">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <Button href="/" variant="primary" size="lg" className="mt-2">
          Back to home
        </Button>
      </Container>
    </div>
  );
}
