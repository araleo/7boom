import React from 'react';
import Button from './components/Button/Button';
import Label from './components/Label/Label';
import List from './components/List/List';
import use7Boom from './hooks/use7Boom';
import styles from './App.module.css';

function App() {
  const { current, sequence, add1 } = use7Boom(1);

  const handleClick = () => {
    add1();
  };

  return (
    <div>
      <div className={styles.upper}>
        <Button onClick={handleClick} />
        <Label current={current} />
      </div>
      <List sequence={sequence} />
    </div>
  );
}

export default App;
