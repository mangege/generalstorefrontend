import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <nav className="navbar navbar-light bg-light">
          <div className="container d-flex justify-content-between">
            <a className="navbar-brand" href="#">解忧南杂店</a>
            <button type="button" className="btn btn-outline-secondary">登录</button>
          </div>
        </nav>
      </header>
      <main className="container">
        <ul className="nav d-flex justify-content-between">
          <li className="nav-item">
            <a className="nav-link pl-0 text-muted" href="#">全部</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-muted" href="#">预售</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-muted" href="#">切换</a>
          </li>
          <li className="nav-item">
            <a className="nav-link pr-0 text-muted" href="#">筛选</a>
          </li>
        </ul>
        <ul className="list-unstyled">
          <li className="border-bottom">鼎盟甲醛检测仪家用专业室内空气甲醇测试仪器除苯试纸测量自测盒</li>
          <li className="border-bottom">鼎盟甲醛检测仪家用专业室内空气甲醇测试仪器除苯试纸测量自测盒</li>
          <li className="border-bottom">鼎盟甲醛检测仪家用专业室内空气甲醇测试仪器除苯试纸测量自测盒</li>
          <li className="border-bottom">鼎盟甲醛检测仪家用专业室内空气甲醇测试仪器除苯试纸测量自测盒</li>
        </ul>
      </main>
    </div >
  );
}

export default App;
