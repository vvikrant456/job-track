import { useEffect } from 'react';

const Dashboard = () => {
  const fetchData = async () => {
    try {
      const response = await fetch('/data.json'); //fetching from own server creates no problem
      // const response = await fetch('https://localhost:5000/'); //but fetching from other server creating problem
      const data = await response.json();

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return <h1>Dashboard </h1>;
};
export default Dashboard;
