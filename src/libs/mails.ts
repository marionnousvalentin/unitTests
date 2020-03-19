import { Moment } from "moment";

export const sendMail = () => async (
  email: string,
  dueDate: Moment,
  bodyConstructor: () => void
): Promise<string> => {
  await new Promise(resolve => {
    setTimeout(resolve, 1000);
  });
  console.log("promise resolved", {
    email,
    bodyConstructor,
    dueDate: dueDate.format("DD/MM/YYYY")
  });
  return email;
};
