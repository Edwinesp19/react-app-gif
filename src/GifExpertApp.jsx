import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch','Dragon Ball']);
    const onAddCategory = (newCategory) => {
        //valorant
        // categories.push('Valorant');
        setCategories([...categories,newCategory]);

        console.log(categories);
    };

  return (
      <>
      {/* titulo */}
      <h1>GifExpertApp</h1>

      {/* input */}
      <AddCategory 
        onNewCategory={value=>onAddCategory(value)}
    //   setCategories={setCategories}
      />

      {/* listado de gifs */}
      {/* <button onClick={onAddCategory}>Agregar</button> */}
      <ol>
        {categories.map(category=>{
            return  <li key={category}>{category}</li>
        })}
      </ol>
            {/* gif Item */}
    </>
  )
}