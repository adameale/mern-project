import main from '../Assets/images/main-alternative.svg'
import Wrapper from '../Assets/Wrappers/Testing'
import { Logo } from '../components';
import { Link } from 'react-router-dom';
const Landing = () => {
  return (

    <Wrapper>
       <Logo />
      <div className='container page'>
      <div className='info'>
        <h1>job   <span>tracking  </span>  app</h1>
        <p>
        What Is React?
         React is a declarative, efficient, 
         and flexible JavaScript library for building user
         interfaces.
          It lets you compose complex UIs from small and 
          isolated pieces of code called “components”.</p>
          <Link to='/register'  className='btn btn-hero'>login/register
          </Link>
       </div>
       <img src={main} alt='job hunt' className='img main-img' />   
        </div>
    </Wrapper>
  )
}


export default Landing
