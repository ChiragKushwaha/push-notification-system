const envObj = JSON.parse(process.env.backend || '{}');

export const BOOBYTRAP_ENV = process.env.BOOBYTRAP_ENV || envObj.BOOBYTRAP_ENV;
export const PORT_ENV = process.env.PORT_ENV || envObj.PORT_ENV;
