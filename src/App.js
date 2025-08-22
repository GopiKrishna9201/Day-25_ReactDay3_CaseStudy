import './App.css';

import ProductListing from './components/ProductListing';
import ProductDetails from './components/ProductDetails';
import UserDashboard from './components/UserDashboard';  
import PostsWithComments from './components/PostsWithComments';
import TodoTracker from './components/TodoTracker';

function App() {
  return (
    <div className="App">
      <ProductListing />
      <ProductDetails productId={1} />
      <UserDashboard />
      <PostsWithComments />
      <TodoTracker />
    </div>
  );
}

export default App;
