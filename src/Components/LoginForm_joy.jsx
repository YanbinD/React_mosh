import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class LoginForm extends Form {
  // error is an object that holds all the
  state = {
    data: { username: "", password: "" },
    errors: {}
  };

  // define a schema for Joy
  // label contains the name of the field in the warning
  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
      .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,12}$/, "password")
  };

  schema_prop = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };
  // to handle the back end login specific to this form
  doSubmit = () => {
    console.log("submitted");
  };

  renderPasswordPrompt() {
    if (!this.state.errors.password) return null;
    const { password } = this.state.errors;
    if (password.includes("fails to match")) {
      return (
        <div className="alert alert-warning" role="alert">
          {" "}
          Password must be at least 4 characters, no more than 8 characters, and
          must include at least one upper case letter, one lower case letter,
          and one numeric digit.{" "}
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderPasswordPrompt()}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;

// react should not work with document object, because it suppose to provide an abstraction
