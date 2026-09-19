import { REFERRAL_PARTNER_UNIVERSAL_IDENTIFIER } from 'src/objects/referral-partner.object';
import { defineField, FieldType, OnDeleteAction, RelationType, STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS } from 'twenty-sdk/define';

export const COMPANY_ON_REFERRAL_PARTNER_ID = '9a4c1e10-0005-4a10-9d10-00000000000b';
export const REFERRAL_PARTNERS_ON_COMPANY_ID = '9a4c1e10-0005-4a10-9d10-00000000000c';

// Lets a referral partner (e.g. a realtor) be linked to an existing brokerage Company record.
export default defineField({
  universalIdentifier: COMPANY_ON_REFERRAL_PARTNER_ID,
  objectUniversalIdentifier: REFERRAL_PARTNER_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'company',
  label: 'Company',
  icon: 'IconBuildingSkyscraper',
  isNullable: true,
  relationTargetObjectMetadataUniversalIdentifier:
    STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.company.universalIdentifier,
  relationTargetFieldMetadataUniversalIdentifier:
    REFERRAL_PARTNERS_ON_COMPANY_ID,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'companyId',
  },
});
