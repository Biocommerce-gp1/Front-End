import {Action } from './actions';

export interface TokenState {
    tokens: string
    id: string
    tipo: string
}

const initialState = {
    tokens: "",
    id: "",
    tipo:""
}

export const tokenReducer = (state: TokenState = initialState, action: Action) =>{
    switch (action.type){
        case "ADD_TOKEN": {
            return {tokens: action.payload, id: state.id, tipo: state.tipo}
        }

        case "ADD_ID":{
            return {id: action.payload, tokens: state.tokens, tipo: state.tipo}
        }

        case "ADD_TIPO":{
            return {tipo: action.payload, tokens: state.tokens, id: state.id}
        }
        default:
            return state
    }
}