import useBasicInput from "../hooks/use-basic-input";

const BasicForm = (props) => {

  const {
    value: firstName,
    valueIsValid: firstNameValid,
    hasErrors: firstNameHasErrors,
    valueChangeHandler: firstNameChangeHandler,
    valueBlurHandler: firstNameBlurHandler,
    reset: firstNameReset
  } = useBasicInput(value => value.trim() !== "")

  const {
    value: lastName,
    valueIsValid: lastNameValid,
    hasErrors: lastNameHasErrors,
    valueChangeHandler: lastNameChangeHandler,
    valueBlurHandler: lastNameBlurHandler,
    reset: lastNameReset
  } = useBasicInput(value => value.trim() !== "")

  const {
    value: email,
    valueIsValid: emailValid,
    hasErrors: emailHasErrors,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: emailReset
  } = useBasicInput(value => value.includes("@"))


  const firstNameClasses = firstNameHasErrors ? "form-control invalid" : "form-control"
  const lastNameClasses = lastNameHasErrors ? "form-control invalid" : "form-control"
  const emailClasses = emailHasErrors ? "form-control invalid" : "form-control"

  let formIsValid = false

  if (firstNameValid && lastNameValid && emailValid) {
    formIsValid = true
  }

  const onSubmitHandler = (event) => {
    event.preventDefault()
    firstNameReset()
    lastNameReset()
    emailReset()
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <div className='control-group'>

        <div className={firstNameClasses}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='firstname'
            value={firstName}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameHasErrors && <p className="error-text">First Name Must Be Valid</p>}
        </div>

        <div className={lastNameClasses}>
          <label htmlFor='name'>Last Name</label>
          <input
            type='text'
            id='lastname'
            value={lastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameHasErrors && <p className="error-text">Last Name Must Be Valid</p>}
        </div>


      </div>
      <div className={emailClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input
          type='email'
          id='email'
          value={email}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasErrors && <p className="error-text">Email Must Be Valid</p>}
      </div>

      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;