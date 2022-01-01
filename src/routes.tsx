import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';
import Home from './pages/Home';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' element={<Home/>}></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;