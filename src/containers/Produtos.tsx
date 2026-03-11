import { useSelector } from 'react-redux'

import Produto from '../components/Produto'
import { useGetProdutosQuery } from '../services/api'
import { RootReducer } from '../store'

import * as S from './styles'

const Produtos = () => {
  const { data: itens, isLoading } = useGetProdutosQuery()
  const favoritos = useSelector(
    (state: RootReducer) => state.favoritos.itensFavoritos
  )

  if (isLoading) return <h2>Carregando...</h2>
  return (
    <>
      <S.Produtos>
        {itens?.map((produto) => (
          <Produto
            key={produto.id}
            produto={produto}
            estaNosFavoritos={favoritos.some((fav) => fav.id === produto.id)}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default Produtos
