import { LOANS_ON_PROPERTY_ID, PROPERTY_ON_LOAN_ID } from 'src/fields/property-on-loan.field';
import { LOAN_UNIVERSAL_IDENTIFIER } from 'src/objects/loan.object';
import { PROPERTY_UNIVERSAL_IDENTIFIER } from 'src/objects/property.object';
import { defineField, FieldType, RelationType } from 'twenty-sdk/define';

export default defineField({
  universalIdentifier: LOANS_ON_PROPERTY_ID,
  objectUniversalIdentifier: PROPERTY_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'loans',
  label: 'Loans',
  icon: 'IconTargetArrow',
  relationTargetObjectMetadataUniversalIdentifier: LOAN_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: PROPERTY_ON_LOAN_ID,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
