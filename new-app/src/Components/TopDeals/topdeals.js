import { useEffect, useState } from 'react';
import styleTd from './td.module.css';
import TopItems from './topitems';

function TopDeals(){
    const [gro, setGro] = useState([]);
    const [veg,setVeg] = useState([]);
    const [fru, setFru] = useState([]);
    const [sna, setSna] = useState([]);

    const [topDeals, setTop] = useState([]);

    function srt(a,b){
        return b.offer-a.offer
    }

    const sortedArr = topDeals.sort(srt)


    useEffect(
        ()=>{
           fetch('http://localhost:3000/grocery').then((res)=>{
            if(res.ok){
                return res.json();
            }else{
                return false;
            }}).then(data=>setGro(data))

           fetch('http://localhost:3000/fruits').then((res)=>{
            if(res.ok){
                return res.json();
            }else{
                return false;
            }}).then(data=>setFru(data))

           fetch('http://localhost:3000/vegetables').then((res)=>{
            if(res.ok){
                return res.json();
            }else{
                return false;
            }}).then(data=>setVeg(data))

           fetch('http://localhost:3000/snacks').then((res)=>{
            if(res.ok){
                return res.json();
            }else{
                return false;
            }}).then(data=>setSna(data))

        }
    ,[])

    useEffect(()=>{
        setTop(()=>{
            return [...gro,...veg,...fru,...sna ]
        })
    },[veg,gro,fru,sna])

    return(
        <div className={styleTd.container}>
            <div className={styleTd.container2}>
            <div className={styleTd.wrap}>
            {
                sortedArr.map((data,i)=>{
                    if(i<10){
                        return(
                            <TopItems key={data.name} id={data.id} name={data.name} quantity={data.quantity} offer={data.offer} value={data.value} link={data.link} price={data.price}  item={data} image={data.url}></TopItems>
                        )
                    }
                   
                })
            }
        </div>
            </div>
        </div>
        
    )
}

export default TopDeals;
