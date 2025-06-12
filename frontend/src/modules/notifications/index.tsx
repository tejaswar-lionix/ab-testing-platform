import React, {useState} from 'react';
export const NotificationsView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>NOTIFICATIONS - Notifications - alert, halt, winner</h2><p>alert</p></div>
};
export default NotificationsView;
