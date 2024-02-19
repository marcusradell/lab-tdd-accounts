import { createAccount } from "./account";

type Main = (id: string, email: string) => void;

export const main: Main = (id, email) => {
  try {
    const account = createAccount(id, email);
    console.log(account);
  } catch (error) {
    console.error(error);
  }
};
