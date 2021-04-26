import React from 'react'

export const GifGridItem = ({img}) => {

    console.log(img);

    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={img.data_url} title={img.title} alt={img.title}/>
        </div>
    )
}

export default GifGridItem;
