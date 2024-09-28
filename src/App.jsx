import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import CardComponent from './components/yearCard/Year';
import FlipCardSection from './components/Cards/Cards';
import BranchDetails from './components/yearCard/Year'; // Branch details will show the drive links
import CSEComponent from './components/CSE/CSE';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/branches" element={<FlipCardSection />} />
        {/* Dynamic route for year selection based on branch */}
        <Route path="/:branchName/year" element={<CardComponent />} />
        {/* Dynamic route to show notes based on branch and year */}
        <Route path="/:branchName/year/:year" element={<BranchDetails />} />
        <Route path="/cse/year/1" element={<CSEComponent/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
