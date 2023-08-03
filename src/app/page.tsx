"use client";
import Image from 'next/image'
import Link from 'next/link';
import logo from "./../../public/Logo_CodeFest.png"
import { useState, useEffect } from 'react';

export default function Home() {
  const [showJavaScriptInfo, setShowJavaScriptInfo] = useState(false);
  const [showFlutterInfo, setShowFlutterInfo] = useState(false);

  const toggleJavaScriptInfo = () => {
    setShowJavaScriptInfo(!showJavaScriptInfo);
    setShowFlutterInfo(false);
  }

  const toggleFlutterInfo = () => {
    setShowFlutterInfo(!showFlutterInfo);
    setShowJavaScriptInfo(false);
  }

  const targetDate = new Date("2023-09-04T23:59:59"); // Defina a data alvo aqui

  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
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
    <div className="">
     <header className="top-0 left-0 right-0 flex items-center text-white justify-between px-4 py-2 bg-transparent absolute">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <div className="bg-logo">
              <Image 
                priority
                src={logo}
                alt="SpaceBox"
                width={50}
                height={50}
                className=""
              />
            </div>
          </Link>
        </div>
        <nav className="space-x-4 text-xl">
          <a href="#">Sobre nós</a>
          <a href="#">Contato</a>
        </nav>
      </header>
      <div className="bg-gradient-to-r from-cor1 to-cor2 h-[95vh] flex flex-col justify-center items-center text-white">
        <h1 className="text-6xl font-bold">Maratona de Programação</h1>
        <div className="text-3xl mt-4">
          {timeRemaining.days} dias, {timeRemaining.hours} horas e {timeRemaining.minutes} minutos até o inicio da Maratona!
        </div>
      </div>
      <div className="bg-white h-[95vh] p-8">
        <h1 className="text-4xl font-bold mb-4">Sobre a Maratona</h1>
        <p className="text-xl">
          A Maratona de Programação é uma competição internacional de programação destinada a estudantes universitários de todos os níveis.
          Ela é organizada pela Associação das Máquinas Computacionais (ACM).
          O objetivo é melhorar as habilidades de programação, lógica e trabalho em equipe dos estudantes,
          ao mesmo tempo em que promove a criatividade e a inovação.
          Os três primeiros colocados ganham uma medalha de ouro, prata ou bronze, além de prêmios em dinheiro.
          Os demais participantes recebem certificados de participação.
        </p>
      </div>
      <div className="bg-back bg-cover bg-center text-white h-[95vh] p-8">
        <h1 className="text-4xl font-bold mb-4 text-center">Oficinas</h1>
        <div className="flex justify-center space-x-4 mb-4">
          <button className="bg-primary text-white px-6 py-3 rounded-full" onClick={toggleJavaScriptInfo}>JavaScript</button>
          <button className="bg-primary text-white px-6 py-3 rounded-full" onClick={toggleFlutterInfo}>Flutter</button>
        </div>
        {showJavaScriptInfo && (
          <p className="text-xl text-center">
            Informações sobre o workshop de JavaScript.
          </p>
        )}
        {showFlutterInfo && (
          <p className="text-xl text-center">
            Informações sobre o workshop de Flutter.
          </p>
        )}
      </div>
      <div className="bg-white h-[95vh] flex flex-col justify-center items-center p-8">
        <h1 className="text-4xl font-bold">Se inscreva</h1>
      </div>
      <div className="bg-back bg-cover bg-center text-white h-[95vh] p-8">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold mb-4">Organizadores</h1>
          <p className="text-xl text-center">
            Lorem ipsum dolor sit amet. Aut nostrum sequi ad inventore eligendi et corporis saepe.
            Qui aliquam quam et illo aliquam id quis dolor ut iure quidem qui incidunt veniam est perspiciatis magni.
            Sed optio voluptate ut quidem corporis qui minima consectetur ex consequatur repudiandae.Lorem ipsum dolor sit amet.
            Aut nostrum sequi ad inventore eligendi et corporis saepe. Qui aliquam quam et illo aliquam id quis dolor ut iure quidem qui incidunt veniam est perspiciatis magni. 
            Sed optio voluptate ut quidem corporis qui minima consectetur ex consequatur repudiandae.
          </p>
        </div>
      </div>
      <div className="bg-white h-[95vh]">
        <h1>Patrocinadores</h1>
      </div>
    </div>
  )
}