import * as mockdate from "mockdate";
import * as moment from "moment";
import { Mailer } from "@src/examples/toTest";
import { sendMail } from "@src/libs/mails";
import { fakeData } from "@src/fixtures/email";
import { constructMail } from "@src/libs/mailConstructor";
import { attachProps } from "@src/libs/attachProps";

mockdate.set("2019-11-10T10:00:00.00Z");

jest.mock("@src/libs/mails");
jest.mock("@src/libs/mailConstructor");
jest.mock("@src/libs/attachProps");

describe("[Module] mail", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const email = "monEmail";
  const date = moment().add(3, "days");
  let computeDueDateAndSendMail: any;

  (attachProps as jest.Mock).mockImplementation(func => {
    computeDueDateAndSendMail = func;
  });

  const mailer = new Mailer();

  it("should call sendMal with initial value", async () => {
    computeDueDateAndSendMail();
    expect(sendMail()).toHaveBeenCalledWith(
      "initEmail",
      date,
      expect.any(Function)
    );
    expect(constructMail).toHaveBeenCalledWith();
  });
  it("should call sendMal with new value", async () => {
    mailer.email = email;
    const resolvedValue = await computeDueDateAndSendMail();
    expect(resolvedValue).toEqual(fakeData);
    expect(sendMail()).toHaveBeenCalledWith(email, date, expect.any(Function));
    expect(constructMail).toHaveBeenCalledWith();
  });
  it("should throw error when sendMAil throws", async () => {
    (sendMail() as jest.Mock).mockRejectedValueOnce(new Error("ERROR"));
    try {
      await computeDueDateAndSendMail();
    } catch (error) {
      expect(error.message).toEqual("ERROR");
    }
    expect(sendMail()).toHaveBeenCalledWith(email, date, expect.any(Function));
    expect(constructMail).not.toHaveBeenCalled();
    expect.assertions(3);
  });
});
