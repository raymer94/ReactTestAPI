import { useEffect, useState } from "react"
import ListPosts from "./ListPosts";

export default function GetListPosts(){

    const [listPosts, setListPosts] = useState([]);
 
    useEffect(()=>{
        loadData();
    },[])

    const loadData = async ()=>{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        setListPosts(data);
    }

    return(
        <>
            <ListPosts model={listPosts}/>
        </>
    )
}

