import React, {useState} from 'react';
import {IProduct} from '../models';

interface ProductProps{
    product: IProduct;
}
export function Product({product}: ProductProps ){
    const [detailsVisibility, setDetailsVisibility] = useState(false);

    const btnBgClassName = detailsVisibility ? 'bg-blue-400' : 'bg-yellow-400';

    const btnClasses = ['py-2 px-4 border', btnBgClassName];

    return (
        <div
            className="border py-2 px-4 rounded flex flex-col items-center mb-2">
                <img src={product.image} className="w-1/6" alt={product.title} />
                <p>{product.title}</p>
                <span className="font-bold">{product.price}</span>
                <button 
                    className={btnClasses.join(' ')}
                    onClick= {() => setDetailsVisibility(prev => !prev)} >
                    { detailsVisibility? 'Hide Details' : 'Show Details' }
                </button>
                
                {detailsVisibility && <div>
                    <p>{product.description}</p>
                    <p>Rate: <span style={{fontWeight: 'bold'}}>{product.rating.rate}</span></p>
                </div>}
        </div>
    )
}