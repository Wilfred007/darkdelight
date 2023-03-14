import { useState } from 'react';

const IceCreamOrder = () => {
  const [flavor, setFlavor] = useState('');
  const [size, setSize] = useState('');
  const [toppings, setToppings] = useState([]);
  const [price, setPrice] = useState(0);

  const flavors = {
    "Vanilla": 2.50,
    "Chocolate": 3.00,
    "Strawberry": 3.50,
    "Mint Chocolate Chip": 4.00
  };

  const handleFlavorChange = (e) => {
    setFlavor(e.target.value);
  };

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const handleToppingChange = (e) => {
    const topping = e.target.value;
    const toppingsCopy = [...toppings];
    const index = toppingsCopy.indexOf(topping);
    if(index > -1) {
      toppingsCopy.splice(index, 1);
    } else {
      toppingsCopy.push(topping);
    }
    setToppings(toppingsCopy);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let totalPrice = flavors[flavor];
    if(size === "Medium") {
      totalPrice += 1.50;
    } else if(size === "Large") {
      totalPrice += 2.50;
    }
    totalPrice += toppings.length * 0.50;
    setPrice(totalPrice);
  };

  return (
    <div className='flex flex-col items-center'>
      <form onSubmit={handleSubmit} className='w-full max-w-md'>
        <div className='mb-4'>
          <label className='block font-bold mb-2' htmlFor='flavor'>
            Choose a flavor:
          </label>
          <select
            className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='flavor'
            value={flavor}
            onChange={handleFlavorChange}
          >
            <option value=''>Select a flavor</option>
            <option value='Vanilla'>Vanilla</option>
            <option value='Chocolate'>Chocolate</option>
            <option value='Strawberry'>Strawberry</option>
            <option value='Mint Chocolate Chip'>Mint Chocolate Chip</option>
          </select>
        </div>
        <div className='mb-4'>
          <label className='block font-bold mb-2'>Choose a size:</label>
          <div className='flex'>
            <label className='inline-flex items-center mr-4'>
              <input
                className='form-radio'
                type='radio'
                name='size'
                value='Small'
                checked={size === 'Small'}
                onChange={handleSizeChange}
              />
              <span className='ml-2'>Small</span>
            </label>
            <label className='inline-flex items-center mr-4'>
              <input
                className='form-radio'
                type='radio'
                name='size'
                value='Medium'
                checked={size === 'Medium'}
                onChange={handleSizeChange}
              />
              <span className='ml-2'>Medium (+$1.50)</span>
            </label>


            <label className='inline-flex items-center'>
              <input
                className='form-radio'
                type='radio'
                name />
              </label>

              </div>

              </div>
              </form>

              </div>
  )

}

export default IceCreamOrder












