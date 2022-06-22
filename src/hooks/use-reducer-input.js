import { useReducer } from "react"

const initialState = {
  value: "",
  isTouched: false
}

const inputReducer = (state, action) => {
  if (action.type === "CHANGE") {
    return { value: action.value, isTouched: state.isTouched }
  }
  if (action.type === "TOUCHED") {
    return { isTouched: true, value: state.value }
  }
  if (action.type === "RESET") {
    return { isTouched: false, value: "" }
  }

  return initialState
}

const useBasicInput = (validationFunction) => {

  const [inputState, dispatch] = useReducer(inputReducer, initialState)

  const valueIsValid = validationFunction(inputState.value)
  const hasErrors = !valueIsValid && inputState.isTouched

  const valueChangeHandler = (event) => {
    dispatch({ type: "CHANGE", value: event.target.value })
  }

  const valueBlurHandler = () => {
    dispatch({ type: "TOUCHED" })
  }

  const reset = () => {
    dispatch({ type: "RESET" })
  }

  return {
    value: inputState.value,
    valueIsValid: valueIsValid,
    hasErrors: hasErrors,
    valueChangeHandler: valueChangeHandler,
    valueBlurHandler: valueBlurHandler,
    reset: reset,
  }
}

export default useBasicInput