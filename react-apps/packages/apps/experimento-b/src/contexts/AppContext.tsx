import React, { ReactChild } from 'react'

export type User = {
  accessToken: string
  experimentDone: boolean
  allowsNews?: boolean
  prevAllowsNews: boolean | null
}

type Preguntas = {
  edad: number
  nivelEducativo: number
}

export type AppContextData = {
  datetime: string
  auth: boolean
  visited: string[]
  user?: User
  submitted: boolean
  experiment?: {
    preguntas: Preguntas
  }
}

const initialAppContextData: () => AppContextData = () => {
  return {
    datetime: new Date().toLocaleString('es', { hour12: false }),
    auth: false,
    visited: [],
    user: {
      accessToken: '',
      experimentDone: false,
      prevAllowsNews: false,
      allowsNews: false,
    },
    submitted: false,
  }
}

type Omit<T, K extends string | number | symbol> = {
  [P in Exclude<keyof T, K>]: T[P]
}

type Login = {
  type: 'LOGIN'
  user: Omit<User, 'allowsNews'>
}

type Visit = {
  type: 'REGISTER_VISIT'
  route: string
}

type AcceptTerms = {
  type: 'ACCEPT_TERMS'
  allowsNews: boolean
}

type Submited = {
  type: 'SUBMITTED'
}

type SavePreguntasFormData = {
  type: 'SAVE_PREGUNTAS_FORM_DATA'
  data: Preguntas
}

type ReducerAction =
  | AcceptTerms
  | Login
  | Visit
  | Submited
  | SavePreguntasFormData

function reducer(state: AppContextData, action: ReducerAction): AppContextData {
  switch (action.type) {
    case 'SUBMITTED': {
      return {
        ...state,
        submitted: true,
      }
    }
    case 'LOGIN': {
      return {
        ...state,
        auth: true,
        user: {
          ...state.user,
          ...action.user,
        },
      }
    }
    case 'REGISTER_VISIT': {
      return {
        ...state,
        visited: [...state.visited, action.route],
      }
    }
    case 'ACCEPT_TERMS': {
      return {
        ...state,
        user: {
          ...state.user!,
          allowsNews: action.allowsNews,
        },
      }
    }
    case 'SAVE_PREGUNTAS_FORM_DATA': {
      return {
        ...state,
        experiment: {
          preguntas: action.data,
        },
      }
    }
  }
}

export const AppContext = React.createContext({
  appState: initialAppContextData(),
  dispatch: (value: ReducerAction) => {},
})

export function AppContextProvider(props: { children: ReactChild }) {
  const [state, dispatch] = React.useReducer(reducer, initialAppContextData())

  return (
    <AppContext.Provider value={{ appState: state, dispatch }}>
      {props.children}
    </AppContext.Provider>
  )
}
