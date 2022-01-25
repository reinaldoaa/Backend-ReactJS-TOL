//import { LazyResult } from 'postcss';
import React from 'react';
//import CategoryTitle from '../pages/CategoryTitle';

const About = () => {
return (
<div>

  <div className="bg-blue-100 py-24 flex  flex-wrap items-center justify-center lg:space-y-8">
    <div className="bg-white rounded-lg shadow-2xl w-3/4">
      <img src="/images/nosotro-ctra.png" className="rounded-t-lg h-60 w-full" alt="" /> {/* object-cover */}
      <header className="bg-gray-100 rounded-t-lg py-5 px-8">
      <h2 className="text-xl font-extrabold">CTRA</h2>
        Corporaci&oacute;n Tecnol&oacute;gica RA
      </header>
      <div className="p-8 ">
        Es una empresa que tiene como fin aportar soluciones en tecnolog&iacute;a de la informaci&oacute;n, 
        brindando alternativas que se adapten a los requerimientos de cada cliente, de acuerdo a sus necesidades. 
        Nuestros productos son de alta calidad, acorde con las tendencias actuales, permitiendo adaptarnos a cualquier 
        cambio que pueda acontecer en el pa&iacute;s con facilidad y en el menor  tiempo posible, gracias a la arquitectura 
        totalmente abierta que poseen nuestras aplicaciones; Garantizando adem&aacute;s el servicio. Estamos capacitados para 
        soportar las nuevas alternativas que se puedan presentar en cuanto a tecnolog&iacute;a se refiere.
      </div>
    </div>

    <div className="bg-white rounded-lg shadow-2xl w-3/4">
      <img src="/images/mision-ctra.png" className="rounded-t-lg h-60 w-full" alt=""/> {/* object-cover */}
      <header className="bg-gray-100 rounded-t-lg py-5 px-8">
      <h2 className="text-xl font-extrabold">MISI&Oacute;N</h2>
      Nuestro Prop&oacute;sito
      </header>
      <div className="p-8 ">
      Destacarnos como empresa l&iacute;der en el mercado, y de esta forma ofrecerles la m&aacute;s exigente asesor&iacute;a a nuestros clientes, ayud&aacute;ndolos a que su compañ&iacute;a cuente con nuevas y mejores herramientas tecnol&oacute;gicas.      </div>
    </div>


    <div className="bg-white rounded-lg shadow-2xl w-3/4">
      <img src="/images/vision.png" className="rounded-t-lg h-60 w-full" alt=""/> {/* object-cover */}
      <header className="bg-gray-100 rounded-t-lg py-5 px-8">
      <h2 className="text-xl font-extrabold">VISI&Oacute;N</h2>
      Nuestro Objetivo
      </header>
      <div className="p-8 ">
        Ser un excelente proveedor que cumpla con las exigencias de calidad, eficiencia, apoyo de servicios, e ingenier&iacute;a 
        integral en todas las &aacute;reas de electr&oacute;nica, computaci&oacute;n tales como:
        <ul> 
          <li>
            Venta, implantaci&oacute;n y asesor&iacute;a en Software Administrativo, Contable y N&oacute;mina. 
          </li>
          <li>
            Desarrollo de sistemas de Facturaci&oacute;n, Caja y Banco, Inventario,  Odontol&oacute;gicos, Cl&iacute;nicas, etc.
          </li>
          <li>
            Consultores especializados de software de terceros; Profit Plus: Administrativo, Contable y Nomina. 
          </li>
          <li>
            Diseño y desarrollo de interfaz para Profit Plus y Saint Enterprise. 
          </li>
        </ul>
        <h2>OBJETIVO</h2>
        <div >
          Crear y/o adaptar aplicaciones, servicio y soporte t&eacute;cnico especializado as&iacute; como tambi&eacute;n 
          asesor&iacute;a e integraci&oacute;n Tecnol&oacute;gica para todo tipo de empresas.
        </div>
      </div>
    </div>

  </div>

  </div>  

  );
};


export default About;
