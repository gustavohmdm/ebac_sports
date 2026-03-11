import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type FavoritosState = {
  itensFavoritos: Produto[]
}

const initialState: FavoritosState = {
  itensFavoritos: []
}

const FavoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    adicionarFavoritos: (state, action: PayloadAction<Produto>) => {
      const favorito = action.payload

      const existe = state.itensFavoritos.find((p) => p.id === favorito.id)
      if (existe) {
        state.itensFavoritos = state.itensFavoritos.filter(
          (p) => p.id !== favorito.id
        )
      } else {
        state.itensFavoritos.push(favorito)
      }
    }
  }
})

export const { adicionarFavoritos } = FavoritosSlice.actions
export default FavoritosSlice.reducer
