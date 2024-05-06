import AuthErrorMsg from "./form_components/auth_error_msg/auth_error_msg";
import Field from "./form_components/text_field/text_field";
import Button from "./form_components/button/button";

export default function AuthForm(props) {
  const {
    username,
    email,
    password,
    confirmPassword,
    handleUsernameChange,
    handleEmailChange,
    handlePasswordChange,
    handleConfirmPasswordChange,
    handleSubmit,
    error,
    setError,
    disableBtn,
    btnTitle,
  } = props;

  const handleErrorBtnClick = () => {
    setError("");
  };

  return (
    <form
      className="w-full flex flex-col items-center justify-center gap-4"
      onSubmit={handleSubmit}
    >
      {error && (
        <AuthErrorMsg error={error} handleClick={handleErrorBtnClick} />
      )}
      <FieldsHolder
        username={username}
        email={email}
        password={password}
        confirmPassword={confirmPassword}
        handleUsernameChange={handleUsernameChange}
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
        handleConfirmPasswordChange={handleConfirmPasswordChange}
      />
      <Button disableBtn={disableBtn} title={btnTitle} />
    </form>
  );
}

function FieldsHolder(props) {
  const {
    username,
    email,
    password,
    confirmPassword,
    handleUsernameChange,
    handleEmailChange,
    handlePasswordChange,
    handleConfirmPasswordChange,
  } = props;

  if (password == undefined) {
    return (
      <div className="w-full flex flex-col items-center justify-center gap-2">
        <Field
          label="Email"
          type="email"
          name="email"
          value={email}
          handleChange={handleEmailChange}
        />
      </div>
    );
  }

  if (username == undefined) {
    return (
      <div className="w-full flex flex-col items-center justify-center gap-2">
        <Field
          label="Email"
          type="email"
          name="email"
          value={email}
          handleChange={handleEmailChange}
        />
        <Field
          label="Password"
          type="password"
          name="password"
          value={password}
          handleChange={handlePasswordChange}
        />
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center justify-center gap-2">
      <Field
        label="Username"
        type="text"
        name="username"
        value={username}
        handleChange={handleUsernameChange}
      />
      <Field
        label="Email"
        type="email"
        name="email"
        value={email}
        handleChange={handleEmailChange}
      />
      <Field
        label="Password"
        type="password"
        name="password"
        value={password}
        handleChange={handlePasswordChange}
      />
      <Field
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        value={confirmPassword}
        handleChange={handleConfirmPasswordChange}
      />
    </div>
  );
}
