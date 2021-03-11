// import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="w-full h-screen bg-white dark:bg-gray-800">
            <section className="container flex min-h-full bg-white dark:bg-gray-800">
                <aside className="w-aside h-screen"></aside>
                <main className="w-main box-border h-screen px-4">
                  <header className="flex justify-between pt-7">
                    <span className="text-3xl">memo</span>
                    <input type="text" />
                  </header>
                </main>
            </section>
        </div>
    );
}

export default App;
