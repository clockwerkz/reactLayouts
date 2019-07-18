import React, { useEffect, useState  } from 'react';
import './App.scss';

function App() {

  const [ width, setWidth ] = useState(window.innerWidth);
  const [ panel, setPanel ] = useState('panel2');
  const handleWindowChange = ()=> setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleWindowChange);
    return function cleanup() {
      window.removeEventListener('resize', handleWindowChange);
    }
  }, []);
  
  
  const renderSelectedPanel = () => {
    switch(panel) {
      case 'panel3':
          return (
            <div className="panel">
            <h3>Panel #3</h3>
          </div>
          )
      case 'panel2':
          return (
            <div className="panel">
            <h3>Panel #2</h3>
          </div>
          )
      case 'panel1':
          return (
            <div className="panel">
            <h3>Panel #1</h3>
          </div>
          )
      default: 
          return (
            <div>
              <p>No Panel Selected</p>
            </div>
          )
    }
  }
  
  const isMobile = width < 501;
  const currentPanel = renderSelectedPanel();
  if (isMobile) {
    return (
      <div className="App">
        <ul className="button__wrapper">
          <li className="button button--blue" onClick={()=>setPanel('panel1')}>Panel #1</li>
          <li className="button button--green" onClick={()=>setPanel('panel2')}>Panel #2</li>
          <li className="button button--yellow" onClick={()=>setPanel('panel3')}>Panel #3</li>  
        </ul>
        <div className="panel__wrapper">
          {currentPanel}
        </div>
      </div>)
    } else {
    return (
    <div className="App">
      <div className="panel__wrapper">
        <div className="panel">
            <h3>Panel #1</h3>
          </div>
          <div className="panel">
            <h3>Panel #2</h3>
          </div>
          <div className="panel">
            <h3>Panel #3</h3>
          </div>
      </div>
    </div>
    )
  }
}

export default App;
