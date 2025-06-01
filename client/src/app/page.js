'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    router.push('/login');
  }, [router]);
  return (
    <div>
       <div className="flex justify-center items-center min-h-screen">
      Welcome To CG Herbal
    </div> 
    </div>
  );
}
