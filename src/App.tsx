import { PomodoroTimer } from './components/pomodoro-timer';

function App(): JSX.Element {
  return (
    <>
      <div className="container">
        <PomodoroTimer
          pomodoroTimer={1500}
          shortRestTime={300}
          longRestTime={900}
          cycles={4}
        />
        <p>Deus é fiel</p>
      </div>
    </>
  );
}

export default App;
