import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Routes/Routes';

function App() {
  return (
    <div className='max-w-[1440px] mx-auto h-screen'>
      <RouterProvider router={router}> </RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
