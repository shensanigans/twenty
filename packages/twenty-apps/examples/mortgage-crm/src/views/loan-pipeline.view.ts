import { BORROWER_ON_LOAN_ID } from 'src/fields/borrower-on-loan.field';
import { LOAN_OFFICER_ON_LOAN_ID } from 'src/fields/loan-officer-on-loan.field';
import {
    LOAN_AMOUNT_FIELD_ID,
    LOAN_CLOSING_DATE_FIELD_ID,
    LOAN_NAME_FIELD_ID,
    LOAN_STAGE_FIELD_ID,
    LOAN_STAGE_OPTION_IDS,
    LOAN_TYPE_FIELD_ID,
    LOAN_UNIVERSAL_IDENTIFIER,
} from 'src/objects/loan.object';
import { defineView, ViewType } from 'twenty-sdk/define';

export const LOAN_PIPELINE_VIEW_ID = '9a4c1e10-0006-4a10-9d10-000000000001';

export default defineView({
  universalIdentifier: LOAN_PIPELINE_VIEW_ID,
  name: 'Loan Pipeline',
  objectUniversalIdentifier: LOAN_UNIVERSAL_IDENTIFIER,
  type: ViewType.KANBAN,
  icon: 'IconLayoutKanban',
  position: 0,
  mainGroupByFieldMetadataUniversalIdentifier: LOAN_STAGE_FIELD_ID,
  fields: [
    { universalIdentifier: '9a4c1e10-0006-4a10-9d10-000000000011', fieldMetadataUniversalIdentifier: LOAN_NAME_FIELD_ID, position: 0, isVisible: true, size: 200 },
    { universalIdentifier: '9a4c1e10-0006-4a10-9d10-000000000012', fieldMetadataUniversalIdentifier: BORROWER_ON_LOAN_ID, position: 1, isVisible: true, size: 200 },
    { universalIdentifier: '9a4c1e10-0006-4a10-9d10-000000000013', fieldMetadataUniversalIdentifier: LOAN_TYPE_FIELD_ID, position: 2, isVisible: true, size: 150 },
    { universalIdentifier: '9a4c1e10-0006-4a10-9d10-000000000014', fieldMetadataUniversalIdentifier: LOAN_AMOUNT_FIELD_ID, position: 3, isVisible: true, size: 150 },
    { universalIdentifier: '9a4c1e10-0006-4a10-9d10-000000000015', fieldMetadataUniversalIdentifier: LOAN_OFFICER_ON_LOAN_ID, position: 4, isVisible: true, size: 200 },
    { universalIdentifier: '9a4c1e10-0006-4a10-9d10-000000000016', fieldMetadataUniversalIdentifier: LOAN_CLOSING_DATE_FIELD_ID, position: 5, isVisible: true, size: 150 },
  ],
  groups: [
    { universalIdentifier: '9a4c1e10-0006-4a10-9d10-000000000021', fieldValue: LOAN_STAGE_OPTION_IDS.NEW_LEAD, position: 0, isVisible: true },
    { universalIdentifier: '9a4c1e10-0006-4a10-9d10-000000000022', fieldValue: LOAN_STAGE_OPTION_IDS.CONTACTED, position: 1, isVisible: true },
    { universalIdentifier: '9a4c1e10-0006-4a10-9d10-000000000023', fieldValue: LOAN_STAGE_OPTION_IDS.APPLICATION, position: 2, isVisible: true },
    { universalIdentifier: '9a4c1e10-0006-4a10-9d10-000000000024', fieldValue: LOAN_STAGE_OPTION_IDS.PRE_APPROVED, position: 3, isVisible: true },
    { universalIdentifier: '9a4c1e10-0006-4a10-9d10-000000000025', fieldValue: LOAN_STAGE_OPTION_IDS.PROCESSING, position: 4, isVisible: true },
    { universalIdentifier: '9a4c1e10-0006-4a10-9d10-000000000026', fieldValue: LOAN_STAGE_OPTION_IDS.UNDERWRITING, position: 5, isVisible: true },
    { universalIdentifier: '9a4c1e10-0006-4a10-9d10-000000000027', fieldValue: LOAN_STAGE_OPTION_IDS.CLEAR_TO_CLOSE, position: 6, isVisible: true },
    { universalIdentifier: '9a4c1e10-0006-4a10-9d10-000000000028', fieldValue: LOAN_STAGE_OPTION_IDS.CLOSED_FUNDED, position: 7, isVisible: true },
    { universalIdentifier: '9a4c1e10-0006-4a10-9d10-000000000029', fieldValue: LOAN_STAGE_OPTION_IDS.LOST, position: 8, isVisible: true },
  ],
});
