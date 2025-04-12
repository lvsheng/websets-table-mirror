
import React from 'react';
import EmployeeTable from '@/components/EmployeeTable';

const Index = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">Employee Directory</h1>
      <EmployeeTable />
    </div>
  );
};

export default Index;
