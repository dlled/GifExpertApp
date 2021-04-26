import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import getGifs from '../helpers/getGifs';
import GifGridItem from './GifGridItem';

export const GrifGrid = ({ category }) => {

    // const [images, setImages] = useState([]);

    const {data, loading} = useFetchGifs(category);

    // useEffect(() => {
    //     getGifs(category).then(setImages);
    // }, [category])



    return (<>
            <h3> {category} </h3>

            { loading ? 'Cargando': 'Carga completada'}
        <div className="card-grid  animate__animated animate__fadeIn ">
            {
                data.map((img) => (
                    <GifGridItem
                        key={img.id}
                        img={img} />
                ))
            }
        </div>
        </>
    )
}
