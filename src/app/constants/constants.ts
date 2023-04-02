import {Step} from "../models/step.model";
import {environment} from "../environements/environements";


export const TOKEN_KEY = 'auth-token';
export const REFRESH_TOKEN_KEY = 'auth-refresh-token';

export const RESET_TOKEN_KEY = "auth-reset-token"



export const CURRENT_USER_KEY = 'currentUser';
export const COMPLETE_PROFILE_FORM_STEPS: Step[] = [
  {
    fields: [
      {
        name: "firstName",
        type: "text",
        label: "first name",
      }, {
        name: "lastName",
        type: "text",
        label: "last name"
      },
      {
        name: "gender",
        type: "text",
        label: "Gender"
      },
      {
        name: "birthday",
        type: "date",
        label: "birthday"
      },
      {
        name: "phoneNumber",
        type: "tel",
        label: "phone number"
      }
    ]
  },
  {
    fields: [
      {
        name: "city",
        type: "text",
        label: "city"
      }, {
        name: "country",
        type: "text",
        label: "country"
      },
      {
        name: "postalCode",
        type: "number",
        label: "postal code"
      }
    ]
  },
  {
    fields: [
      {
        name: "facebook",
        type: "text",
        label: "your facebook"

      }, {
        name: "twitter",
        type: "text",
        label: "your twitter"
      },
      {
        name: "instagram",
        type: "text",
        label: "your instagram"
      },
      {
        name: "linkedin",
        type: "text",
        label: "your linkedin"
      }
    ]
  }
]

export const LOGIN_API_URL = environment.apiUrl + '/api/auth/login';

export const REGISTER_API_URL = environment.apiUrl + '/api/auth/register'

export const GOOGLE_LOGIN_API_API = environment.apiUrl + '/api/auth/google-social-login';

export const REFRESH_TOKEN_API = environment.apiUrl + '/api/auth/token';

export const VERIFY_ACCOUNT_API = environment.apiUrl + '/api/auth/verify';

export const FACEBOOK_LOGIN_API = environment.apiUrl + '/api/auth/facebook-social-login'

export const UPDATE_USER_API_URL = environment.apiUrl + '/api/users'

export const CONTENT_TYPE_HEADER = {'Content-Type': 'application/json'}

export const GET_CURRENT_USER_API_URL = environment.apiUrl + "/api/users/me"

export const UPDATE_PROFILE_PICTURE_API_URL = environment.apiUrl + "/api/users/profile-picture"

export const FORGET_PASSWORD_API_URL = environment.apiUrl + "/api/auth/forget-password"

export const RESET_PASSWORD_API_URL = environment.apiUrl + "/api/auth/reset-password"

export const FORGET_PASSWORD_VERIFY_API_URL = environment.apiUrl + "/api/auth/forget-password/verify-token"

export const RESET_PASSWORD_URL = environment.apiUrl + "/api/users/reset-password";
export const ALERT_MESSAGES = {
  REGISTER: {
    REGISTRATION_FAILED_ALREADY_EXISTS: "Registration failed: Email already in use. Please use a different email or log in.",
    REGISTRATION_FAILED: "Registration failed: We're sorry, but we were unable to register your account."
  },
  TECHNICAL_ERRORS: {
    ERROR_JSON_PARSE: "Error parsing token:"
  },
  FORGET_PASSWORD: {
    NOT_FOUND: "Email not found in our system. Please check the email address or register a new account.",
    ERROR: "Oops! Something went wrong. Please try again later or contact our customer support team for further assistance.",
    RESET_ERROR: "Sorry, we were unable to reset your password at this time. Please try again later or contact our customer support team for further assistance."
  },
  LOGIN: {
    BAD_CREDENTIALS: "Invalid login credentials. Please try again or contact support.",
    ERROR: "Sorry, we're unable to log you in at this time. Please try again later or contact our customer support team for further assistance."
  },
  PROFILE: {
    ERROR: "Sorry, we were unable to update your profile at this time. Please try again later or contact our customer support team for further assistance.",
    SUCCESS: "Your profile has been successfully updated!"
  },
  RESET_PASSWORD: {
    ERROR: "Sorry, we were unable to update your password at this time. Please try again later or contact our customer support team for further assistance.",
    SUCCESS: "Your password has been successfully updated!",
    INVALID_PASSWORD : "Invalid Password"
  }
}
