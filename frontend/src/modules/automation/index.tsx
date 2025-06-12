import React, {useState} from 'react';
export const AutomationView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>AUTOMATION - Automation - auto-halt bad experiments, </h2><p>auto-halt</p></div>
};
export default AutomationView;
