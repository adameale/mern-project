import { Link } from "react-router-dom";
import Wrapper from "../Assets/Wrappers/ErrorPage";
import     img      from  "../Assets/images/not-found.svg"
const Error = () => {
  return (
    <Wrapper className="full-page">
    <div>
     <img src={img} alt="not found"  />
     <h3> ohh! page not found </h3>
     <p> we can not seem to found the page you are 
        looking for</p>
        <Link to="/">back home</Link>
    </div>
    </Wrapper>
);
}

export default Error