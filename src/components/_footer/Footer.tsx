"use client"
import React, { useState, useEffect } from 'react';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  // Função para verificar se o usuário rolou até o final da página
  const checkScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  // Adiciona o event listener quando o componente é montado
  // e o remove quando é desmontado
  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  return (
    <footer className={`fixed inset-x-0 bottom-0 items-center justify-center bg-slate-700 ${isVisible ? 'block' : 'hidden'}`}>
      <h1>footer</h1>
    </footer>
  );
}
