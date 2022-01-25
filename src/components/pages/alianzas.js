import React from 'react';
import {Slidershow, Slide, TextoSlide} from './../shared/Slidershow';
import styled from 'styled-components';
import img1 from './../../images/slide/slide-1.jpg';
import img2 from './../../images/slide/slide-2.jpg';
import img3 from './../../images/slide/slide-3.jpg';
import axios from 'axios';

const Alianzas = () => {
      const [usuario,setusuario] = useState(null);
      const [cargandoUsuariom, setCargandoUsuario]=useState(true);

      useEffect(() => {
            async function cargarusuario(){
                  if (!getToken()){
                        setCargandoUsuario(false);
                        return;
                  }
            }            
            cargarUsuario();
      })
            
            

return (
<div>
      <Titulo>ALIANZAS </Titulo>
      {/*overflow: hidden*/}
      <div className='overflow-hidden max-w-screen-1000'>
      <Slidershow controles={true}>
            <Slide>
                  <a href="http://localhost:3000">
                        <img src={img1} alt=""/>
                  </a>
                  <TextoSlide>
                        <p>Un equipo , una familia, una forma de hacer algo productivo por su marca o producto </p>
                  </TextoSlide>
            </Slide>
            <Slide>
                  <a href="http://localhost:3000">
                        <img src={img2} alt=""/>
                  </a>
                  <TextoSlide>
                        <p>Te damos 4 Tips o consejos para que des los primeros pasos en la dirección correcta de un excelente Marketing digital</p>
                  </TextoSlide>
            </Slide>
            <Slide>
                  <a href="http://localhost:3000">
                        <img src={img3} alt=""/>
                  </a>
                  <TextoSlide>
                        <p>Marketing Digital en Redes Sociales</p>
                  </TextoSlide>
            </Slide>
      </Slidershow>

      </div>

      <div className="bg-blue-100 py-24 flex  flex-wrap items-center justify-center lg:space-y-8">
            <div className="bg-white rounded-lg shadow-2xl w-3/4">
                  <img src="/images/nosotro-ctra.png" className="rounded-t-lg h-60 w-full " alt=""/> {/* object-cover */}
                  <header className="bg-gray-100 rounded-t-lg py-5 px-8">
                        <h2 className="text-xl font-extrabold">Aliados</h2>
                        Corporaci&oacute;n Tecnol&oacute;gica RA
                  </header>
                  <div className="p-8 ">
                        Los aliados comerciales no son simples clientes, proveedores o distribuidores autorizados de productos y servicios, 
                        sino empresas con las que hemos generado acuerdos importantes que nos fortalecen comercialmente e impulsan nuestro crecimiento.  
                  </div>
            </div>
      </div>

</div>

  );
};

const Titulo = styled.p`
	font-size: 18px;
	font-weight: 700;
	text-transform: uppercase;
	margin-bottom: 10px;
`;

export default Alianzas;
