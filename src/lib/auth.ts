import { z } from 'zod';

export const googleAuthResponseSchema = z.object({
  access_token: z.string(),
  token_type: z.string(),
  expires_in: z.number(),
  scope: z.string(),
});

export type GoogleAuthResponse = z.infer<typeof googleAuthResponseSchema>;

export async function handleGoogleAuth(response: GoogleAuthResponse) {
  try {
    // Validate the response
    const validatedResponse = googleAuthResponseSchema.parse(response);
    
    // Here you would typically:
    // 1. Send the token to your backend
    // 2. Receive a session token or JWT
    // 3. Store it in localStorage/cookies
    // 4. Update the auth state
    
    console.log('Google auth successful:', validatedResponse);
    return validatedResponse;
  } catch (error) {
    console.error('Google auth error:', error);
    throw error;
  }
}