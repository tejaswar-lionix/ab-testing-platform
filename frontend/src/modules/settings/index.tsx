import React, {useState} from 'react';
export const SettingsView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>SETTINGS - Settings - workspace, members, permissio</h2><p>workspace</p></div>
};
export default SettingsView;
