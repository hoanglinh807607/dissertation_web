export class Constants {
  public static googleMapApiKey = "AIzaSyDcMgMJZfiPmHzVtuIHVKoSmiCcgMpa8L8";
  public static STATUS_CODE_SUCCESS = 200;
  public static STATUS_CODE_FAIL = 1;
  public static gatewayUrl = "http://localhost:8762"

  // tslint:disable-next-line:max-line-length
  public static REGEX_PASSWORD = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])(?=[a-zA-Z0-9 !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{8,})/;
  public static REGEX_PIN = /^[0-9]+(\.[0-9]*){0,1}$/;
  public static REGEX_EMAIL = /^(?:[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]{1,64}(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]{1,64})*|\"[\x20-\x7E]{1,62}")@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  public static REGEX_NUMBER_AND_MINUS_ONLY = /^[A-Za-z0-9-]*$/;
  public static REGEX_US_POSTAL_CODE = /^[0-9]{5}(?:-[0-9]{4})?$/;
  public static REGEX_LETTER_AND_DIGIT_ONLY = /^[a-zA-Z0-9]+$/;

  // tslint:disable-next-line:max-line-length
  public static REGEX_CHECK_ICON = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;

  // tslint:disable-next-line:quotemark
  public static SPECIAL_PASSWORD = "!\"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~";
  public static PHONE_NUMBER_PLUS = /^-?[0-9+]+(\.[0-9]*){0,1}$/m;
  public static PHONE_NUMBER_START_WITH_PLUS = /^\+?[0-9]+(\.[0-9]*){0,1}$/m;
  public static NUMBER_ONLY = /^-?[0-9]+(\.[0-9]*){0,1}$/m;
  public static NUMBER_ONLY_NO_DOC = /^[0-9]*$/m;

  // Validate email and phone constants
  public static RESPONSE_EMAIL_OK = 0;
  public static RESPONSE_EMAIL_DUPLICATE = 1;
  public static RESPONSE_EMAIL_INVALID = 2;

  // Account response
  public static RESPONSE_SUCCESS = 'success';
  public static RESPONSE_FAILED = 1;
  public static RESPONSE_INVALID_PASSWORD = "Mật khẩu không chính xác."
  public static RESPONSE_STATUS_OK = 'OK';
  public static RESPONSE_STATUS_SUCCESS = 'SUCCESS';

  // format file and date
  public static readonly IMAGE_TYPE_SUPPORT_ARRAY = ['image/jpg', 'image/jpeg', 'image/pjeg', 'image/png', 'image/bmp'];
  public static readonly DATE_FORMAT = 'MMM dd, y, HH:mm';
  public static readonly DATE_FORMAT_FILTER = 'yyyy-MM-DD';
}

export class UrlAPI {
  // edit is put and delete
  public static login = Constants.gatewayUrl + '/auth/login';
  public static signUp = Constants.gatewayUrl + '/auth/sign-up';
  public static getUsers = Constants.gatewayUrl + '/users';
  public static resendMailResetPassword = Constants.gatewayUrl + '/users/reset-password';
  public static updatePassword = Constants.gatewayUrl + '/users/update-password';
  public static getUserPrincipal = Constants.gatewayUrl + '/users/principal';
  public static becomeHostHouse = Constants.gatewayUrl + '/users/become-host-house/{id}';
  public static getRoles = Constants.gatewayUrl + '/roles';
  public static getTemplatesRoles = Constants.gatewayUrl + '/roles/templates';
  public static editRoleEnable = Constants.gatewayUrl + '/roles/{id}/enable';
  public static editRoleDisable = Constants.gatewayUrl + '/roles/{id}/disable';
  public static getCategoryHomestays = Constants.gatewayUrl + '/category-homestays';
  public static getCategoryUtilities = Constants.gatewayUrl + '/category-utilities';
  public static getListHomestaysAdmin = Constants.gatewayUrl + '/homestays/admin';
  public static getListHomestaysWeb = Constants.gatewayUrl + '/homestays/web';
  public static getHomestays = Constants.gatewayUrl + '/homestays';
  public static getPriceRooms = Constants.gatewayUrl + '/price-rooms';
  public static getProvinces = Constants.gatewayUrl + '/provinces';
  public static getListRoomsAdmin = Constants.gatewayUrl + '/rooms/admin';
  public static getListRoomsWeb = Constants.gatewayUrl + '/rooms/web';
  public static getRooms = Constants.gatewayUrl + '/rooms';
  public static getRoomById = Constants.gatewayUrl + '/rooms/{id}';
  public static getRoomsByHomestayId = Constants.gatewayUrl + '/rooms/homestay/{homestayId}';
  public static getUtilities = Constants.gatewayUrl + '/utilities';
  public static getOrders = Constants.gatewayUrl + '/orders';
  public static getOrderByUserId = Constants.gatewayUrl + '/orders/{userId}/{status}';
  public static getOrderDetailByOrderId = Constants.gatewayUrl + '/order-details/{orderId}';
}

export class GoogleAPI {
  public static googleGetCountryCode = `https://maps.googleapis.com/maps/api/geocode/json?latlng={lat},{long}&key=${Constants.googleMapApiKey}`;
}
