import React from 'react';
import Item1 from './components/elements_product/Item1';
import Item2 from './components/elements_product/Item2';
import Item3 from './components/elements_product/Item3';
import Item4 from './components/elements_product/Item4';
import Item5 from './components/elements_product/Item5';
import Item6 from './components/elements_product/Item6';
import Item7 from './components/elements_product/Item7';
import Item8 from './components/elements_product/Item8';
import Item9 from './components/elements_product/Item9';
import Item10 from './components/elements_product/Item10';
import Item11 from './components/elements_product/Item11';
import Item12 from './components/elements_product/Item12';


export const Product_list = () => {
  const data = [
    { id: 1, name: <Item1 /> },
    { id: 2, name: <Item2 /> },
    { id: 3, name: <Item3 /> },
    { id: 4, name: <Item4 /> },
    { id: 5, name: <Item5 /> },
    { id: 6, name: <Item6 /> },
    { id: 7, name: <Item7 /> },
    { id: 8, name: <Item8 /> },
    { id: 9, name: <Item9 /> },
    { id: 10, name: <Item10 /> },
    { id: 11, name: <Item11 /> },
    { id: 12, name: <Item12/> },
  ];
  
  return (
    <div>
      {data.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  
)};

export default Product_list;