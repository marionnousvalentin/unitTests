import { fakeData } from "@src/fixtures/email";

export const sendMail = jest.fn().mockResolvedValue(fakeData);
