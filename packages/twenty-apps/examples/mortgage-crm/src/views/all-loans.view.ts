import { BORROWER_ON_LOAN_ID } from 'src/fields/borrower-on-loan.field';
import { PROPERTY_ON_LOAN_ID } from 'src/fields/property-on-loan.field';
import {
    LOAN_AMOUNT_FIELD_ID,
    LOAN_CLOSING_DATE_FIELD_ID,
    LOAN_NAME_FIELD_ID,
    LOAN_NUMBER_FIELD_ID,
    LOAN_STAGE_FIELD_ID,
    LOAN_TYPE_FIELD_ID,
    LOAN_UNIVERSAL_IDENTIFIER,
} from 'src/objects/loan.object';
import { defineView, ViewType } from 'twenty-sdk/define';

export const ALL_LOANS_VIEW_ID = '9a4c1e10-0006-4a10-9d10-000000000002';

export default defineView({
  universalIdentifier: ALL_LOANS_VIEW_ID,
  name: 'All Loans',
  objectUniversalIdentifier: LOAN_UNIVERSAL_IDENTIFIER,
  type: ViewType.TABLE,
  icon: 'IconTable',
  position: 1,
  fields: [
    { universalIdentifier: '9a4c1e10-0006-4a10-9d10-000000000031', fieldMetadataUniversalIdentifier: LOAN_NAME_FIELD_ID, position: 0, isVisible: true, size: 200 },
    { universalIdentifier: '9a4c1e10-0006-4a10-9d10-000000000032', fieldMetadataUniversalIdentifier: LOAN_NUMBER_FIELD_ID, position: 1, isVisible: true, size: 150 },
    { universalIdentifier: '9a4c1e10-0006-4a10-9d10-000000000033', fieldMetadataUniversalIdentifier: BORROWER_ON_LOAN_ID, position: 2, isVisible: true, size: 200 },
    { universalIdentifier: '9a4c1e10-0006-4a10-9d10-000000000034', fieldMetadataUniversalIdentifier: LOAN_TYPE_FIELD_ID, position: 3, isVisible: true, size: 150 },
    { universalIdentifier: '9a4c1e10-0006-4a10-9d10-000000000035', fieldMetadataUniversalIdentifier: LOAN_AMOUNT_FIELD_ID, position: 4, isVisible: true, size: 150 },
    { universalIdentifier: '9a4c1e10-0006-4a10-9d10-000000000036', fieldMetadataUniversalIdentifier: LOAN_STAGE_FIELD_ID, position: 5, isVisible: true, size: 150 },
    { universalIdentifier: '9a4c1e10-0006-4a10-9d10-000000000037', fieldMetadataUniversalIdentifier: PROPERTY_ON_LOAN_ID, position: 6, isVisible: true, size: 200 },
    { universalIdentifier: '9a4c1e10-0006-4a10-9d10-000000000038', fieldMetadataUniversalIdentifier: LOAN_CLOSING_DATE_FIELD_ID, position: 7, isVisible: true, size: 150 },
  ],
});
