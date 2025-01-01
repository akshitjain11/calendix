import Nylas from "nylas";


export const nylasConfig = {
    clientId: process.env.NYLAS_CLIENT_ID ?? "",  // Use empty string as fallback
    callbackUri: "http://localhost:3000/api/oauth/exchange",
    apiKey: process.env.NYLAS_API_KEY ?? "",  // Use empty string as fallback
    apiUri: process.env.NYLAS_API_URI ?? "",  // Use empty string as fallback
  };
  
  export const nylas = new Nylas({
    apiKey: nylasConfig.apiKey,
    apiUri: nylasConfig.apiUri,
  });