import {Step} from "../models/step.model";
import {environment} from "../environements/environements";


export const TOKEN_KEY = 'auth-token';
export const REFRESH_TOKEN_KEY = 'auth-refresh-token';
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
        name: "email",
        type: "email",
        label: "your email"

      },
      {
        name: "age",
        type: "number",
        label: "age"
      },
      {
        name: "phone",
        type: "text",
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
      },
      {
        name: "street",
        type: "text",
        label: "street"
      }
    ]
  },
  {
    fields: [
      {
        name: "height",
        type: "number",
        label: "your height"

      }, {
        name: "weight",
        type: "number",
        label: "your weight"
      },
      {
        name: "sport",
        type: "text",
        label: "your favorite sport"
      }
    ]
  }
]

export const LOGIN_API_URL = environment.apiUrl + '/api/auth/login';

export const REGISTER_API_URL = environment.apiUrl + '/api/auth/register'

export const GOOGLE_LOGIN_API_API = environment.apiUrl + '/api/auth/google-social-login';

export const REFRESH_TOKEN_API = environment.apiUrl + '/api/auth/token';

export const FACEBOOK_LOGIN_API = environment.apiUrl + '/api/auth/facebook-social-login'

export const CONTENT_TYPE_HEADER = {'Content-Type': 'application/json'}

export const GET_CURRENT_USER_API_URL = environment.apiUrl + "/api/users/me"


export const ERROR_MESSAGES = {
  REGISTER: {
    REGISTRATION_FAILED_ALREADY_EXISTS: "Registration failed: Email already in use. Please use a different email or log in.",
    REGISTRATION_FAILED: "Registration failed: We're sorry, but we were unable to register your account."
  },
  TECHNICAL_ERRORS: {
    ERROR_JSON_PARSE: "Error parsing token:"
  }
}
