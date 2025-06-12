import React, {useState} from 'react';
export const ApiView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>API - API - REST for experiments, flags, resul</h2><p>POST experiment</p></div>
};
export default ApiView;
