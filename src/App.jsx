import Calculator from "./components/Calculator";
import ToastProvider from "./contexts/ToastProvider";

function App() {
  return (
    <ToastProvider>
      <main>
        <Calculator />
      </main>
    </ToastProvider>
  );
}

export default App;
