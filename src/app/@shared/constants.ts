import {Step} from "../@core/models/step.model";
import {ProgramStateConfig} from "../@core/models/program.model"
import {environment} from "../../environements/environements";
import {BlogStateConfig} from "../@core/models/blog.model";


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
        name: "birthDay",
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

export const CREATE_ORDER_API_URL = environment.apiUrl + "/api/enrollments/create-order/{id}"

export const COMPLETE_ORDER_API_URL = environment.apiUrl + "/api/enrollments/complete-order"

export const FIND_ENROLLMENT_API_URL = environment.apiUrl + "/api/enrollments/exists/{id}"

export const SEARCH_PROGRAM_API_URL = environment.apiUrl + "/api/programs/search/category={category}"

export const GET_PROGRAMS_BY_ENROLLED_USER = environment.apiUrl + "/api/programs/enrollments"

export const BLOG_SEARCH_API_URL = environment.apiUrl + "/api/blogs/search"

export const CONTACT_US_API_URL = environment.apiUrl + '/api/contact-us'
export const GOOGLE_LOGIN_API_API = environment.apiUrl + '/api/auth/google-social-login';

export const CREATE_COMMENT_API_URL = environment.apiUrl + "/api/comments/{id}"
export const REPLY_COMMENT_API_URL = environment.apiUrl + "/api/comments/{id}/reply"
export const DELETE_COMMENT_API_URL = environment.apiUrl + "/api/comments/{id}"
export const DELETE_REPLY_COMMENT_API_URL = environment.apiUrl + "/api/comments/reply/{replyId}"
export const GET_REVIEWS_API_URL = environment.apiUrl + "/api/reviews/{id}"
export const CREATE_REVIEW_API_URL = environment.apiUrl + "/api/reviews/{programId}"
export const DELETE_REVIEW_API_URL = environment.apiUrl + "/api/reviews/{id}"
export const SEARCH_REVIEW_API_URL = environment.apiUrl + "/api/reviews/search"
export const UPDATE_REVIEW_API_URL = environment.apiUrl + "/api/reviews/{id}"
export const DELETE_REVIEWS_API_URL = environment.apiUrl + "/api/reviews/{id}"

export const SEARCH_TRAINER_API_URL = environment.apiUrl + '/api/users/search/trainers'

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

export const SAVE_PROGRAM_API_URL = environment.apiUrl + "/api/programs/create-program"
export const UPDATE_PROGRAM_API_URL = environment.apiUrl + "/api/programs/{id}"
export const UPDATE_SECTION_API_URL = environment.apiUrl + "/api/programs/sections/{id}"

export const PROGRAM_SUBMIT_API_URL = `${environment.apiUrl}/api/programs/{id}/submit`;
export const PROGRAM_VALIDATE_API_URL = `${environment.apiUrl}/api/programs/{id}/validate`;
  export const PROGRAM_REJECT_API_URL = `${environment.apiUrl}/api/programs/{id}/archive`;

export const PROGRAM_CANCEL_API_URL = `${environment.apiUrl}/api/programs/{id}/cancel`;

export const PROGRAM_DELETE_API_URL = `${environment.apiUrl}/api/programs/{id}`
export const GET_TRAINER_PROGRAMS_API_URL = environment.apiUrl + "/api/programs/me"

export const FIND_PROGRAM_BY_ID_API_URL = environment.apiUrl + "/api/programs/";
export const SAVE_BLOG_API_URL = environment.apiUrl + "/api/blogs/create-blog"
export const UPDATE_BLOG_API_URL = environment.apiUrl + "/api/blogs/{id}"
export const GET_TRAINER_STATISTICS = environment.apiUrl + "/api/statistics/trainer"

export const GET_ADMIN_STATISTICS = environment.apiUrl + "/api/statistics/admin"


export const GET_USER_BY_ID_API_URL = environment.apiUrl + "/api/users/{id}"
export const BLOG_SUBMIT_API_URL = `${environment.apiUrl}/api/blogs/{id}/submit`;

export const BLOG_CANCEL_API_URL = `${environment.apiUrl}/api/blogs/{id}/cancel`;

