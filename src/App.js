import{ useState } from 'react'
import './App.css';


import Navbar from './components/Navbar'
import Post from './components/Post';
import Status from './components/Status';
import StatusEditor from './components/StatusEditor';

function App() {

  const [currentStatus, setCurrentStatus] = useState ("Feeling like it's time to code")

  return (
    <div className="App">

      <Navbar />
      <Status status={currentStatus}/>
      <StatusEditor setCurrentStatus={setCurrentStatus} />
      <header className="App-header">
       <Post 
          date="5/12"
          title="hello world"
          content="this is the content"
       />
       <Post 
          date="5/14"
          title="hello universe"
          content="this is the content"
       /> 
       <Post 
          date="5/16"
          title="hello system"
          content="this is the content"
       />
      </header>
    </div>
  );
}

export default App;
