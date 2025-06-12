import React, {useState} from 'react';
export const MetricsView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>METRICS - Metrics - guardrails, primary, secondary</h2><p>guardrails</p></div>
};
export default MetricsView;
