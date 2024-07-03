import MyButton from "./MyButton";

function App() {

  const onClickHundler = () => {
    alert('Click!'); 
  }

  const name = "Acept"
  const title = "My Button"
  const parrafo = "Tarea de clases"

  return (
    <MyButton
    name={name}
    title={title}
    parrafo={parrafo}
    onClick={onClickHundler}
    />
  );
}
export default App;
