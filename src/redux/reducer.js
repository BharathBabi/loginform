import * as types from './actionType';

const initialState={
    employees:[],
    employee:{},
    loading:true,
    

}

const employeReducers=(state=initialState,action)=>{
    switch(action.type){
        case types.GET_EMPLOYEESLIST:
            return{
                ...state,
                employees:action.payload,
                loading:false
            }
              case types.GET_LOGIN:
                  return{
                      ...state,
                      employee:action.payload,
                      loading:false
                  }
            default:
                return state
    }
}

export default employeReducers