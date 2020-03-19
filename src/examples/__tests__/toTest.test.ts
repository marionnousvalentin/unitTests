import * as mockdate from "mockdate";
import * as moment from "moment";
import { computeDueDateAndSendMail } from "@src/examples/toTest";
import { sendMail } from "@src/libs/mails";

mockdate.set("2019-11-10T10:00:00.00Z");

jest.mock("@src/libs/mails", () => ({
  sendMail: jest.fn().mockResolvedValue("fakeMail")
}));

describe("[Module] mail", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const email = "monEmail";
  const date = moment().add(3, "days");
  it("should call sendMal", async () => {
    const resolvedValue = await computeDueDateAndSendMail(email);
    expect(resolvedValue).toEqual("fakeMail");
    expect(sendMail).toHaveBeenCalledWith(email, date);
  });
});
