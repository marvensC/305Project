import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src="studysync-favicon-color.png" alt="Screenshot 6" width = "300"  height = "300" classname ="App-logo-spin" />

        <h1>StudySync</h1>
        <p>A mobile app for seamless studying</p>
      </header>
      <main>
      {/* 
        <section className="Description">
          <h2>About StudySync</h2>
          <p>
        StudySync is a powerful mobile app designed to enhance your studying experience. It provides a wide range of features and tools to help you stay organized, manage your time effectively, and achieve academic success.
          </p>
        </section> 
      */}

        <section className="whatIs"> 
        <h2>What is StudySync?</h2>
        <p>StudySync is a powerful mobile app designed to enhance your studying experience.<div/> It provides a wide range of features and tools to help you <div/>stay organized, manage your time effectively, and achieve academic success.</p>
        </section>

        <section className="Screenshots">
          <h2>How to Use StudySync <div/></h2>
          
          <div/>
          <table>
            <tr>
              <td><img src="studysync-favicon-color.png" alt="Screenshot 1" /></td>
              <td><img src="screenshot2.png" alt="Screenshot 2" /></td>
              <td><img src="screenshot3.png" alt="Screenshot 3" /></td>
            </tr>
            <tr>
              <td><img src="screenshot4.png" alt="Screenshot 4" /></td>
              <td><img src="screenshot5.png" alt="Screenshot 5" /></td>
              <td><img src="screenshot6.png" alt="Screenshot 6" /></td>
            </tr>
          </table>
          {/* Placeholder for app screenshots */}
        </section>
      </main>
      <footer>
        <p>© 2024 StudySync. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