export const BLOG_DELETE_API_URL = `${environment.apiUrl}/api/blogs/{id}`
export const GET_TRAINER_BLOGS_API_URL = environment.apiUrl + "/api/blogs/me"

export const FIND_BLOG_BY_ID_API_URL = environment.apiUrl + "/api/blogs/";
export const GET_ALL_JOIN_REQUESTS= environment.apiUrl + "/api/joins/requests";
export const REQUEST_JOIN_API_URL = environment.apiUrl + "/api/joins/join-us";
export const TREAT_JOIN_REQUEST_API_URL = environment.apiUrl + "/api/joins/treat/{id_request}";

export const GET_NEW_USERS_ORDERS = environment.apiUrl + "/api/enrollments/trainer";

export const GET_NEW_ENROLLED_USERS = environment.apiUrl + "/api/enrollments/trainer/users";


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
  },
  PROGRAM: {
    ERROR: "Sorry, we were unable to save your program, Please try again later or contact our customer support team for further assistance."
  },
  BLOG: {
    ERROR: "Sorry, we were unable to save your blog, Please try again later or contact our customer support team for further assistance."
  },
  REQUEST: {
    ERROR: "Sorry, we were unable to save your request, Please try again later or contact our customer support team for further assistance."
  },
  CONTACT: {
    EMAIL_SENT_SUCCESSFULLY: "Email sent successfully"
  },
  ERROR: "We're sorry, something went wrong while processing your request. Please try again later or contact our customer support team for further assistance."
}

export const VALIDATION_MESSAGES = {
  REQUIRED: "Please fill out this field.",
  EMAIL: "Email must be a well-formed email address.",
  PASSWORD_COMMON: "Please choose a less common password.",
  PASSWORD_LENGTH: "Password must be at least 8 characters long.",
  PASSWORD_UPPER_CASE: "Password must contain at least one uppercase letter.",
  PASSWORD_LOWER_CASE: "Password must contain at least one lowercase letter.",
  PASSWORD_DIGITS: "Password must contain at least one digit.",
  PASSWORD_SPECIAL: "Password must contain at least one special character.",
  MISMATCH: "Confirm Password does not match.",
  INVALID_INPUT: "invalid input",
  MIN_INPUT: "Your input exceeds the maximum allowed length",
  MAX_INPUT: "Your input does not meet the minimum required length",
  PATTERN_INPUT_MATCH: "Your input does not match the required pattern"

}

export const categories = new Map<string, string> ([
  ["FITNESS","Fitness"],
  ["NUTRITION","Nutrition"],
  ["MINDSET","Mindset"],
  ["STRENGTH", "Strength"],
  ["DANCE", "Dance"],
  ["NUTRITION_RECIPES", "Nutrition & Recipes"],
  ["MUSCLE_BUILDING", "Muscle Building"],
  ["HIIT", "HIIT"],
  ["CARDIO", "Cardio"],
  ["MOBILITY_FLEXIBILITY", "Mobility & Flexibility"],
  ["RECOVERY", "Recovery"],
  ["PILATES", "Pilates"],
  ["YOGA", "Yoga"],
  ["SLIM_SCULPT", "Slim & Sculpt"]
])

export const equipments = new Map<string, string> ([
  ["DUMBBELLS", "Dumbbells"],
  ["ADJUSTABLE_BENCH", "Adjustable Bench"],
  ["CORE_COMFORT_MAT", "Core Comfort Mat"],
  ["POWER_LOOPS", "Power Loops"],
  ["YOGA_MAT", "Yoga Mat"],
  ["RESISTANCE_LOOPS", "Resistance Loops"]
])



export const programStateConfigMap: Map<string, ProgramStateConfig> = new Map([
  ['IN_PROGRESS', { color: 'orange', text: 'Pending' }],
  ['ARCHIVED', { color: 'gray', text: 'Archived' }],
  ['SUBMITTED', { color: 'blue', text: 'Submitted' }],
  ['APPROVED', { color: 'green', text: 'Approved' }],
]);
export const blogStateConfigMap: Map<string, BlogStateConfig> = new Map([
  ['IN_PROGRESS', { color: 'orange', text: 'Pending' }],
  ['SUBMITTED', { color: 'blue', text: 'Submitted' }],
]);

