import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Form'
import { v4 as uuidv4 } from 'uuid';
import {React} from 'react' ;

function App() {
  const [formState, setFormState] = useState({})
  const [todo, setTodo] = useState([])
  const [search , setSearch] = useState([])
  const [searchStatus , setSearchStatus] = useState({
    text: '',
    status: false
  })
  const handleOnchange = (e, name)=> {
    setFormState(prev=> ({
      ...prev,
      [name]: e.target.value,
    }));
  }
  const handleSubmit = ()=> {
    if(!formState.title && !formState.decoration){
      alert('vui lòng điền thông tin');
      return;
    }
    if(!formState.title){
      alert('vui lòng điền tên');
      return;
    } 
    if(!formState.decoration){
      alert('vui lòng điền ngày');
      return;
    }
    const todoCoppy = [...todo]
    todoCoppy.push({
      ...formState,
      id: uuidv4(),
      status: '...'
    });
    setTodo(todoCoppy);
    setFormState({})
    }
    const handleKeyPress = (event , action) =>{
      if(event.keyCode === 13){
        if(action === 'ADD'){
          handleSubmit()
        }
        if(action === 'SEARCH'){
          if(searchStatus.text){
            setSearchStatus((prev) =>({
              ...prev,
              status:true
            }));
            const dataFilter = todo.filter((item) => item.title.includes(searchStatus.text) || item.decoration.includes(searchStatus.decoration));
            setSearch(dataFilter);
          }else{
            setSearchStatus((prev) =>({
              ...prev,
              status:false,
            }));
          }
          console.log(search);
        }
      }
    };

    const handleSearch = (event) =>{
      setSearchStatus((prev) => ({
        ...prev,
        text: event.target.value,
      }));
    }
  const handleDoingOrNotDoing = (id, status) =>{
    const todoCoppy= [...todo];
    const findIndex = todoCoppy.findIndex((item) => item.id === id);
    todoCoppy[findIndex].status = status ;
    setTodo(todoCoppy);
  }
  
  const handleDelete = (id, todo) => {
    const todoCoppy = [...todo]
    const findIndex = todoCoppy.filter(item => item.id !== id);
    setTodo(findIndex);
  }

  const setColor = (status) =>{
    if(status === 'DOING'){
      return {
        color: 'blue'
      }
    }
    if(status === 'NOTDOING'){
      return{
        color: 'red'
      }
    }
  }

  return(
  <>
    <input type="text" 
    value={formState.title || ''} 
    onChange={(e) => handleOnchange(e, 'title')} 
    placeholder='Tên' 
    onKeyDown={(e) => handleKeyPress(e , 'ADD')} 
    />
    <input type="text" 
    value={formState.decoration || ''} 
    onChange={(e) => handleOnchange(e, 'decoration')}  
    placeholder='Ngày' 
    onKeyDown={(e) => handleKeyPress(e, 'ADD')} 
    />
    <button onClick={handleSubmit}  >Tạo</button>
    <input type="search" placeholder='Tìm Kiếm'style={{display:'block', margin:'10px auto' }} value={searchStatus.text}
      onChange={(e) => handleSearch(e)}
      onKeyDown={(e) => handleKeyPress(e,'SEARCH')}
    />
  <div className='table'>
    <table style={{margin:'0 auto'}}>
      <thead>
      <tr>
        <th>STT</th>
        <th>Tên</th>
        <th>Ngày</th>
        <th>Trạng Thái</th>
        <th>Chọn trạng thái</th>
      </tr>    
      </thead>
      <tbody>
      {todo.map((item, index)=>(
        <tr key={uuidv4()}>
            <td>{index+1}</td>
            <td>{item.title}</td>
            <td>{item.decoration}</td>
            <td style={setColor(item.status)}>{item.status}</td>
            <td>
              <button style={{color: 'blue'}} onClick={() =>handleDoingOrNotDoing(item.id, 'DOING' )}>DOING</button>
              <button style={{color: 'red'}}  onClick={() =>handleDoingOrNotDoing(item.id, 'NOTDOING')}>NODOING</button>
              <button style={{color: 'yellow'}} onClick={() =>handleDelete(item.id, todo)}>DELETE</button>
            </td>
          </tr>     
        ))}
      </tbody>
    </table>
  </div>
  </>
  )
}

export default App
