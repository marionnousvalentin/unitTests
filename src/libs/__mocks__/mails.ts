import { fakeData } from "@src/fixtures/email";

const sender = jest.fn().mockResolvedValue(fakeData);

export const sendMail = () => sender;
