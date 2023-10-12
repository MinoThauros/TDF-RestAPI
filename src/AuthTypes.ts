export type AuthRequestPayloadArgs={
    email: string;
    password: string;
    returnSecureToken: boolean;
  }
  
  // Response Payload Type
export type SignUpResponsePayload={
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
}
  

// Response Payload Type
export type SignInResponsePayload=SignUpResponsePayload & {
    registered: boolean;
}


export type FirebaseErrorTypes= 'EMAIL_NOT_FOUND'|'INVALID_PASSWORD'|'USER_DISABLED'|'EMAIL_EXISTS'|'OPERATION_NOT_ALLOWED'|'TOO_MANY_ATTEMPTS_TRY_LATER'|'INVALID_EMAIL'|'MISSING_PASSWORD'|'WEAK_PASSWORD'

export type VerifyTokenResponse = {
    localId: string;                   // The uid of the current user.
    email: string;                     // The email of the account.
    emailVerified: boolean;            // Whether or not the account's email has been verified.
    displayName: string;               // The display name for the account.
    providerUserInfo: {                // List of all linked provider objects
        providerId: string;
        federatedId: string;
    }[];
    photoUrl: string;                  // The photo Url for the account.
    passwordHash: string;              // Hash version of password.
    passwordUpdatedAt: number;         // The timestamp, in milliseconds, that the account password was last changed.
    validSince: string;                // The timestamp, in seconds, which marks a boundary, before which Firebase ID tokens are considered revoked.
    disabled: boolean;                 // Whether the account is disabled or not.
    lastLoginAt: string;               // The timestamp, in milliseconds, that the account last logged in at.
    createdAt: string;                 // The timestamp, in milliseconds, that the account was created at.
    customAuth: boolean;               // Whether the account is authenticated by the developer.
};
