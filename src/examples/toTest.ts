import * as moment from "moment";
import { sendMail } from "../libs/mails";

export const computeDueDateAndSendMail = async (
  email: string
): Promise<string> => {
  const dueDate = moment().add(3, "days");
  return await sendMail()(email, dueDate);
};
