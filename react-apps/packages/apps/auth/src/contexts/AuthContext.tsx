import React, { ReactChild } from 'react'

export type AuthContextData = {
  auth: boolean
  accessToken?: string
  experiment?: string // experiment al que redireccionar después del login
}

const initialAuthContextData: () => AuthContextData = () => {
  return {
    auth: false,
  }
}

type SaveRedirectExperiment = {
  type: 'SAVE_REDIRECT_EXPERIMENT'
  experiment: string
}

type Login = {
  type: 'LOGIN'
  accessToken: string
}

type ReducerAction = SaveRedirectExperiment | Login

function reducer(
  state: AuthContextData,
  action: ReducerAction
): AuthContextData {
  switch (action.type) {
    case 'LOGIN': {
      return {
        ...state,
        auth: true,
        accessToken: action.accessToken,
      }
    }
    case 'SAVE_REDIRECT_EXPERIMENT': {
      return {
        ...state,
        experiment: action.experiment,
      }
    }
  }
}

export const AuthContext = React.createContext({
  authState: initialAuthContextData(),
  dispatch: (value: ReducerAction) => {},
})

export function AuthContextProvider(props: { children: ReactChild }) {
  const [state, dispatch] = React.useReducer(reducer, initialAuthContextData())

  return (
    <AuthContext.Provider value={{ authState: state, dispatch }}>
      {props.children}
    </AuthContext.Provider>
  )
}
