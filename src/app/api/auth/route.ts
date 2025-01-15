import { nylas, nylasConfig } from "@/libs/nylas";
import { redirect } from "next/navigation";

// API route handler
export async function GET() {
  const authURL = nylas.auth.urlForOAuth2({
    clientId:nylasConfig.clientId as string,
    redirectUri:nylasConfig.callbackUri,
  });
  return redirect(authURL);
}
