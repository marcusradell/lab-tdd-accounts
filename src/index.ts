type CreateAccount = (id: string, email: string) => void;

const createAccount: CreateAccount = (id, email) => {
  if (email === "") {
    throw new Error("Email is required.");
  }

  throw new Error("Not implemented");
};

const main = () => {
  try {
    const account = createAccount("38041b2a-30a7-4601-bee3-08e905d8b093", "");
    console.log(account);
  } catch (error) {
    console.error(error);
  }
};

main();
