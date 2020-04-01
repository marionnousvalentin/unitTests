import * as moment from "moment";
import { sendMail } from "../libs/mails";
import { constructMail } from "@src/libs/mailConstructor";
import { attachProps } from "@src/libs/attachProps";

const computeDueDateAndSendMail = async (email: string): Promise<void> => {
  const dueDate = moment().add(3, "days");
  const reconstructBody = () => {
    constructMail();
  };
  sendMail()(email, dueDate, reconstructBody);
};

export class Mailer {
  email: string = "initEmail";

  constructor() {
    attachProps(() => {
      computeDueDateAndSendMail(this.email);
    }); // observer on props, send Mail when this.email changes
  }
}
