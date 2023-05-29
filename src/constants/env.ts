const envObj = JSON.parse(process.env.backend || '{}');

export const BOOBYTRAP_ENV = process.env.BOOBYTRAP_ENV || envObj.BOOBYTRAP_ENV;
export const PORT_ENV = process.env.PORT_ENV || envObj.PORT_ENV;
export const PUBLIC_VAPID_KEY_ENV =
  process.env.PUBLIC_VAPID_KEY_ENV || envObj.PUBLIC_VAPID_KEY_ENV;
export const PRIVATE_VAPID_KEY_ENV =
  process.env.PRIVATE_VAPID_KEY_ENV || envObj.PRIVATE_VAPID_KEY_ENV;
