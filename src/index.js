import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Использование функций:

let List = ["Строка 1", "123","LOL","Ex21","2020","!@#$","4444","...","Привет!","------",];

root.render(
  <>
    <ListFunc list={List}/>
  </>
);


// <ListFunc list={List}/>

function ListFunc(props) {
  let newList = props.list;

  const [textMove, FuncTextMove] = React.useState("Пусто");
  const [textMove2, FuncTextMove2] = React.useState("");
  const [myString, setMyString] = React.useState("");
  const [searchIsTrue, setSearchIsTrue] = React.useState(false);

  const handleInputChange = (event) => {
    let searchText = "";
    const str = event.target.value;
    FuncTextMove2("");
  
    if (!(str === "")) {
      searchText = newList.find((n_str) => n_str.startsWith(str));
      if (searchText !== undefined) {
        setSearchIsTrue(true); // ????????
        FuncTextMove(searchText);
        setMyString(searchText);
      } else {
        setSearchIsTrue(false);
        FuncTextMove("Поиск не дал результатов");
        setMyString(str);
      }
    } else {
      setMyString("");
    }
  };

  function updateText(){
    if(myString == "") {
      FuncTextMove("Кнопка нажата, строка пуста.");
    } else {
      FuncTextMove("Кнопка нажата, значение в строке = " + myString);
      console.log("searchIsTrue = " + searchIsTrue);
      if(searchIsTrue == true) {
        FuncTextMove2("Такая строка уже есть в нашем массиве");
      } else {
        FuncTextMove2("Добавляем строку в массив");
        newList.push(myString);
        console.log(newList);
        setSearchIsTrue(true);
      }
    }
  }

  return(
  <div class = "center">
    <h2>Введите свою строку:</h2>
    <input type="text" value={myString} onChange={handleInputChange} />
    <button onClick={updateText}>Отправить!</button>
    <p>{textMove}</p>
    <p>{textMove2}</p>
  </div>
  );
}

