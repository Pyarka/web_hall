import React from 'react';
import { Body } from './AppStyles';
import './AppStyles.tsx';
import CentralPanel from './components/CentralPanel/CentralPanel';
import LeftPanel from './components/LeftPanel/LeftPanel';

function App() {
  return (
    <Body>
      <LeftPanel />
      <CentralPanel />
    </Body>
  );
}

export default App;
