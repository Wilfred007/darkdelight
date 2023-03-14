import { useState } from 'react';
import Link from 'next/link'

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
    <>
        <div className='flex items-center justify-center h-screen shadow-xl'>
    <form onSubmit={handleSubmit}className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
    <div className='mb-4'>
      <label>
        <p className='font-2xl text-black font-bold '>Choose a flavor:</p>
        <select value={flavor} onChange={handleFlavorChange} className='bg-green-600 rounded-sm mt-4 p-3'>
          <option value="">Select a flavor</option>
          <option value="Vanilla">Vanilla</option>
          <option value="Chocolate">Chocolate</option>
          <option value="Strawberry">Strawberry</option>
          <option value="Mint Chocolate Chip">Mint Chocolate Chip</option>
        </select>
      </label>
      </div>
      <br />
      <div>
      <label>
        Choose a size:
        <br />
        <label>
          <input type="radio" 
          name="size" 
          value="Small" 
          checked={size === 'Small'} 
          onChange={handleSizeChange}
          className='form-radio h-5 w-5 text-gray-600 px-3'
          />
        <span className='ml-2 text-gray-700'>Small</span>
        </label>
        <br />
        <label className='inline-flex items-center'>
          <input type="radio" name="size" value="Medium" checked={size === 'Medium'} onChange={handleSizeChange} className='form-radio h-5 w-5 text-gray-600 px-3'/>
          Medium (+N 1,000 )
        </label>
        <br />
        <label>
          <input type="radio" name="size" value="Large" checked={size === 'Large'} onChange={handleSizeChange}  className='form-radio h-5 w-5 text-gray-600' />
          Large (+N 1,500 )
        </label>
      </label>
      </div>
      <br />
      <label>
        Choose your toppings:
        <br />
        <label>
          <input type="checkbox" name="toppings" value="Sprinkles" checked={toppings.includes('Sprinkles')} onChange={handleToppingChange} />
          Sprinkles (+N800)
        </label>
        <br />
        <label>
          <input type="checkbox" name="toppings" value="Hot Fudge" checked={toppings.includes('Hot Fudge')} onChange={handleToppingChange} />
          Hot Fudge (+N500)
        </label>
        <br />
        
        </label>
        <div className='items-center justify-center mt-5 bg-blue-600 p-3 text-white text-center rounded-lg'>
        <Link href='#'>Order Now</Link>
        </div>

        </form>

        </div>
        

    

        </>

  )
}


export default IceCreamOrder
    
