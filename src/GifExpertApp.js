import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GrifGrid } from './components/GrifGrid';

export const GifExpertApp = () => {

    const [category, setCategory] = useState([])



    // const handleAdd = () => {
    //     setCategory( [...category, 'New Categoryx']);
    // }
    return (
        <>
            <h2> GIF EXPERT APP </h2>
            <AddCategory setCategory={setCategory} />
            <hr></hr>

            {/* <button onClick={handleAdd}> Add new category </button> */}

                {
                    category.map((category) => 
                        <GrifGrid
                            key={category}
                            category={category}
                        />
                    )
                }
        </>
    )
}
