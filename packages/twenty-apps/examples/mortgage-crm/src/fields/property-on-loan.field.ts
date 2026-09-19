import { LOAN_UNIVERSAL_IDENTIFIER } from 'src/objects/loan.object';
import { PROPERTY_UNIVERSAL_IDENTIFIER } from 'src/objects/property.object';
import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk/define';

export const PROPERTY_ON_LOAN_ID = '9a4c1e10-0005-4a10-9d10-000000000007';
export const LOANS_ON_PROPERTY_ID = '9a4c1e10-0005-4a10-9d10-000000000008';

export default defineField({
  universalIdentifier: PROPERTY_ON_LOAN_ID,
  objectUniversalIdentifier: LOAN_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'property',
  label: 'Property',
  icon: 'IconHome',
  isNullable: true,
  relationTargetObjectMetadataUniversalIdentifier: PROPERTY_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: LOANS_ON_PROPERTY_ID,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'propertyId',
  },
});
