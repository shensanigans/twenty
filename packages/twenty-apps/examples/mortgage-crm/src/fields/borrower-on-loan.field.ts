import { LOAN_UNIVERSAL_IDENTIFIER } from 'src/objects/loan.object';
import {
    defineField,
    FieldType,
    OnDeleteAction,
    RelationType,
    STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS,
} from 'twenty-sdk/define';

export const BORROWER_ON_LOAN_ID = '9a4c1e10-0005-4a10-9d10-000000000001';
export const LOANS_AS_BORROWER_ON_PERSON_ID =
  '9a4c1e10-0005-4a10-9d10-000000000002';

export default defineField({
  universalIdentifier: BORROWER_ON_LOAN_ID,
  objectUniversalIdentifier: LOAN_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'borrower',
  label: 'Borrower',
  icon: 'IconUser',
  relationTargetObjectMetadataUniversalIdentifier:
    STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.person.universalIdentifier,
  relationTargetFieldMetadataUniversalIdentifier:
    LOANS_AS_BORROWER_ON_PERSON_ID,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'borrowerId',
  },
});
