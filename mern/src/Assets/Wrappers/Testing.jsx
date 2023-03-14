import styled from 'styled-components';
const Wrapper =styled.main`
nav {
  width: var{--fluid-width};
  max-width: var{--max-width};
  height: var{--nav-height};
  margin: 0 auto;
  display: flex;
  align-items: center;


}
.page {
  min-height: calc(100vh -var(--nav-height));
  display: grid;
  align-items: center;
  margin-top: -3rem;

}
h1{
  font-weight: 700;
  margin-top: 50px;
span{
  color:var(--primary-500);
}
}
p{
  color:var(--pink-600);
}
.main-img{
  display: none;
}
@media (min-width:992px){
  .page{
    grid-template-columns: 1fr 1fr;
    column-gap: 3rem;
  }
  .main-img {
    display: block;
  }
}
`
export default Wrapper