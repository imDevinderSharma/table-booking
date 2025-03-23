import styled from 'styled-components';

const HomeContainer = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Hero = styled.section`
  background-color: #495E57;
  color: white;
  padding: 5rem 2rem;
  margin: -2rem -2rem 3rem -2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  
  &::before {
    content: '';
    position: absolute;
    top: -50px;
    left: -50px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: rgba(244, 206, 20, 0.1);
    animation: float 15s infinite ease-in-out;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -80px;
    right: -80px;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: rgba(244, 206, 20, 0.1);
    animation: float 18s infinite ease-in-out reverse;
  }
  
  @keyframes float {
    0% { transform: translate(0, 0) scale(1); }
    50% { transform: translate(30px, 30px) scale(1.5); }
    100% { transform: translate(0, 0) scale(1); }
  }

  h1 {
    color: #F4CE14;
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
    animation: fadeInDown 0.8s ease-out;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 4px;
      background-color: #F4CE14;
      border-radius: 2px;
    }
    
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  p {
    font-size: 1.3rem;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
    animation: fadeInUp 0.8s ease-out 0.3s both;
    
    @media (max-width: 768px) {
      font-size: 1.1rem;
      padding: 0 1rem;
    }
  }
  
  @keyframes fadeInDown {
    from { opacity: 0; transform: translateY(-30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
`

const MenuSection = styled.section`
  h2 {
    color: #333;
    text-align: center;
    margin-bottom: 2rem;
  }
`;

const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const MenuItem = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  animation: fadeIn 0.6s ease-out;
  animation-fill-mode: both;
  position: relative;
  top: 0;
  
  &:nth-child(1) { animation-delay: 0.1s; }
  &:nth-child(2) { animation-delay: 0.2s; }
  &:nth-child(3) { animation-delay: 0.3s; }
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.1);
  }

  img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  &:hover img {
    transform: scale(1.05);
  }

  .content {
    padding: 1.8rem;
    border-top: 4px solid #F4CE14;

    h3 {
      color: #333;
      margin: 0 0 0.8rem 0;
      font-size: 1.4rem;
      transition: color 0.3s ease;
    }
    
    &:hover h3 {
      color: #495E57;
    }

    p {
      color: #666;
      margin: 0 0 0.8rem 0;
      line-height: 1.6;
    }

    .price {
      color: #495E57;
      font-weight: bold;
      margin-top: 1.2rem;
      font-size: 1.2rem;
      display: inline-block;
      padding: 0.4rem 0.8rem;
      background-color: rgba(244, 206, 20, 0.15);
      border-radius: 4px;
      transition: all 0.3s ease;
    }
    
    &:hover .price {
      background-color: rgba(244, 206, 20, 0.3);
      transform: scale(1.05);
    }
  }
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @media (max-width: 768px) {
    .content {
      padding: 1.5rem;
      
      h3 {
        font-size: 1.2rem;
      }
    }
  }
`

const menuItems = [
  {
    id: 1,
    name: 'Greek Salad',
    description: 'Fresh vegetables, olives, and feta cheese with our house dressing',
    price: 12.99,
    image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23ddd"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif">Salad</text></svg>'
  },
  {
    id: 2,
    name: 'Bruschetta',
    description: 'Grilled bread with tomatoes, garlic, and fresh basil',
    price: 9.99,
    image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23ddd"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif">Bruschetta</text></svg>'
  },
  {
    id: 3,
    name: 'Grilled Fish',
    description: 'Catch of the day served with seasonal vegetables',
    price: 24.99,
    image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23ddd"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif">Fish</text></svg>'
  },
];

const Home = () => {
  return (
    <HomeContainer>
      <Hero>
        <h1>Welcome to Little Lemon</h1>
        <p>Experience the finest Mediterranean cuisine in a warm and inviting atmosphere</p>
      </Hero>

      <MenuSection>
        <h2>Our Specials</h2>
        <MenuGrid>
          {menuItems.map(item => (
            <MenuItem key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="content">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p className="price">${item.price.toFixed(2)}</p>
              </div>
            </MenuItem>
          ))}
        </MenuGrid>
      </MenuSection>
    </HomeContainer>
  );
};

export default Home;