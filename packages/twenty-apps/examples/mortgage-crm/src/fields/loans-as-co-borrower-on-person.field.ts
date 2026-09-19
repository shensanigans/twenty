import {
    CO_BORROWER_ON_LOAN_ID,
    LOANS_AS_CO_BORROWER_ON_PERSON_ID,
} from 'src/fields/co-borrower-on-loan.field';
import { LOAN_UNIVERSAL_IDENTIFIER } from 'src/objects/loan.object';
import { defineField, FieldType, RelationType, STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS } from 'twenty-sdk/define';

export default defineField({
  universalIdentifier: LOANS_AS_CO_BORROWER_ON_PERSON_ID,
  objectUniversalIdentifier:
    STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.person.universalIdentifier,
  type: FieldType.RELATION,
  name: 'loansAsCoBorrower',
  label: 'Loans (Co-Borrower)',
  icon: 'IconTargetArrow',
  relationTargetObjectMetadataUniversalIdentifier: LOAN_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: CO_BORROWER_ON_LOAN_ID,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
