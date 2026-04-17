import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
export default function News(){
    const [news,setNews]=useState([]);
    const [search,setSearch]=useState("")
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState("");


    function fetchData(){

        setLoading(true);

        fetch("https://newsapi.org/v2/everything?q=tesla&from=2026-02-20&sortBy=publishedAt&apiKey=4adb99b0db754b89af23f7d156d4afee")
        .then(res=>res.json())
        .then(data=>setNews(data.articles);
    )
    }

    useEffect(()=>{  
        fetchData();
    },[]);

    if(!loading) return <h1>Loading....</h1>
    if(error) return <h1>{error}</h1>
}