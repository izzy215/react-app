import React, {useState} from 'react';
import Counter from './components/Counter';
import InputBox from './components/InputBox';

//JSX에서는 반드시 하나의 루트 요소만 리턴
//<>...</> 혹은 <div>...</div> 같은 Wrapper 요소 필요
function App() {

  // const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  return(
    <>
    <h1>안녕하세요, {name}님!</h1>
    <InputBox
     value={name}
     onChange={handleChange}/>
    </>
  )

}

export default App;
