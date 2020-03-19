import * as moment from "moment";
import { sendMail } from "../libs/mails";

export const computeDueDateAndSendMail = async (
  email: string
): Promise<void> => {
  const dueDate = moment().add(3, "days");
  await sendMail(email, dueDate);
};
