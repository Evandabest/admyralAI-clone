import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
        Page Not Found
      </h1>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link href="/">
        <Button className="px-6 py-2 bg-black text-white hover:bg-gray-800">
          Return to Home
        </Button>
      </Link>
    </div>
  );
}
