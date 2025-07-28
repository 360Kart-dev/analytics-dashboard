'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function AuthWrapper({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (pathname === '/login') {
      setIsAuthenticated(true);
      return;
    }

    const authStatus = localStorage.getItem('isAuthenticated');
    if (!authStatus) {
      router.push('/login');
    } else {
      setIsAuthenticated(true);
    }
  }, [router, pathname]);

  if (!isAuthenticated) {
    return null;
  }

  return children;
}
