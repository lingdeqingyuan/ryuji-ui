import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button';

function App() {
  return (
    <div>
      <Button autoFocus>default</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>React hooks</Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Large}>React hooks</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Small} disabled>React hooks</Button>
      <Button btnType={ButtonType.Link} href='www.baidu.com'>React hooks</Button>
    </div>
  );
}

export default App;
