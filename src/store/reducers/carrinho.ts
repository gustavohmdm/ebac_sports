import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type CarrinhoState = {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

const CarrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarProdutos: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.itens.find((item) => item.id === produto.id)) {
        alert('Item já adicionado')
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export const { adicionarProdutos } = CarrinhoSlice.actions
export default CarrinhoSlice.reducer
