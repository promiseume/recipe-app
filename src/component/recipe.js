import React from 'react'
import {  useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Recipe() {
    const [fullRecipe, setFullRecipe] = useState([])

    let { id } = useParams();
    useEffect(() => {
        fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`)
        .then(res => {
           return res.json()
        })
        .then(data => (
           setFullRecipe(data.recipe)
        ))
    },[id])
    return (
        <div>
           <h2>{fullRecipe.title}</h2>
           <img src={fullRecipe.image_url}></img>
        </div>
    )
}