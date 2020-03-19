import * as mockdate from "mockdate";
import * as moment from "moment";
import { computeDueDateAndSendMail } from "@src/examples/toTest";
import { sendMail } from "@src/libs/mails";
import { fakeData } from "@src/fixtures/email";
import { constructMail } from "@src/libs/mailConstructor";

mockdate.set("2019-11-10T10:00:00.00Z");

jest.mock("@src/libs/mails");
jest.mock("@src/libs/mailConstructor");

describe("[Module] mail", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const email = "monEmail";
  const date = moment().add(3, "days");
  it("should call sendMal", async () => {
    const resolvedValue = await computeDueDateAndSendMail(email);
    expect(resolvedValue).toEqual(fakeData);
    expect(sendMail()).toHaveBeenCalledWith(email, date, constructMail);
  });
  it("should throw error when sendMAil throws", async () => {
    (sendMail() as jest.Mock).mockRejectedValueOnce(new Error("ERROR"));
    try {
      await computeDueDateAndSendMail(email);
    } catch (error) {
      expect(error.message).toEqual("ERROR");
    }
    expect(sendMail()).toHaveBeenCalledWith(email, date, constructMail);
    expect.assertions(2);
  });
});
