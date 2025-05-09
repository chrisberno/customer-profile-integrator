import React from 'react';

const CRMProfileContainer = ({ task }) => {
  console.log('CRMProfileContainer rendering, task:', task);
  const mockData = { id: 2, name: 'John Doe', email: 'john@example.com' };
  return (
    <div>
      <h2>Customer Profile</h2>
      <p>ID: {mockData.id}</p>
      <p>Name: {mockData.name}</p>
      <p>Email: {mockData.email}</p>
      <p>Task SID: {task?.sid || 'No task'}</p>
    </div>
  );
};

export default CRMProfileContainer;