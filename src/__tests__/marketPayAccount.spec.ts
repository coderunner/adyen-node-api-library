import { createMockClientFromResponse } from "../__mocks__/base";
import nock from "nock";
import { Client } from "..";
import MarketPayAccount from "../services/marketPayAccount";
import { createAccountHolderSuccess } from "../__mocks__/marketPayAccount/createAccountHolderSuccess";
import HttpClientException from "../httpClient/httpClientException";

export function createCreateAccountHolderRequest(): IMarketPayAccount.CreateAccountHolderRequest {
  return {
    accountHolderCode: "demo",
    accountHolderDetails: {
      email: "tim@green.com",
      individualDetails: {
        name: {
          firstName: "Tim",
          gender: "MALE",
          lastName: "Green"
        }
      },
      address: {
        country: "US"
      },
      webAddress: "http://localhost.com",
      fullPhoneNumber: "555 555-5555"
    },
    legalEntity: "Individual"
  };
}

let client: Client;
let marketPayAccount: MarketPayAccount;
let scope: nock.Scope;

beforeEach((): void => {
  client = createMockClientFromResponse();
  scope = nock(
    `${client.config.marketPayEndpoint}/Account/${Client.MARKETPAY_ACCOUNT_API_VERSION}`
  );
  marketPayAccount = new MarketPayAccount(client);
});

describe("MarketPayAccount", (): void => {
  it("should create an account holder", async (): Promise<void> => {
    scope.post("/createAccountHolder").reply(200, createAccountHolderSuccess);

    const createAccountHolderRequest: IMarketPayAccount.CreateAccountHolderRequest = createCreateAccountHolderRequest();
    const createAccountHolderResponse: IMarketPayAccount.CreateAccountHolderResponse = await marketPayAccount.createAccountHolder(
      createAccountHolderRequest
    );
    expect(createAccountHolderResponse.pspReference).toEqual(
      "8815805005336012"
    );
  });

  it("should return correct Exception", async (): Promise<void> => {
    try {
      scope.post("/createAccountHolder").reply(401);

      const createAccountHolderRequest: IMarketPayAccount.CreateAccountHolderRequest = createCreateAccountHolderRequest();
      await marketPayAccount.createAccountHolder(createAccountHolderRequest);
    } catch (e) {
      expect(e instanceof HttpClientException).toBeTruthy();
    }
  });
});
