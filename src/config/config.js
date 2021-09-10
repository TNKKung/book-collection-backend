module.exports = {
  port: 3003,
  secret: "NodeJsApi",
  database:
    "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false",
  jwt: {
    secret:
      process.env.NODE_ENV === "production" ? process.env.JWT_SECRET : "secret",
    accessExpirationMinutes: process.env.JWT_ACCESS_EXPIRATION_MINUTES,
    refreshExpirationDays: process.env.JWT_REFRESH_EXPIRATION_DAYS,
  },
};
