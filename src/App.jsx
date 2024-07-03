import React from 'react';
import MyButton from './MyButton';
import MyImage from './image';

function App() {
  const onClickHundler = () => {
    alert('Click!');
  };

  const name = "Acept";
  const title = "My Button";
  const parrafo = "Tarea de clases";
  const imageUrl = "https://i.pinimg.com/564x/7f/fd/2f/7ffd2fd91dab1a292cd3aada059beaac.jpg";

  return (

    <div>
      <MyButton
        name={name}
        title={title}
        parrafo={parrafo}
        onClick={onClickHundler}
      />

      <MyImage img={imageUrl} />

    </div>
  );
}

export default App;
