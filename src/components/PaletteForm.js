import React, { useState } from 'react';

function PaletteForm(props) {
    
  const states = ['Todo', 'Doing', 'Tested', 'Done'];

    const [paletteType, setPaletteType] = useState('');
    const [productName, setProductName] = useState('');
    const [productRef, setProductRef] = useState('');
    const [productsNb, setProductsNb] = useState(0);

  /*   const [date, setDate] = useState('');
    const [time, setTime] = useState(''); */
    
    const [id, setId] = useState(1);
    const generatedId = () => {
        setId(id + 1);
        return id; 
    };

    const handleSubmit = e => {
        e.preventDefault();

       /* setDate(new Date().getDate() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getFullYear());
        setTime(new Date().getHours() + ':' +( new Date().getMinutes()) + ':' +  new Date().getSeconds()); */
        
        props.onSubmit({

            id: generatedId(),
            type: paletteType,
            name: productName,
            reference: productRef,
            number: productsNb,
            date: new Date().getDate() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getFullYear(),
            time: new Date().getHours() + ':' +( new Date().getMinutes()) + ':' + new Date().getSeconds(),
            status: states[0],
            phase: 0,
            isComplete: false,
            remainsOnTable: 'No'

        });


        setPaletteType('');
        setProductName('');
        setProductRef('');
        setProductsNb(0);

    }
  return (
    <form onSubmit={handleSubmit}>
       <input type='text' placeholder='Type of the palette' value={paletteType} onChange={e => setPaletteType(e.target.value)} className='form-input'/>
       <input type='text' placeholder='Name of the product' value={productName} onChange={e => setProductName(e.target.value)} className='form-input'/>
       <input type='text' placeholder='Reference of the product' value={productRef} onChange={e => setProductRef(e.target.value)} className='form-input'/>
       <input type='text' placeholder='Quantity per Palette' value={productsNb} onChange={e => setProductsNb(e.target.value)} className='form-input'/>
       <button className='form-button'>Create a Kanban Card</button>

    </form>
  )
}

export default PaletteForm;