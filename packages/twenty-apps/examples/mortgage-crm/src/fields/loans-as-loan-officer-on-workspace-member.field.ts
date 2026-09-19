import {
    LOAN_OFFICER_ON_LOAN_ID,
    LOANS_AS_LOAN_OFFICER_ON_WORKSPACE_MEMBER_ID,
} from 'src/fields/loan-officer-on-loan.field';
import { LOAN_UNIVERSAL_IDENTIFIER } from 'src/objects/loan.object';
import { defineField, FieldType, RelationType, STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS } from 'twenty-sdk/define';

export default defineField({
  universalIdentifier: LOANS_AS_LOAN_OFFICER_ON_WORKSPACE_MEMBER_ID,
  objectUniversalIdentifier:
    STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.workspaceMember.universalIdentifier,
  type: FieldType.RELATION,
  name: 'loansAsLoanOfficer',
  label: 'Loans (Loan Officer)',
  icon: 'IconTargetArrow',
  relationTargetObjectMetadataUniversalIdentifier: LOAN_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: LOAN_OFFICER_ON_LOAN_ID,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
