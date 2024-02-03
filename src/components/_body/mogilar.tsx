"use client";
import { TfiMapAlt } from "react-icons/tfi";
import { BsWhatsapp } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
export default function Centro() {
  function GetWahtsapp() {
    return window.open("https://wa.me/5511994213844", "_blank");
  }
  function GetInstagram() {
    return window.open("https://www.instagram.com/alumifran_/", "_blank");
  }
  return (
    <div className="flex items-center justify-center p-4 m-4 border rounded shadow">
      <section>
        <div>
          <h1 className="text-4xl">Unidade Mogilar</h1>
          <div className="mt-5">
            <div>
              <h2 className="text-2xl">Informações de Contato</h2>
              <p>
                Endereço: Av. Francisco Rodrigues Filho, 626 - Vila Mogilar,
                Mogi das Cruzes - SP, 08773-380
                <a href="https://www.google.com/maps/search/?api=1&query=-23.51715092292678,-46.19069127243007">
                  <TfiMapAlt size={30} />
                </a>
              </p>
              <p>Telefone: (11) 4790-5880 </p>
              <p>Email: contato@alumifran.com</p>
              <div className="flex justify-center items-center gap-8">
                <button onClick={GetWahtsapp} className="cursor-pointer">
                  <BsWhatsapp size={30} color="#4df002f4" />
                </button>
                <button onClick={GetInstagram} className="cursor-pointer">
                  <FiInstagram size={30} color="#eb0bb3f4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
