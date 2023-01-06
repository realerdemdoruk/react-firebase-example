import './App.css';
import Signup from './components/Signup';
import { Container } from 'react-bootstrap';
import { AuthProvider } from './contexts/AuthContext';
// import { initializeApp } from 'firebase/app';
function App() {
  return (
    <AuthProvider>
      <Container
        style={{ minHeight: '100vh' }}
        className="d-flex align-items-center justify-content-center "
      >
        <div className="w-100" style={{ minHeight: '400px' }}>
          <Signup />
        </div>
      </Container>
    </AuthProvider>
  );
}

export default App;
