'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

interface SectionSpyProps {
  sections: { id: string; title: string }[];
  basePath?: string;
}

export default function SectionSpy({ sections, basePath = '' }: SectionSpyProps) {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Clean up previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          // Update URL using History API without reload
          const newUrl = basePath
            ? `${basePath}#${sectionId}`
            : `#${sectionId}`;
          
          // Only update if different from current hash
          const currentHash = window.location.hash;
          const targetHash = `#${sectionId}`;
          
          if (currentHash !== targetHash) {
            window.history.replaceState(null, '', newUrl);
          }
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersection, {
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    });

    // Observe each section
    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observerRef.current!.observe(element);
      }
    });

    // Handle initial hash on page load
    const hash = window.location.hash;
    if (hash) {
      const targetId = hash.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [sections, basePath, pathname]);

  return null; // This component doesn't render anything visible
}
