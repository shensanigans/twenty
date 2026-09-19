import {
    COMPANY_ON_REFERRAL_PARTNER_ID,
    REFERRAL_PARTNERS_ON_COMPANY_ID,
} from 'src/fields/company-on-referral-partner.field';
import { REFERRAL_PARTNER_UNIVERSAL_IDENTIFIER } from 'src/objects/referral-partner.object';
import { defineField, FieldType, RelationType, STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS } from 'twenty-sdk/define';

export default defineField({
  universalIdentifier: REFERRAL_PARTNERS_ON_COMPANY_ID,
  objectUniversalIdentifier:
    STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.company.universalIdentifier,
  type: FieldType.RELATION,
  name: 'referralPartners',
  label: 'Referral Partners',
  icon: 'IconUserStar',
  relationTargetObjectMetadataUniversalIdentifier:
    REFERRAL_PARTNER_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier:
    COMPANY_ON_REFERRAL_PARTNER_ID,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
