import './App.css';
import data from './data/data';
import type { IMessage } from './component/types';
import MessageHistory from './component/MessageHistory/MessageHistory';

function App() {
  if(data.length === 0) return null;
  
  const messages: IMessage[] = data;

  return(
    <div className="clearfix container">
    <div className="chat">
      <div className="chat-history">
        <MessageHistory list={messages} />
      </div>
    </div>  
  </div>
  )
}

export default App
