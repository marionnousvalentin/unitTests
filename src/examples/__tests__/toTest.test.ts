import * as mockdate from "mockdate";
import * as moment from "moment";
import { computeDueDateAndSendMail } from "@src/examples/toTest";
import { sendMail } from "@src/libs/mails";

mockdate.set("2019-11-10T10:00:00.00Z");

jest.mock("@src/libs/mails");

describe("[Module] mail", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const email = "monEmail";
  const date = moment().add(3, "days");
  it("should call sendMal", async () => {
    const resolvedValue = await computeDueDateAndSendMail(email);
    expect(resolvedValue).toEqual({
      email: "toto",
      name: "name",
      firstName: "firstName"
    });
    expect(sendMail).toHaveBeenCalledWith(email, date);
  });
  it("should throw error when sendMAil throws", async () => {
    (sendMail as jest.Mock).mockRejectedValueOnce(new Error("ERROR"));
    try {
      await computeDueDateAndSendMail(email);
    } catch (error) {
      expect(error.message).toEqual("ERROR");
    }
    expect(sendMail).toHaveBeenCalledWith(email, date);
    expect.assertions(2);
  });
});
