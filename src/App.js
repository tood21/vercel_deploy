import './App.css';
import GoogleTagManager from "./componets/GoogleTagManager";
import {Link, Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import Sub from "./pages/Sub";
import ReactGA from 'react-ga4';
import React, { useRef } from 'react';


function App() {
  const iframeRef = useRef();
  const sendJSessionId = () => {
    const jsessionId = 'testtest11';
    const iframeWindow = iframeRef.current.contentWindow;

    // 메시지 보내기
    iframeWindow.postMessage(jsessionId, 'https://innerpage-iframe.vercel.app');
  };
  return (
    <div className="App">
      <GoogleTagManager gtmId="GTM-T22M3WCP" />
      <h1>안녕하세요. 버셀 배포 테스트입니다.</h1>
      <p>변경1</p>
      <iframe ref={iframeRef} src="https://innerpage-iframe.vercel.app/" frameborder="0"></iframe>
      <button onClick={sendJSessionId}>Send JSessionID</button>
      <a href="https://market.bankbe.im/user/sign-up">하이픈 가입페이지로</a>
      <nav style={{display:'flex', justifyContent: 'center', border: '1px solid black', padding: '10px', marginTop: '50px'}}>
        <div style={{width: '50%', display: 'flex', justifyContent: 'space-between'}}>
          <Link to={'/main'}>메인</Link>
          <Link to={'/sub'}>서브</Link>
        </div>
      </nav>
      <Routes>
        <Route path='/main' element={<Main />} />
        <Route path='/sub' element={<Sub />} />
      </Routes>
    </div>
  );
}

export default App;
