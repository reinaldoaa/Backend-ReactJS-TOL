import React,{useState, useContext,useEffect} from 'react'
import {Link} from 'react-router-dom';
import { AiOutlineShoppingCart,AiOutlineMenu,AiOutlineClose } from "react-icons/ai";

//Pages
import {AuthContext} from './../shared/AuthProvider';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const handlerOpen = ()=>setIsOpen( !isOpen );
    //console.log(!isOpen),
    //const closeMobileMenu=()=> setIsOpen(false);
    const [dropdownProduct, setDropDownProducts] = useState(false);
    const handlerProducts = ()=> {
        setdropdownServices(false);
        setDropDownProducts(!dropdownProduct);
        }
    const [dropdownServices, setdropdownServices] = useState(false);
    const handlerServices = ()=>{ 
        setdropdownServices(!dropdownServices);
        setDropDownProducts(false);
    }

    const {profile} = useContext( AuthContext );

    const COMMON_STYLES = " flex justify-center items-center rounded-full text-white ";
    const count =8;

    //*************************************** */ 
    const onMouseEnter = () => {
    };
        
    const onMouseLeave = () => {
        setDropDownProducts(false);
        setdropdownServices(false);
        console.log('dropdownProduct',dropdownProduct);
    };
        
    //Resize de Windows
    const [windowWidth, setWindowWidth] = useState(0);
    const [windowHeight, setWindowHeight] = useState(0);
    let resizeWindow = () => {
        if (window.innerWidth>=1025) {
            console.log('Poner en verdadesdo isOpen');
            setIsOpen( true );
        }
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };
  
    useEffect(() => {
      resizeWindow();
      window.addEventListener("resize", resizeWindow);
      return () => window.removeEventListener("resize", resizeWindow);
    }, []);
    //FIN Resize de Windows

    return (
        <nav className="bg-bluenavbar900 shadow-md  ">
            <div className="container flex flex-wrap px-4 py-2 mx-auto lg:space-x-4">
                    <Link to='/' className="inline-flex p-2 text-white text-xl font-bold uppercase ">
                        ctra-V2 
                        <span>
                            {windowWidth} x {windowHeight}
                        </span>                         
                    </Link>
                    <button  className="lg:hidden inline-flex items-center justify-center text-white border h-10 w-10 ml-auto rounded-md outline-none focus:outline-none" onClick={handlerOpen} >
                        {/* AiOutlineShoppingCart->CarritoCompra, AiOutlineMenu->Menu,  AiOutlineClose-> Cerrar */}
                        {/*<i className={isOpen ? 'fas fa-times' : 'fas fa-bars' }  /> */}
                        {isOpen ?  <AiOutlineClose/>  :<AiOutlineMenu/>}
                    </button>
                    {/* MENU :class="{'hidden' :  !navbarOpen}"  fas fa-bars */}

                    <div className={isOpen ? 'w-full lg:inline-flex lg:w-auto mt-2 lg:mt-0' : 'hidden'} >
                        <ul className='w-full lg:w-auto flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-2 transition duration-500 ease-in-out'>
                            <li>
                                <Link to='/' className='flex px-4 py-2 rounded-md font-medium text-white hover:bg-green700  ' >
                                    Inicio
                                </Link>
                            </li>
                            {/* Inicio Dropdown Productos*/}
                            <li className='relative'>
                                <button to='/' className='flex outline-one focus:outline-none px-4 py-2 rounded-md font-medium text-white hover:bg-green700' onClick={handlerProducts} > {/* onClick={closeMobileMenu} */}
                                    Productos
                                </button>
                                <div className={dropdownProduct ? "lg:relative bg-white rounded-md right-0 p-2" : "hidden"}  onMouseLeave={onMouseLeave}>
                                    <ul className='space-y-2 lg:w-48'>
                                        <li>                                 
                                            <Link to='/network' className='flex p-2 text-gray-600 rounded-md hover:bg-gray-100 hover:text-black' >
                                                Redes
                                            </Link>
                                        </li>
                                        <li>                                 
                                            <Link to='/server' className='flex p-2 text-gray-600 rounded-md hover:bg-gray-100 hover:text-black' >
                                                Servidores 
                                            </Link>
                                        </li>
                                        <li>                                 
                                            <Link to='/electronico' className='flex p-2 text-gray-600 rounded-md hover:bg-gray-100 hover:text-black' >
                                                Equipos de computo
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            {/* Fin Dropdown Productos*/}
                            <li className='relative'>
                            {/* Inicio Dropdown Servicios*/}
                                <button to='/'  onClick={handlerServices} className='flex outline-none focus:outline-none px-4 py-2 rounded-md font-medium text-white hover:bg-green700' >
                                    Servicios
                                </button>
                                <div className={dropdownServices ? "lg:relative bg-white rounded-md right-0 p-2" : "hidden"} onMouseLeave={onMouseLeave} >
                                    <ul className='space-y-2 lg:w-48'>
                                        <li>
                                            <Link to='/softech' className="flex p-2 text-gray-600 rounded-md hover:bg-gray-100 hover:text-black">
                                            Profit Plus
                                            </Link>
                                            <Link to='/consulting' className="flex p-2 text-gray-600 rounded-md hover:bg-gray-100 hover:text-black">
                                            Consultorias
                                            </Link>
                                            <Link to='/soporte' className="flex p-2 text-gray-600 rounded-md hover:bg-gray-100 hover:text-black">
                                            Soporte
                                            </Link>
                                        </li>
                                    </ul>

                                </div>
                                {/* Fin Dropdown Servicios /about */}
                            </li>
                            <li>
                                <Link to='/about' className='flex px-4 py-2 rounded-md font-medium text-white hover:bg-green700'>
                                    Nosotros
                                </Link>
                            </li>
                            <li>
                                <Link to='/alianzas' className='flex px-4 py-2 rounded-md font-medium text-white hover:bg-green700' >
                                    Aliados
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={isOpen ? "inline-flex space-x-2":"hidden"}>
                        <button className={  COMMON_STYLES + " relative  top-2 right-2 w-8 h-8 bg-gray-900"}>
                            <AiOutlineShoppingCart />
                            <div className={ COMMON_STYLES +" w-6 h-6 bg-blue-500 text-xs absolute -top-2 -right-2 font-semibold" } >
                                {count <= 9 ? count : "9+"}
                            </div>
                        </button>
 
                        <div className="text-center">
                            <img src={profile.avatar}  alt="Avatar" className="w-8 h-8 rounded-full" />
                            <p className=" text-xs text-white">{profile.name}</p>
                        </div>
                        {/* "/images/logo192.png"*/} 
                    </div>
            </div>
        </nav>
            
    )
}

export default Navbar
