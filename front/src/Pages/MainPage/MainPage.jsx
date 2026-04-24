import {useEffect, useState} from "react";
import MainSlider from "./MainPageComponents/MainSlider/MainSlider.jsx";
import Error from "./MainPageComponents/Error/Error.jsx";
import PrimeryCards from "./MainPageComponents/PrimeryCards/PrimeryCards.jsx";
import SoldSlider from "./MainPageComponents/SoldSlider/SoldSlider.jsx";
import {Res} from '../../Response/Response.js'
import Articles from "./MainPageComponents/Articles/Articles.jsx";
import AboutUs from "./MainPageComponents/AboutUs/AboutUs.jsx";


export default function MainPage() {
    const [sliderData, setSliderData] = useState([]);
    const [primeryCardData, setPrimeryCardData] = useState([]);
    const [soldSliderData, setSoldSliderData] = useState([]);
    const [articlesData, setArticlesData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const Load = async () => {
            try{
                await Res({
                    sliderData: setSliderData,
                    primeryCardData: setPrimeryCardData,
                    soldSliderData: setSoldSliderData,
                    articlesData: setArticlesData,
                })
                setLoading(false)
            }catch (err){
                console.error('Ошибка: ',err)
                setError(true);
            }
        }
        Load()
    }, []);

    return (
        <>
            {loading ? (
                <main style={{background: 'linear-gradient(to bottom right, #111, #222)'}}>
                    {error ? (
                        <Error />
                    ) : (
                        <div className='spiner'></div>
                    )}
                </main>
            ) : (
                <main>
                    <div className='space'></div>
                    <MainSlider slides={sliderData}/>
                    <PrimeryCards primeryCardData={primeryCardData}/>
                    <SoldSlider soldSliderData={soldSliderData}/>
                    <Articles ArticlesData={articlesData}/>
                    <AboutUs/>
                </main>
            )}
        </>
    );
}