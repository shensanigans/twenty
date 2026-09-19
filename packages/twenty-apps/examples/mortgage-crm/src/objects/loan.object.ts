import { defineObject, FieldType } from 'twenty-sdk/define';

export const LOAN_UNIVERSAL_IDENTIFIER = '9a4c1e10-0004-4a10-9d10-000000000010';

export const LOAN_NAME_FIELD_ID = '9a4c1e10-0004-4a10-9d10-000000000011';
export const LOAN_NUMBER_FIELD_ID = '9a4c1e10-0004-4a10-9d10-000000000012';
export const LOAN_TYPE_FIELD_ID = '9a4c1e10-0004-4a10-9d10-000000000013';
export const LOAN_AMOUNT_FIELD_ID = '9a4c1e10-0004-4a10-9d10-000000000014';
export const LOAN_PURCHASE_PRICE_FIELD_ID =
  '9a4c1e10-0004-4a10-9d10-000000000015';
export const LOAN_INTEREST_RATE_FIELD_ID =
  '9a4c1e10-0004-4a10-9d10-000000000016';
export const LOAN_CLOSING_DATE_FIELD_ID =
  '9a4c1e10-0004-4a10-9d10-000000000017';
export const LOAN_STAGE_FIELD_ID = '9a4c1e10-0004-4a10-9d10-000000000018';

// Pipeline stage option ids, referenced by the kanban view group config.
export const LOAN_STAGE_OPTION_IDS = {
  NEW_LEAD: '9a4c1e10-0004-4a10-9d10-000000000021',
  CONTACTED: '9a4c1e10-0004-4a10-9d10-000000000022',
  APPLICATION: '9a4c1e10-0004-4a10-9d10-000000000023',
  PRE_APPROVED: '9a4c1e10-0004-4a10-9d10-000000000024',
  PROCESSING: '9a4c1e10-0004-4a10-9d10-000000000025',
  UNDERWRITING: '9a4c1e10-0004-4a10-9d10-000000000026',
  CLEAR_TO_CLOSE: '9a4c1e10-0004-4a10-9d10-000000000027',
  CLOSED_FUNDED: '9a4c1e10-0004-4a10-9d10-000000000028',
  LOST: '9a4c1e10-0004-4a10-9d10-000000000029',
} as const;

export default defineObject({
  universalIdentifier: LOAN_UNIVERSAL_IDENTIFIER,
  nameSingular: 'loan',
  namePlural: 'loans',
  labelSingular: 'Loan',
  labelPlural: 'Loans',
  description: 'A mortgage loan opportunity moving through origination',
  icon: 'IconTargetArrow',
  labelIdentifierFieldMetadataUniversalIdentifier: LOAN_NAME_FIELD_ID,
  fields: [
    {
      universalIdentifier: LOAN_NAME_FIELD_ID,
      type: FieldType.TEXT,
      name: 'name',
      label: 'Name',
      description: 'e.g. "123 Main St - Smith Refi"',
      icon: 'IconAbc',
    },
    {
      universalIdentifier: LOAN_NUMBER_FIELD_ID,
      type: FieldType.TEXT,
      name: 'loanNumber',
      label: 'Loan Number',
      icon: 'IconHash',
      isNullable: true,
    },
    {
      universalIdentifier: LOAN_TYPE_FIELD_ID,
      type: FieldType.SELECT,
      name: 'loanType',
      label: 'Loan Type',
      icon: 'IconFileDollar',
      defaultValue: "'CONVENTIONAL'",
      options: [
        { id: '9a4c1e10-0004-4a10-9d10-000000000031', value: 'CONVENTIONAL', label: 'Conventional', position: 0, color: 'blue' },
        { id: '9a4c1e10-0004-4a10-9d10-000000000032', value: 'FHA', label: 'FHA', position: 1, color: 'green' },
        { id: '9a4c1e10-0004-4a10-9d10-000000000033', value: 'VA', label: 'VA', position: 2, color: 'purple' },
        { id: '9a4c1e10-0004-4a10-9d10-000000000034', value: 'USDA', label: 'USDA', position: 3, color: 'yellow' },
        { id: '9a4c1e10-0004-4a10-9d10-000000000035', value: 'JUMBO', label: 'Jumbo', position: 4, color: 'orange' },
        { id: '9a4c1e10-0004-4a10-9d10-000000000036', value: 'HELOC', label: 'HELOC', position: 5, color: 'pink' },
      ],
    },
    {
      universalIdentifier: LOAN_AMOUNT_FIELD_ID,
      type: FieldType.CURRENCY,
      name: 'loanAmount',
      label: 'Loan Amount',
      icon: 'IconCurrencyDollar',
      isNullable: true,
    },
    {
      universalIdentifier: LOAN_PURCHASE_PRICE_FIELD_ID,
      type: FieldType.CURRENCY,
      name: 'purchasePrice',
      label: 'Purchase Price',
      icon: 'IconCurrencyDollar',
      isNullable: true,
    },
    {
      universalIdentifier: LOAN_INTEREST_RATE_FIELD_ID,
      type: FieldType.NUMBER,
      name: 'interestRate',
      label: 'Interest Rate',
      icon: 'IconPercentage',
      isNullable: true,
      settings: { type: 'percentage', decimals: 3 },
    },
    {
      universalIdentifier: LOAN_CLOSING_DATE_FIELD_ID,
      type: FieldType.DATE,
      name: 'closingDate',
      label: 'Closing Date',
      icon: 'IconCalendarEvent',
      isNullable: true,
    },
    {
      universalIdentifier: LOAN_STAGE_FIELD_ID,
      type: FieldType.SELECT,
      name: 'stage',
      label: 'Stage',
      icon: 'IconProgressCheck',
      defaultValue: "'NEW_LEAD'",
      options: [
        { id: LOAN_STAGE_OPTION_IDS.NEW_LEAD, value: 'NEW_LEAD', label: 'New Lead', position: 0, color: 'gray' },
        { id: LOAN_STAGE_OPTION_IDS.CONTACTED, value: 'CONTACTED', label: 'Contacted', position: 1, color: 'blue' },
        { id: LOAN_STAGE_OPTION_IDS.APPLICATION, value: 'APPLICATION', label: 'Application', position: 2, color: 'sky' },
        { id: LOAN_STAGE_OPTION_IDS.PRE_APPROVED, value: 'PRE_APPROVED', label: 'Pre-Approved', position: 3, color: 'turquoise' },
        { id: LOAN_STAGE_OPTION_IDS.PROCESSING, value: 'PROCESSING', label: 'Processing', position: 4, color: 'yellow' },
        { id: LOAN_STAGE_OPTION_IDS.UNDERWRITING, value: 'UNDERWRITING', label: 'Underwriting', position: 5, color: 'orange' },
        { id: LOAN_STAGE_OPTION_IDS.CLEAR_TO_CLOSE, value: 'CLEAR_TO_CLOSE', label: 'Clear to Close', position: 6, color: 'purple' },
        { id: LOAN_STAGE_OPTION_IDS.CLOSED_FUNDED, value: 'CLOSED_FUNDED', label: 'Closed / Funded', position: 7, color: 'green' },
        { id: LOAN_STAGE_OPTION_IDS.LOST, value: 'LOST', label: 'Lost', position: 8, color: 'red' },
      ],
    },
  ],
});
