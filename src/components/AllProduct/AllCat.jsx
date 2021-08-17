import React ,{useState} from 'react';
import Sdata from './ProductsData';
import CatList from './CatList';
import Catogary from './Catogary'; 
const allCatVal=[...new Set(Sdata.map((elemnt)=>{
    return elemnt.category;
})),"All"]
console.log(allCatVal);  

const AllCat = () => {
    const [item, setitem] = useState(Sdata);
const [catItem,setCat] =useState(allCatVal);
   const filterItem=(cate)=>{
       if(cate==="All"){
           setitem(Sdata);
           return;
       }
    const data=Sdata.filter((eles)=>{
      return eles.category===cate;
    })
    setitem(data);
   }
    return (
      <>
            <p className="mt-4 text-center"> We offer a variety of plastics products</p>
        
        <CatList filter={filterItem} catItem={catItem}/>
              <Catogary items={item} /> 
        </>
    )
}

export default AllCat;
