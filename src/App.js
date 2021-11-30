// https://lmpixels.com/demo/leven-html-new/light/index.html
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from './pages/Shared/Navigation/Navigation';
import Home from './pages/Home/Home/Home';
import Blog from './pages/Home/Blog/Blog';
import WorkDetails from './pages/Home/WorkDetails/WorkDetails';
import Footer from './pages/Shared/Footer/Footer';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Navigation></Navigation>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/workDetails/:workId" element={<WorkDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
