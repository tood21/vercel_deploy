import './App.css';
import GoogleTagManager from "./componets/GoogleTagManager";
// import TagManager from 'react-gtm-module';

function App() {
  // const tagManagerArgs = {
  //   gtmId: 'G-FPJGQ79PSH'
  // }
  //
  // TagManager.initialize(tagManagerArgs);
  return (
    <div className="App">
      <GoogleTagManager gtmId="G-FPJGQ79PSH" />
      <h1>안녕하세요. 버셀 배포 테스트입니다.</h1>
      <p>변경1</p>
      <iframe src="https://innerpage-iframe.vercel.app/" frameborder="0"></iframe>
      <a href="https://market.bankbe.im/user/sign-up">하이픈 가입페이지로</a>
    </div>
  );
}

export default App;
