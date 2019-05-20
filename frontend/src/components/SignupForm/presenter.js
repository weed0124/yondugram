import React from "react";
import PropTypes from "prop-types";
import FacebookLogin from "react-facebook-login";
import formStyles from "shared/formStyles.scss";

const SignupForm = (props, context) => (
    <div className={formStyles.formComponent}>
        <h3 className={formStyles.signupHeader}>
            {context.t("Sign up to see photos and videos from your friends.")}
        </h3>
            <FacebookLogin 
                appId="334624867244012"
                autoLoad={true}
                fields="name,email,picture"
                callback={props.handleFacebookLogin}
                cssClass={formStyles.button}
                icon="fa-facebook-official"
                textButton={context.t("Login with Facebook")}
            />
        <span className={formStyles.divider}>or</span>
        <form className={formStyles.form} 
              onSubmit={props.handleSubmit}
              method="post"
        >
            <input type="email" 
                   placeholder="Email" 
                   className={formStyles.textInput}
                   value={props.emailValue}
                   onChange={props.handleInputValue}
                   name={"email"}
            />
            <input type="text" 
                   placeholder="Full Name" 
                   className={formStyles.textInput}
                   value={props.nameValue}
                   onChange={props.handleInputValue}
                   name={"name"}
            />
            <input type="username" 
                   placeholder="Username" 
                   className={formStyles.textInput}
                   value={props.usernameValue}
                   onChange={props.handleInputValue}
                   name={"username"}
            />
            <input type="password" 
                   placeholder="Password" 
                   className={formStyles.textInput}
                   value={props.passwordValue}
                   onChange={props.handleInputValue}
                   name={"password"}
            />
            <input type="submit" 
                   placeholder="Sign up" 
                   className={formStyles.button}
            />
        </form>
        <p className={formStyles.terms}>
        {context.t("By signing up, you agree to our ")}<span>{context.t("Terms & Privacy Policy")}</span>
        </p>
    </div>
);

SignupForm.propTypes = {
    emailValue: PropTypes.string.isRequired,
    nameValue: PropTypes.string.isRequired,
    usernameValue: PropTypes.string.isRequired,
    passwordValue: PropTypes.string.isRequired,
    handleInputValue: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleFacebookLogin: PropTypes.func.isRequired
}

SignupForm.contextTypes = {
    t: PropTypes.func.isRequired
}

export default SignupForm;