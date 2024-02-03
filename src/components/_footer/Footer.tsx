"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';

type GithubUser = {
  name: string;
  html_url: string;
};

const Footer = () => {
  const [creatorInfo, setCreatorInfo] = useState<GithubUser | null>(null);

  useEffect(() => {
    const fetchGithubInfo = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/macshinaider');
        setCreatorInfo(response.data);
      } catch (error) {
        console.error('Erro ao buscar informações do GitHub:', error);
      }
    };

    fetchGithubInfo();
  }, []);

  return (
    <footer className="bg-gray-800 text-white p-4 mt-6">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl mb-2">Alumifran Descartáveis</h2>
        {creatorInfo && (
          <>
            <p className="mb-2">Criado por {creatorInfo.name}</p>
            <a href={creatorInfo.html_url} target="_blank" rel="noopener noreferrer" className="underline">
              Ver perfil no GitHub
            </a>
          </>
        )}
      </div>
    </footer>
  );
};

export default Footer;
