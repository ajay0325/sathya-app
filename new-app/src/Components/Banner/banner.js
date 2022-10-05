import styleB from './banner.module.css';
// import img1 from '../../assets/1.jpg';
import img1 from '../../assets/2.jpg';
import img2 from '../../assets/3.jpg';
import img3 from '../../assets/4.jpg';
import img4 from '../../assets/5.jpg';

import { useState } from 'react';
import { useEffect } from 'react';

function Banner() {

    const img = [img1,img2,img3,img4];

    const [image, setImage] = useState(0)

    useEffect(()=>{
        console.log(image);
    },[image])


    return (
        <div className={styleB.container}>
            <img src={img[image]} className={styleB.container1} alt="banner"></img>
            <div className={styleB.left }  onClick={()=>{
                if(image>0){
                    setImage(image-1)
                }
            }}>&#10094;</div>
            <div className={styleB.right} onClick={()=>{
                if(image<img.length-1){
                    setImage(image+1);
                }
            }}
            >&#10095;</div> 
        </div>
    )
}

export default Banner;