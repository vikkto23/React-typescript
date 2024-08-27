import React from 'react';
import { Vehicle } from './Vehicle';

export class Car implements Vehicle {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start(): void {
    console.log("Car engine started");
  }
}

interface CarProps {
  car: Car;
}

const CarComponent: React.FC<CarProps> = ({ car }) => {
  return (
    <div>
      <h1>{car.make} {car.model} ({car.year})</h1>
      <button onClick={() => car.start()}>Start Car</button>
    </div>
  );
}

export default CarComponent;
