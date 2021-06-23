import logo from './logo.svg';
import './App.css';
import generatedGitInfo from './generatedGitInfo.json';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="git-info">
          <p>
            <strong>Git Branch:</strong> {generatedGitInfo.gitBranch}
          </p>
          <p>
            <strong>Git Commit Hash:</strong> {generatedGitInfo.gitCommitHash}
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
