/*
 *                       ######
 *                       ######
 * ############    ####( ######  #####. ######  ############   ############
 * #############  #####( ######  #####. ######  #############  #############
 *        ######  #####( ######  #####. ######  #####  ######  #####  ######
 * ###### ######  #####( ######  #####. ######  #####  #####   #####  ######
 * ###### ######  #####( ######  #####. ######  #####          #####  ######
 * #############  #############  #############  #############  #####  ######
 *  ############   ############  #############   ############  #####  ######
 *                                      ######
 *                               #############
 *                               ############
 *
 * Adyen NodeJS API Library
 *
 * Copyright (c) 2019 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */
import Client from "../client";
import Service from "../service";
import CreateAccountHolder from "./resource/marketPayAccount/createAccountHolder";
import getJsonResponse from "../helpers/getJsonResponse";
import GetAccountHolder from "./resource/marketPayAccount/getAccountHolder";

class MarketPayAccount extends Service {
  private readonly _getAccountHolder: GetAccountHolder;
  private readonly _createAccountHolder: CreateAccountHolder;

  public constructor(client: Client) {
    super(client);

    this._getAccountHolder = new GetAccountHolder(this);
    this._createAccountHolder = new CreateAccountHolder(this);
  }

  public getAccountHolder(
    request: IMarketPayAccount.GetAccountHolderRequest
  ): Promise<IMarketPayAccount.GetAccountHolderResponse> {
    return getJsonResponse<
      IMarketPayAccount.GetAccountHolderRequest,
      IMarketPayAccount.GetAccountHolderResponse
    >(this._getAccountHolder, request).then(r => {
      return r;
    });
  }

  public createAccountHolder(
    request: IMarketPayAccount.CreateAccountHolderRequest
  ): Promise<IMarketPayAccount.CreateAccountHolderResponse> {
    return getJsonResponse<
      IMarketPayAccount.CreateAccountHolderRequest,
      IMarketPayAccount.CreateAccountHolderResponse
    >(this._createAccountHolder, request).then(r => {
      return r;
    });
  }
}

export default MarketPayAccount;
