import {Step} from "../models/step.model";

export const API_URL = 'https://localhost:8080/';
export const DEFAULT_LANGUAGE = 'en';


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


export const ERROR_MESSAGES = {
  REGISTER: {
    REGISTRATION_FAILED_ALREADY_EXISTS: "Registration failed: Email already in use. Please use a different email or log in.",
    REGISTRATION_FAILED: "Registration failed: We're sorry, but we were unable to register your account."
  }
}
