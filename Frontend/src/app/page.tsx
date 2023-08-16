"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RiInstagramFill } from 'react-icons/ri';
import { FaJs, FaCode } from 'react-icons/fa';

import logo from './../../public/Logo_CodeFest.png';

export default function Home() {
  const [showJavaScriptInfo, setShowJavaScriptInfo] = useState(false);
  const [showDartInfo, setShowDartInfo] = useState(false);
  const [isJavaScriptSubscribed, setIsJavaScriptSubscribed] = useState(false);
  const [isDartSubscribed, setIsDartSubscribed] = useState(false);

  const toggleJavaScriptInfo = () => {
    setShowJavaScriptInfo(!showJavaScriptInfo);
    setShowDartInfo(false);
  };

  const toggleDartInfo = () => {
    setShowDartInfo(!showDartInfo);
    setShowJavaScriptInfo(false);
  };

  const handleJavaScriptSubscribe = () => {
    setIsJavaScriptSubscribed(true);
  };

  const handleDartSubscribe = () => {
    setIsDartSubscribed(true);
  };
  const targetDate = new Date("2023-09-04T23:59:59").getTime();

  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();;
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

      setTimeRemaining({
        days,
        hours,
        minutes,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center">
      <header className="top-0 left-0 right-0 flex items-center text-white justify-between px-4 py-2 bg-transparent absolute">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <div className="bg-logo">
              <Image
                priority
                src={logo}
                alt="Maratona de programaçao"
                width={50}
                height={50}
                className=""
              />
            </div>
          </Link>
        </div>
        <nav className="space-x-4 text-xl">
          <a href="https://landing-page-seven-lilac.vercel.app/">Inscreva-se</a>
        </nav>
      </header>
      <div className="bg-gradient-to-r from-cor1 to-cor2 h-[95vh] flex flex-col justify-center items-center text-white">
        <h1 className="text-6xl font-bold m-5">UPE CodeFest</h1>
        <h3 className="text-2xl font-bold mb-10">Maratona de Programação</h3>
        <div className="text-3xl mt-4 flex">
          {timeRemaining.days} dias, {timeRemaining.hours} horas e {timeRemaining.minutes} minutos até o início da Maratona!
        </div>
      </div>
      <div className="bg-white h-[95%] lg:h-[95vh] text-center p-8 mb-5">
        <h1 className="text-4xl font-bold mb-4">Sobre a Maratona</h1>
        <p className="text-xl mb-10">
          Bem-vindos à Maratona de Programação UPE CodeFest 2023, uma oportunidade única para mostrar suas habilidades em programação e trabalhar em equipe para resolver desafios empolgantes! Esta competição é o lugar onde a criatividade, a resolução de problemas e o trabalho em equipe se unem para criar uma experiência enriquecedora e desafiadora. Organizado pelos estudantes do curso de Engenharia de Software da Universidade de Pernambuco, o evento promete ser uma jornada estimulante no mundo da programação.
        </p>
        <p className="text-xl">
          Acesse o edital para obter mais informaçoes
        </p>
        <a target="_blank" href="https://docs.google.com/document/d/1ubEZCjZdIO9NeFaEl5aEu99ErQRqUJDTHXW0GGq14ig/edit?usp=drivesdk">
        <button className="bg-primary text-white px-8 py-2 rounded-full mt-4 text-lg">
          Edital
        </button>
      </a>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 ">
        <div className="hidden lg:block text-center">
          <h2 className="text-xl font-bold mb-2">Desenvolva Habilidades</h2>
          <p className="text-lg">
            Neste projeto, você terá a oportunidade de enfrentar desafios complexos que irão testar sua criatividade e habilidades de resolução de problemas.
            À medida que você busca desenvolver soluçoes para novas soluções de software, estará ampliando suas habilidades técnicas e desenvolvendo uma mentalidade analítica e crítica que será valiosa em sua carreira.
          </p>
        </div>
        <div className="hidden lg:block text-center">
          <h2 className="text-2xl font-bold mb-2">Trabalhe em Equipe</h2>
          <p className="text-lg">
            A colaboração efetiva em equipe é essencial para o sucesso deste projeto. Você aprenderá a comunicar suas ideias, ouvir os insights dos colegas e tomar decisões conjuntas para superar obstáculos.
            Essa experiência fortalecerá suas habilidades de comunicação, liderança e gestão de conflitos, qualidades valorizadas em qualquer ambiente de trabalho.
          </p>
        </div>
        <div className="hidden lg:block text-center">
          <h2 className="text-xl font-bold mb-2">Prepare-se para o Mercado</h2>
          <p className="text-lg">
          Nossa Maratona é a sua chance de ganhar habilidades valiosas para o mercado de trabalho. Ao enfrentar desafios complexos e trabalhar em equipe para solucionar problemas, você estará construindo as bases para uma carreira de sucesso na indústria de tecnologia. Não perca essa oportunidade de aprendizado e networking.
          </p>
        </div>
      </div>

      </div>
      <div className="bg-back bg-cover bg-center text-white h-[95%] lg:h-[95vh] p-8">
        <h1 className="text-4xl font-bold mb-4 text-center">Oficinas</h1>
        <div className="flex justify-center space-x-4 mb-4">
          <button className="bg-primary text-white px-6 py-3 rounded-full" onClick={toggleJavaScriptInfo}>
            <span className="mr-2">
              <FaJs className="inline-block h-6 w-6" />
            </span>
            JavaScript
          </button>
          <button className="bg-primary text-white px-6 py-3 rounded-full" onClick={toggleDartInfo}>
            <span className="mr-2">
              <FaCode className="inline-block h-6 w-6" />
            </span>
            Dart
          </button>
        </div>
        {showJavaScriptInfo ? (
  <div className="text-xl text-center mb-4">
    <h2 className="font-bold mb-2">Curso de JavaScript</h2>
    <p className="text-sm md:text-xl">
      Este é o convite para embarcar em uma jornada de conhecimento no mundo do JavaScript, uma das linguagens de programação mais influentes e versáteis da atualidade. Durante o nosso curso, que ocorrerá nos dias 4, 6 e 8 de setembro, você terá a oportunidade de mergulhar nos fundamentos essenciais do JavaScript. 

      O JavaScript desempenha um papel fundamental na construção de aplicações web interativas e dinâmicas. Você terá a chance de compreender como transformar suas ideias em código funcional, à medida que aprofundamos na riqueza de recursos que o JavaScript oferece.

      Se você deseja consolidar suas habilidades de programação ou está apenas começando sua jornada no mundo do desenvolvimento web, nosso curso de JavaScript é projetado para atender às suas necessidades. Não apenas expandiremos seu conhecimento técnico, mas também o incentivaremos a explorar a criatividade e a resolução de problemas, habilidades fundamentais para qualquer programador.

      Venha se juntar a nós nos dias 4, 6 e 8 de setembro, e vamos juntos explorar as maravilhas do JavaScript!
    </p>

    {!isJavaScriptSubscribed && (
      <a href="https://landing-page-seven-lilac.vercel.app/">
        <button className="bg-primary text-white px-4 py-2 rounded-full mt-4" onClick={handleJavaScriptSubscribe}>
          Inscrever-se
        </button>
      </a>
    )}
  </div>
) : showDartInfo ? (
  <div className="text-xl text-center mb-4">
    <h2 className="font-bold mb-2">Curso de Dart</h2>
    <p className="text-sm md:text-xl">
      Estamos animados para convidá-lo a participar do nosso curso exclusivo de Dart, que ocorrerá nos dias 4, 6 e 8 de setembro. O Dart, uma linguagem de programação moderna e poderosa, é amplamente reconhecido por ser a base do framework Flutter, utilizado no desenvolvimento de aplicativos móveis e interfaces dinâmicas.

      Durante este curso, iremos mergulhar fundo no mundo do Dart. Você terá a oportunidade de explorar os conceitos fundamentais da linguagem. Compreenderemos como o Dart desempenha um papel crucial na construção de aplicativos fluidos e de alto desempenho com o Flutter.

      Nosso objetivo é capacitá-lo com as habilidades necessárias para desenvolver aplicações funcionais. Você sairá deste curso com uma compreensão da linguagem e a confiança para começar a desenvolver seus próprios códigos.

      Se você é um entusiasta de desenvolvimento, um curioso explorador ou alguém em busca de ampliar suas habilidades, junte-se a nós nos dias 4, 6 e 8 de setembro. Vamos mergulhar no Dart e descobrir como ele pode transformar suas ideias em aplicativos funcionais e atraentes.
    </p>

    {!isDartSubscribed && (
      <a href="https://landing-page-seven-lilac.vercel.app/">
        <button className="bg-primary text-white px-4 py-2 rounded-full mt-4">
          Inscrever-se
        </button>
      </a>
    )}
  </div>
) : (
  <div className="text-xl text-center mb-4">
    <h2 className="font-bold mb-2">Conheça os cursos que iremos oferecer</h2>
    <p className="text-lg">
      Selecione um dos cursos acima para obter mais informações e inscrever-se. Esta é uma oportunidade única para aprender e aprimorar suas habilidades de programação nas linguagens JavaScript e Dart. Não perca a chance de fazer parte deste evento enriquecedor!
    </p>
  </div>
)}

      </div>
      <div className="bg-white h-[95%] md:h-[95vh] flex flex-col justify-center items-center p-8">
        <h1 className="text-4xl font-bold text-center">Junte-se a Maratona!</h1>
        <p className="text-lg text-center mt-4">
          Não perca a oportunidade de fazer parte da experiência inovadora e desafiadora da UPE CodeFest 2023. Esta é a sua chance de mergulhar em um ambiente de aprendizado intensivo, onde sua criatividade será testada e suas habilidades em programação ganharão destaque.
          Você tambem poderá vivenciar três dias de imersão total nas linguagens JavaScript e Dart. Descubra como essas linguagens podem ser poderosas aliadas para enfrentar os desafios da programação moderna. As oficinas estão programadas para os dias 4, 6 e 8 de setembro, e você não vai querer perder essa incrível oportunidade de aprendizado e networking.
        </p>
        <a href="https://landing-page-seven-lilac.vercel.app/" className="mt-6 bg-primary text-white px-6 py-3 rounded-full text-lg hover:bg-secondary transition-colors duration-300">
          Inscreva-se Agora
        </a>
      </div>
      <div className="bg-white h-[95vh] p-8 flex justify-center">
        <h1 className="text-4xl font-bold">Patrocinadores</h1>
      </div>
      <footer className="bg-back bg-cover bg-center text-white h-[10vh] p-4 flex justify-center items-center">
        <a href="https://www.instagram.com/upecodefest/" target="_blank" rel="noopener noreferrer" className="instagram-link">
          <RiInstagramFill size={30} />
        </a>
      </footer>
    </div>
  );
}