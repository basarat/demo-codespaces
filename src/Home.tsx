import React, { useState } from 'react';

const Home: React.FC<{}> = () => {
  const [data, setData] = useState(null);
  
  const onLoadData = async () => {
    const resp = await fetch('/api');
    const data = await resp.json();
    setData(data);
  };

  return (<>
    <button onClick={onLoadData}>Load Data</button>
    {data && <pre>{JSON.stringify(data, null, 4)}</pre>}
  </>);
}

export default Home;
