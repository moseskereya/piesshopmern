import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Recipedetail(props) {
    const [recipe, setRecipe] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8082/api/pies/${id}`)
            .then((res) => {
                setRecipe(res.data);
                console.log(res.data);
            })
            .catch((err) => console.log(err.message));
    }, [])

    return (
    <div>
     <div className='container_details' style={{ backgroundImage: `url(${recipe.imgUrl})` }}></div>
            <div className='main_content'>
                 <div className='content'>
                <h3>{recipe.name}</h3>
                <p>{recipe.description}</p>
                    <p>{recipe.longDescription}</p>
                    <br/>
                    <h3>How to cook {recipe.name}</h3>
                    <br />
                     <br/>
                    <h3>Ingredients</h3>
                    <br/>
            </div>
                <div className='content'>
                    <p><br />
                    {recipe.name}</p>
                <p>{recipe.price} USD</p>
           </div>
         </div>
    </div>
  )
}

export default Recipedetail