import { useState } from "react"


const useBasicInput = (validationFunction) => {

  const [value, setValue] = useState("")
  const [valueTouched, setValueTouched] = useState(false)
  const valueIsValid = validationFunction(value)
  const hasErrors = !valueIsValid && valueTouched

  const valueChangeHandler = (event) => {
    setValue(event.target.value)
    console.log(event.target.id, event.target.value)
  }

  const valueBlurHandler = () => {
    setValueTouched(true)
  }


  const reset = () => {
    setValue("")
    setValueTouched(false)
  }

  return {
    value,
    valueIsValid,
    hasErrors,
    valueChangeHandler,
    valueBlurHandler,
    reset,
  }
}

export default useBasicInput