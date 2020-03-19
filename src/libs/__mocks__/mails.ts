import { Moment } from "moment";
import { fakeData } from "@src/fixtures/email";

const sender = jest.fn(
  async (
    email: string,
    dueDate: Moment,
    bodyConstructor: () => () => string
  ) => {
    bodyConstructor();
    return await Promise.resolve(fakeData);
  }
);

export const sendMail = () => sender;
