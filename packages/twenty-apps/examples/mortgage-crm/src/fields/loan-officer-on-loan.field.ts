import { LOAN_UNIVERSAL_IDENTIFIER } from 'src/objects/loan.object';
import {
    defineField,
    FieldType,
    OnDeleteAction,
    RelationType,
    STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS,
} from 'twenty-sdk/define';

export const LOAN_OFFICER_ON_LOAN_ID = '9a4c1e10-0005-4a10-9d10-000000000005';
export const LOANS_AS_LOAN_OFFICER_ON_WORKSPACE_MEMBER_ID =
  '9a4c1e10-0005-4a10-9d10-000000000006';

// Reuse workspace members (existing users) as loan officers instead of a new object.
export default defineField({
  universalIdentifier: LOAN_OFFICER_ON_LOAN_ID,
  objectUniversalIdentifier: LOAN_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'loanOfficer',
  label: 'Loan Officer',
  icon: 'IconUserCircle',
  isNullable: true,
  relationTargetObjectMetadataUniversalIdentifier:
    STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.workspaceMember.universalIdentifier,
  relationTargetFieldMetadataUniversalIdentifier:
    LOANS_AS_LOAN_OFFICER_ON_WORKSPACE_MEMBER_ID,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'loanOfficerId',
  },
});
