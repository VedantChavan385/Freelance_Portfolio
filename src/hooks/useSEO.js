import { useEffect } from 'react';

export default function useSEO({ title, description }) {
  useEffect(() => {
    if (title) {
      document.title = `${title} | Vedant Chavan - Full-Stack Developer`;
    } else {
      document.title = "Vedant Chavan - Full-Stack Developer & Freelancer";
    }
    
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', description);
    }
  }, [title, description]);
}
