import Product from './ProductCard';
import React, { useEffect, useState } from 'react';
import Box from "@mui/material/Box";
import axios from "axios"
import Spinner from "./Spinner"

function Recipes() {
    const [recipes, setRecipe] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8082/api/pies')
            .then((res) => {
                setRecipe(res.data);
                console.log(res.data)
            })
        .catch((err) => {
        console.log('Error from ShowBookList');
      });
    }, [])

    const recipelist = recipes.length === 0 ? <div className='spinner'><Spinner/></div>: recipes.map((recipe, r) => <Product recipe={recipe} key={r}/>)
    return (
        <Box sx={{display: 'flex', flexWrap: 'wrap', p: 1,
          m: 1}}>
            {recipelist}
         </Box>
  )
}

export default Recipes