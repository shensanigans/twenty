import { LOAN_UNIVERSAL_IDENTIFIER } from 'src/objects/loan.object';
import { REFERRAL_PARTNER_UNIVERSAL_IDENTIFIER } from 'src/objects/referral-partner.object';
import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk/define';

export const REFERRAL_PARTNER_ON_LOAN_ID = '9a4c1e10-0005-4a10-9d10-000000000009';
export const LOANS_ON_REFERRAL_PARTNER_ID = '9a4c1e10-0005-4a10-9d10-00000000000a';

export default defineField({
  universalIdentifier: REFERRAL_PARTNER_ON_LOAN_ID,
  objectUniversalIdentifier: LOAN_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'referralPartner',
  label: 'Referral Partner',
  icon: 'IconUserStar',
  isNullable: true,
  relationTargetObjectMetadataUniversalIdentifier:
    REFERRAL_PARTNER_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: LOANS_ON_REFERRAL_PARTNER_ID,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'referralPartnerId',
  },
});
