type CreateAccount = (id: string, email: string) => void;

export const createAccount: CreateAccount = (id, email) => {
  if (email === "") {
    throw new Error("Email is required.");
  }

  throw new Error("Not implemented");
};
