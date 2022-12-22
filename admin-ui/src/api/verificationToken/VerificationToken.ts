export type VerificationToken = {
  createdAt: Date;
  expires: Date | null;
  id: string;
  token: string | null;
  updatedAt: Date;
};
