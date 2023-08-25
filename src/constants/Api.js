export const BASE_URL = "//172.20.10.2:8080";
// REQUESTS
export const GET_REQUESTS = "/api/requests";
export const GET_REQUEST = "/api/requests/{requestId}";
export const POST_REQUEST = "/api/requests";
export const DELETE_REQUEST = "/api/requests/{requestId}";
export const POST_ACCEPT = "/api/requests/{requestId}/accept";
export const PUT_COMPLETE = "/api/requests/{requestId}/complete";
export const PUT_CANCEL = "/api/requests/{requestId}/cancel";
export const GET_HOSPITALS = "/api/requests/{requestId}/hospitals";
// ALARMS
export const GET_ALARMS = "/api/alarms/{memberId}";
export const PUT_ALARM = "/api/alarms/{memberId}/setting";
// BOARDS
export const GET_BOARDS = "/api/boards";
export const POST_BOARD = "/api/boards";
export const GET_BOARD = "/api/boards/{boardId}";
export const PATCH_BOARD = "/api/boards/{boardId}";
export const DELETE_BOARD = "/api/boards/{boardId}";
// HELPS
export const POST_QUESTION = "/api/helps?memberId={memberId}";
export const GET_QUESTIONS = "/api/helps?typeId=1&memberId={memberId}";
export const PATCH_QUESTION = "/api/helps/{questionId}";
export const GET_QUESTION = "/api/helps/{questionId}";
export const GET_FAQS = "/api/helps/faq";
export const POST_ANSWER = "/api/helps/{questionId}/answer";
// MEMBERS
export const POST_DUPLICATE_LOGINID =
  "/api/members/duplicate/loginId?loginId={loginId}";
export const POST_DUPLICATE_NICKNAME =
  "/api/members/duplicate/nickname?nickname={nickname}";
export const POST_DUPLICATE_PHONENUMBER =
  "/api/members/duplicate/phoneNumber?phoneNumber={phoneNumber}";
export const POST_MEMBER = "/api/members";
export const GET_MEMBER = "/api/members/{memberId}";
export const PUT_MEMBER = "/api/members/{memberId}";
export const POST_LOGIN = "/api/members/login";
// ACCEPTS
export const GET_ACCEPTS_COUNT = "/api/accepts/count?memberId={memberId}";
export const GET_REQUESTS_MINE = "/api/requests/{member_id}";
export const GET_ACCEPTS_MINE = "/api/accpets?{memberId}";
// BANNERS
export const GET_BANNERS = "/api/banners";
// CATEGORIES
export const GET_ACCEPTS_STATUS_CATEGORIES = "/api/acceptStatusCategories";
export const GET_BLOOD_DONATION_CATEGORIES = "/api/bloodDonationCategories";
export const GET_BLOOD_TYPE_CATEGORIES = "/api/bloodTypeCategories";
export const GET_QUESTION_TYPE_CATEGORIES = "/api/questionTypeCategories";
export const GET_REQUESTS_STATUS_CATEGORIES = "/api/requestStatusCategories";
