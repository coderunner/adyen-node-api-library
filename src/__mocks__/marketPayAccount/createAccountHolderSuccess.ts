export const createAccountHolderSuccess = JSON.stringify({
  invalidFields: [],
  pspReference: "8815805005336012",
  accountCode: "8815805005336020",
  accountHolderCode: "demo",
  accountHolderDetails: {
    address: {
      country: "US"
    },
    bankAccountDetails: [],
    email: "tim@green.com",
    individualDetails: {
      name: {
        firstName: "Tim",
        gender: "MALE",
        lastName: "Green"
      }
    },
    merchantCategoryCode: "7111",
    payoutMethods: [],
    webAddress: null
  },
  accountHolderStatus: {
    status: "Active",
    processingState: {
      disabled: false,
      processedFrom: {
        currency: "USD",
        value: 0
      },
      processedTo: {
        currency: "USD",
        value: 0
      },
      tierNumber: 0
    },
    payoutState: {
      allowPayout: true,
      payoutLimit: {
        currency: "USD",
        value: 0
      },
      disabled: false,
      tierNumber: 0
    },
    events: []
  },
  legalEntity: "Individual",
  verification: {}
});
