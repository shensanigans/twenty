import {
    REFERRAL_PARTNER_COMPANY_NAME_FIELD_ID,
    REFERRAL_PARTNER_EMAIL_FIELD_ID,
    REFERRAL_PARTNER_NAME_FIELD_ID,
    REFERRAL_PARTNER_TYPE_FIELD_ID,
    REFERRAL_PARTNER_UNIVERSAL_IDENTIFIER,
} from 'src/objects/referral-partner.object';
import { defineView, ViewType } from 'twenty-sdk/define';

export const ALL_REFERRAL_PARTNERS_VIEW_ID =
  '9a4c1e10-0006-4a10-9d10-000000000004';

export default defineView({
  universalIdentifier: ALL_REFERRAL_PARTNERS_VIEW_ID,
  name: 'All Referral Partners',
  objectUniversalIdentifier: REFERRAL_PARTNER_UNIVERSAL_IDENTIFIER,
  type: ViewType.TABLE,
  icon: 'IconTable',
  position: 0,
  fields: [
    { universalIdentifier: '9a4c1e10-0006-4a10-9d10-000000000051', fieldMetadataUniversalIdentifier: REFERRAL_PARTNER_NAME_FIELD_ID, position: 0, isVisible: true, size: 200 },
    { universalIdentifier: '9a4c1e10-0006-4a10-9d10-000000000052', fieldMetadataUniversalIdentifier: REFERRAL_PARTNER_TYPE_FIELD_ID, position: 1, isVisible: true, size: 150 },
    { universalIdentifier: '9a4c1e10-0006-4a10-9d10-000000000053', fieldMetadataUniversalIdentifier: REFERRAL_PARTNER_COMPANY_NAME_FIELD_ID, position: 2, isVisible: true, size: 200 },
    { universalIdentifier: '9a4c1e10-0006-4a10-9d10-000000000054', fieldMetadataUniversalIdentifier: REFERRAL_PARTNER_EMAIL_FIELD_ID, position: 3, isVisible: true, size: 200 },
  ],
});
