import { ReactComponent as search } from "assets/icons/search.svg";  
import * as S from "./style";
const Home = () => {
  return(
    <S.Home>  
      <S.HomeContent>
        <header>
          <S.HomeHeaderDetails>
          <div>
            <S.HomeHeaderDetailsLogo>Pizza Fresh</S.HomeHeaderDetailsLogo>
            <S.HomeHeaderDetailsDate>Aqui ficará a data</S.HomeHeaderDetailsDate>  
          </div>
            <S.HomeHeaderDetailsSearch>
              <input type="text" placeholder="Procure pelo sabor" />
              <Search />
            </S.HomeHeaderDetailsSearch>
          </S.HomeHeaderDetails>
        </header>
        <div>
          <S.HomeProductTitle>
            <b>Pizzas</b>
          </S.HomeProductTitle>
          <S.HomeProductList>
            <p>Lista de produtos aqui</p>
          </S.HomeProductList>
        </div>
      </S.HomeContent>
    </S.Home> 
  );
}

export default Home;