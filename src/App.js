import './App.css';
import ChatbotWindow from './Components/Pages/ChatbotWindow/ChatbotWindow';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

function App() {
  return (
      <ErrorBoundary>
    <div className="App">
      <div className='App-header' >
      <h1>Mirror ChatBot</h1>
      </div>

      <ChatbotWindow />
      <div className='para'>
      What Does this Mirror Chatbot Do ?  
      <div className='ans'>
        This chatbot works in such a way that when a user sends a message in the chat view,
         the same message will be echoed back which will be shown as the response message from 
         the mirror chatbot in the chat window.
         
      </div>
      </div>      
    </div>
      </ErrorBoundary>
  );
}

export default App;
