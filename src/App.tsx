import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Home from './components/Home';
import BookingForm from './components/BookingForm';

const AppContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;

const MainContent = styled.main`
  flex: 1;
  width: 100%;
  background-color: #FAFAFA;
  animation: fadeIn 0.5s ease-in-out;
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const Footer = styled.footer`
  background-color: #333;
  color: white;
  padding: 2rem;
  text-align: center;
  width: 100%;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  p {
    margin: 0;
    transition: transform 0.3s ease;
  }
  
  &:hover p {
    transform: scale(1.02);
  }
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Header />
        <MainContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booking" element={<BookingForm />} />
          </Routes>
        </MainContent>
        <Footer>
          <p>&copy; 2024 Little Lemon Restaurant. All rights reserved.</p>
        </Footer>
      </AppContainer>
    </Router>
  );
}

export default App
