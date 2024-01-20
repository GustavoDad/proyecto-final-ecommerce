import CartProvider from './context/CartProvider';
import AppRouter from './routes/AppRouter'; 
import './shared/sass/app.scss';
import AuthProvider from './context/AuthContext';
function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <AppRouter />
      </CartProvider>
    </AuthProvider>
  )
}

export default App
