import React from 'react';
import CarComponent, { Car } from './Car';

const App: React.FC = () => {
  const myCar = new Car("Toyota", "Corolla", 2021);

  return (
    <div>
      <h1>My Car Application</h1>
      <CarComponent car={myCar} />
    </div>
  );
}

export default App;
