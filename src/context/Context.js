import { createContext, useState,useEffect } from "react";
import {fetchdatafromapi} from '../utils/api';
export const Context = createContext();
export const Appcontext=(props)=>{
        const [loading, setloading] = useState(false);
        const [searchresult , setsearchresult] = useState([]);
        const [selectcategories , setselectcategories] = useState(false);
        const [mobilemenu , setmobilemenu] = useState(false);

         useEffect(()=>{
            fetchselectedcategorydata(selectcategories)
         },[selectcategories])
         const fetchselectedcategorydata =(query)=>{
             setloading(true)
             fetchdatafromapi(`search/?q=${query}`).then(({contents})=>{
                  console.log(contents)
                   setsearchresult(contents)
                  setloading(false)
             })
           
         }
         return(
            <Context.Provider value={{
                loading,
                setloading,
                selectcategories,
                setselectcategories,
                mobilemenu,
                setmobilemenu,
                searchresult,
                setsearchresult
            }}>
                 {props.children}  
            </Context.Provider>
         )



}