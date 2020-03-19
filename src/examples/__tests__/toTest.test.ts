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
    await computeDueDateAndSendMail(email);
    expect(sendMail).toHaveBeenCalledWith(email, date);
  });
});
