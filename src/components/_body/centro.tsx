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
          <h1 className="text-4xl">Unidade Centro</h1>
          <div className="mt-5">
            <div>
              <h2 className="text-2xl">Informações de Contato</h2>
              <p>
                Endereço: R. Barão de Jaceguai, 481 - Centro, Mogi das Cruzes -
                SP, 08710-160{" "}
                <a href="https://www.google.com/maps/search/?api=1&query=-23.52174707679344,-46.19319709698586">
                  <TfiMapAlt size={30} />
                </a>
              </p>
              <p>Telefone: (11) 99421-3844 </p>
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
