'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

declare global {
  interface Window {
    deferredPrompt: any;
  }
}

export default function HomePage() {
  const router = useRouter();

  const [isMobile, setIsMobile] = useState(false);
  const [isPWA, setIsPWA] = useState(false);
  const [showSplash, setShowSplash] = useState(false);
  const [showInstallBtn, setShowInstallBtn] = useState(false);

  useEffect(() => {
    // Detect if user is on a mobile device
    const isPhone = /Mobi|Android/i.test(navigator.userAgent);
    setIsMobile(isPhone);

    // Detect if app is running as a standalone PWA
    const isStandalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as any).standalone === true;

    if (isStandalone) {
      setIsPWA(true);
      setShowSplash(true);

      // Show splash for 5 seconds, then navigate to login
      setTimeout(() => {
        setShowSplash(false);
        router.push('/auth/login');
      }, 2500);
    }

    // Capture install prompt
    const handleBeforeInstallPrompt = (e: any) => {
      e.preventDefault();
      console.log(e)
      window.deferredPrompt = e;
      setShowInstallBtn(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, [router]);

  const handleInstall = () => {
    const prompt = window.deferredPrompt;
    if (!prompt) return;

    prompt.prompt();
    prompt.userChoice.then(() => {
      window.deferredPrompt = null;
      setShowInstallBtn(false);
    });
  };

  // Block desktop users
  if (!isMobile) {
    return (
      <div className="h-screen flex items-center justify-center bg-white text-center px-4">
        <h1 className="text-xl font-semibold text-gray-800">
          This app is only available on mobile devices.
        </h1>
      </div>
    );
  }

  // Show splash screen if running as PWA
  if (!isPWA && !showSplash) {
    return (
      <main className="h-screen flex flex-col items-center justify-center bg-white px-6 text-center">
        <h1 className="text-xl font-semibold text-gray-800 mb-4">
          Welcome to the Mobile App
        </h1>
        {showInstallBtn && (
          <button
            onClick={handleInstall}
            className="bg-indigo-600 text-white px-6 py-2 rounded-full font-medium hover:bg-indigo-700 transition"
          >
            Download App
          </button>
        )}
      </main>
    );
  }


  // Show fallback message for mobile browser
  return (
    <main className="h-screen w-full flex flex-col items-center justify-between py-12 top-bar-bg">
      <div className="flex-grow flex items-center justify-center">
        <Image
          src="/images/logo.png"
          width={150}
          height={75}
          alt="IUB Logo"
        />
      </div>
      <div className="text-center">
        <p className="text-sm text-gray-500">from</p>
        <p className="font-semibold text-black">The Students of IUB</p>
      </div>
    </main>
  );
}
