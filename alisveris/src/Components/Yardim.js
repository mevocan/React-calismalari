import React from 'react';
import Card from './Card';

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Card title="Kutu 1" content="İçerik 1" />
        </div>
        <div className="col-12">
          <Card title="Kutu 2" content="İçerik 2" />
        </div>
      </div>
    </div>
  );
};

export default App;
