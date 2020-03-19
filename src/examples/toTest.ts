import * as moment from "moment";
import { sendMail } from "../libs/mails";
import { constructMail } from "@src/libs/mailConstructor";

export const computeDueDateAndSendMail = async (
  email: string
): Promise<string> => {
  const dueDate = moment().add(3, "days");
  const reconstructBody = () => {
    constructMail();
  };
  return await sendMail()(email, dueDate, reconstructBody);
};
