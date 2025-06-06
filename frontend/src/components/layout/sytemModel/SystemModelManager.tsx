import { SystemModelTable } from './SystemModelTable';
import { columns, Payment } from './SystemModelColumns';

const getData = (): Payment[] => {
  return [
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'm@example.com',
    },
    {
      id: '480e1d42',
      amount: 125,
      status: 'processing',
      email: 'example@gmail.com',
    },
    {
      id: '728ed12f',
      amount: 100,
      status: 'pending',
      email: 'm@example.com',
    },
    {
      id: '483e1d42',
      amount: 125,
      status: 'processing',
      email: 'example@gmail.com',
    },
    {
      id: '728ed12f',
      amount: 100,
      status: 'pending',
      email: 'm@example.com',
    },
    {
      id: '446e1d42',
      amount: 125,
      status: 'processing',
      email: 'example@gmail.com',
    },
  ];
};

export const SystemModelManager = () => {
  const data = getData();

  return (
    <div className="container mx-auto py-10">
      <SystemModelTable columns={columns} data={data} />
    </div>
  );
};
