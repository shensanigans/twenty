import {
    BORROWER_ON_LOAN_ID,
    LOANS_AS_BORROWER_ON_PERSON_ID,
} from 'src/fields/borrower-on-loan.field';
import { LOAN_UNIVERSAL_IDENTIFIER } from 'src/objects/loan.object';
import { defineField, FieldType, RelationType, STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS } from 'twenty-sdk/define';

export default defineField({
  universalIdentifier: LOANS_AS_BORROWER_ON_PERSON_ID,
  objectUniversalIdentifier:
    STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.person.universalIdentifier,
  type: FieldType.RELATION,
  name: 'loansAsBorrower',
  label: 'Loans (Borrower)',
  icon: 'IconTargetArrow',
  relationTargetObjectMetadataUniversalIdentifier: LOAN_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: BORROWER_ON_LOAN_ID,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
