import {
    LOANS_ON_REFERRAL_PARTNER_ID,
    REFERRAL_PARTNER_ON_LOAN_ID,
} from 'src/fields/referral-partner-on-loan.field';
import { LOAN_UNIVERSAL_IDENTIFIER } from 'src/objects/loan.object';
import { REFERRAL_PARTNER_UNIVERSAL_IDENTIFIER } from 'src/objects/referral-partner.object';
import { defineField, FieldType, RelationType } from 'twenty-sdk/define';

export default defineField({
  universalIdentifier: LOANS_ON_REFERRAL_PARTNER_ID,
  objectUniversalIdentifier: REFERRAL_PARTNER_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'loans',
  label: 'Loans',
  icon: 'IconTargetArrow',
  relationTargetObjectMetadataUniversalIdentifier: LOAN_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: REFERRAL_PARTNER_ON_LOAN_ID,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
