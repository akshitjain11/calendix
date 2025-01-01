import { nylas, nylasConfig } from "@/libs/nylas";
import { session } from "@/libs/session";
import { NextApiRequest } from "next";
import { redirect } from "next/navigation";

export async function GET(req:NextApiRequest) {
    console.log("Received callback from Nylas");
    const url = new URL(req.url as string, `http://${req.headers.host}`);
    const code = url.searchParams.get('code');

  if (!code) {
    return Response.json("No authorization code returned from Nylas",{status:400})
  }


    const response = await nylas.auth.exchangeCodeForToken({
      clientSecret: nylasConfig.apiKey,
      clientId: nylasConfig.clientId, // Note this is *different* from your API key
      redirectUri: nylasConfig.callbackUri, // URI you registered with Nylas in the previous step
      code,
    });
    const { grantId,email } = response;

    await session().set('grantId',grantId);
    await session().set('email',email);

    // This depends on implementation. If the browser is hitting this endpoint
    // you probably want to use res.redirect('/some-successful-frontend-url')
    redirect('/');
}