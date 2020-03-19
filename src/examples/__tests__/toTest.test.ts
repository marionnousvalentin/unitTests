import * as mockdate from "mockdate";
import * as moment from "moment";
import { computeDueDateAndSendMail } from "../toTest";
import { sendMail } from "../../libs/mails";

mockdate.set("2019-11-10T10:00:00.00Z");

jest.mock("../../libs/mails");

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