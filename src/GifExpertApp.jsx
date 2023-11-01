import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);
    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory) )return;

        // categories.push('Valorant');  evitar esto
        setCategories([newCategory,...categories]);

        console.log(categories);
    };

  return (
      <>
      {/* titulo */}
      <h1>GifExpertApp</h1>

      {/* input */}
      <AddCategory 
        onNewCategory={value=>onAddCategory(value)}
        currentCategories={categories}
      />

      {/* listado de gifs */}
      {/* <button onClick={onAddCategory}>Agregar</button> */}
        {
            categories.map((category) => (
            <GifGrid 
            key={category}
            category={category} 
            />
            ))
        }
            {/* gif Item */}
    </>
    
  )
}