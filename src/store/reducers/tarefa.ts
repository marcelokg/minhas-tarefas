import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

type TarefasState = {
  itens: Tarefa[]
}

const initialState: TarefasState = {
  itens: [
    {
      id: 1,
      descricao: 'Estudar JS a noite',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.CONCLUIDO,
      titulo: 'Estudar JavaScript'
    },
    {
      id: 2,
      descricao: 'Estudar React de dia',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.PENDENTE,
      titulo: 'Estudar React'
    },
    {
      id: 3,
      descricao: 'Estudar sempre',
      prioridade: enums.Prioridade.URGENTE,
      status: enums.Status.CONCLUIDO,
      titulo: 'Estudar Redux'
    }
  ]
}

const tarefaSlice = createSlice({
  name: 'tarefas',
  initialState,

  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload)
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexTarefa >= 0) {
        state.itens[indexTarefa] = action.payload
      }
    }
  }
})

export const { remover, editar } = tarefaSlice.actions
export default tarefaSlice.reducer
