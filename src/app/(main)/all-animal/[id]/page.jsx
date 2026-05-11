import { allAnimalId } from '@/lib/data';
import React from 'react';

const page = async({params}) => {
    const {id}= await params;
    const newid=await allAnimalId(id)
    console.log(newid);
    
    return (
        <div>
            <h2>
               {id}
                </h2>
        </div>
    );
};

export default page;