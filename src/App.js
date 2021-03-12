import FlInput from './components/flInput/FlInput';
import FlEditor from './components/flEditor/FlEditor';
import FlAside from './components/flAside/FlAside';
import FlMainSteam from './components/flMainSteam/FlMainSteam';
import './App.css';

function App() {
    return (
        <div className="w-full h-screen bg-gray-50 dark:bg-gray-800">
            <section className="container flex min-h-full bg-gray-50 dark:bg-gray-800">
                <aside className="w-aside h-screen">
                  <FlAside />
                </aside>
                <main className="w-main box-border h-screen px-4">
                  <header className="flex justify-between pt-3">
                    <span className="Redressed text-3xl">memo</span>
                    <FlInput />
                  </header>
                  <FlEditor />
                  <FlMainSteam />
                </main>
            </section>
        </div>
    );
}

export default App;
