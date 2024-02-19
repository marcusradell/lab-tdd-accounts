import { createAccount } from "./account";

const main = () => {
  try {
    const account = createAccount("38041b2a-30a7-4601-bee3-08e905d8b093", "");
    console.log(account);
  } catch (error) {
    console.error(error);
  }
};

main();
