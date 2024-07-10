import { useEffect } from "react";

const AnimacionScroll = () => {
  useEffect(() => {
    // Función para manejar el scroll suave al hacer clic en los enlaces internos
    const handleSmoothScroll = (e: any) => {
      e.preventDefault();
      const targetId = e.target.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    };

    // Agregar evento de clic a todos los enlaces internos
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    // Limpiar evento al desmontar el componente
    return () => {
      internalLinks.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  return null
}

export { AnimacionScroll } 
