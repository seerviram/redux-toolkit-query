// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import UserView from './features/users/Usersview'
// import CakeView from './features/cake/Cakeview'
// import IcecreamView from './features/icecream/Icecreamview'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <UserView/>
//         <CakeView/>
//         <IcecreamView/>
//   </div>
//     </>
//   )
// }

// export default App

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import  HomePage from './components/Homepage'
import  RQSuperHeroesPage  from './components/RQSuperhereo'
import SuperHeroesPage  from './components/SuperHero'
import { QueryClient, QueryClientProvider} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools';
import SuperHeroDataPage from './components/SuperHeroData'
import InfiniteColors from './components/InfinitQuery'

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/super-heroes'>Traditional Super Heroes</Link>
            </li>
            <li>
              <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/super-heroes' element={<SuperHeroesPage />}/>
          <Route path='/rq-super-heroes' element={  <RQSuperHeroesPage />}/>
          <Route path='/super-hero/:heroId' element={<SuperHeroDataPage/>}/>
          <Route path='/colors' element={<InfiniteColors/>}/>
          <Route path='/' element={ <HomePage />}/>
        </Routes>
      </div>
    </Router>
    <ReactQueryDevtools position='bottom-right' />
    </QueryClientProvider>
  )
}

export default App
