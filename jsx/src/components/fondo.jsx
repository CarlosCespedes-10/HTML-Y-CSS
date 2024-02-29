import React from 'react';
import '../components/Article.css';
import Image2 from '../assets/fondo.jpg';

const Image =() => {
    return (
        <div>
            <img src={Image2} alt="fondo" className='imagen-background'/>
        </div>
    )
} 

export default Image;