import React from "react";
import Navbar from "../Componenets/Navbar";
import Header from "../Componenets/Header";

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-[url("/bg_img.png")] bg-cover bg-center'>
      <Navbar />
      <Header />
    </div>
  );
}
