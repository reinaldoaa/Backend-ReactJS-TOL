import React from 'react';
import { products_row_one, products_row_three, products_row_two } from '../shared/fakeData';
import CategoryTitle from '../pages/CategoryTitle';
import ProductList from './ProductList';
//import Slider from '../shared/Slider';
import {Slidershow, Slide, TextoSlide} from './../shared/Slidershow';
import styled from 'styled-components';
import img1 from './../../images/slide/slide-1.jpg';
import img2 from './../../images/slide/slide-2.jpg';
import img3 from './../../images/slide/slide-3.jpg';

const Home = () => {
return (
      <div className="xl:px-0 px-8">
            {/* <Slider/> */}
            <Titulo>Productos Destacados</Titulo>
            <div className='overflow-hidden max-w-screen-1000'>
                  <Slidershow controles={true}>
                        <Slide>
                              <a href="http://localhost:3000">
                                    <img src={img1} alt=""/>
                              </a>
                              <TextoSlide>
                                    <p>15% descuento en productos Slide1</p>
                              </TextoSlide>
                        </Slide>
                        <Slide>
                              <a href="http://localhost:3000">
                                    <img src={img2} alt=""/>
                              </a>
                              <TextoSlide>
                                    <p>15% descuento en productos Slide</p>
                              </TextoSlide>
                        </Slide>
                        <Slide>
                              <a href="http://localhost:3000">
                                    <img src={img3} alt=""/>
                              </a>
                              <TextoSlide>
                                    <p>15% descuento en productos Slide3</p>
                              </TextoSlide>
                        </Slide>
                  </Slidershow>            
            </div>
            <CategoryTitle  contenido="Home" />
            <div className="sm:flex justify-between items-center sm:space-x-5 space-x-0 sm:space-y-0 space-y-3">
                  <div className="sm:w-2/4">
                    <div className="aspect-w-14 aspect-h-6">
                      <img src="./images/banner_left.png" alt="" />
                    </div>
                  </div>
                  <div className="sm:w-2/4">
                    <div className="aspect-w-14 aspect-h-6">
                      <img src="./images/banner_right.png" alt="" />
                    </div>
                  </div>
            </div>
            <ProductList heading='Relojes' data={products_row_one}/>
            <ProductList heading='Calzado para damas' data={products_row_two}/>
            <ProductList heading='Calzados' data={products_row_three}/>
    </div>

);
};


const Titulo = styled.p`
	font-size: 18px;
	font-weight: 700;
	text-transform: uppercase;
	margin-bottom: 10px;
`;
 
export default Home;

