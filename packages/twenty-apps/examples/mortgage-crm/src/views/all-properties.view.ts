import {
    PROPERTY_ADDRESS_FIELD_ID,
    PROPERTY_NAME_FIELD_ID,
    PROPERTY_PURCHASE_PRICE_FIELD_ID,
    PROPERTY_TYPE_FIELD_ID,
    PROPERTY_UNIVERSAL_IDENTIFIER,
} from 'src/objects/property.object';
import { defineView, ViewType } from 'twenty-sdk/define';

export const ALL_PROPERTIES_VIEW_ID = '9a4c1e10-0006-4a10-9d10-000000000003';

export default defineView({
  universalIdentifier: ALL_PROPERTIES_VIEW_ID,
  name: 'All Properties',
  objectUniversalIdentifier: PROPERTY_UNIVERSAL_IDENTIFIER,
  type: ViewType.TABLE,
  icon: 'IconTable',
  position: 0,
  fields: [
    { universalIdentifier: '9a4c1e10-0006-4a10-9d10-000000000041', fieldMetadataUniversalIdentifier: PROPERTY_NAME_FIELD_ID, position: 0, isVisible: true, size: 200 },
    { universalIdentifier: '9a4c1e10-0006-4a10-9d10-000000000042', fieldMetadataUniversalIdentifier: PROPERTY_ADDRESS_FIELD_ID, position: 1, isVisible: true, size: 300 },
    { universalIdentifier: '9a4c1e10-0006-4a10-9d10-000000000043', fieldMetadataUniversalIdentifier: PROPERTY_TYPE_FIELD_ID, position: 2, isVisible: true, size: 150 },
    { universalIdentifier: '9a4c1e10-0006-4a10-9d10-000000000044', fieldMetadataUniversalIdentifier: PROPERTY_PURCHASE_PRICE_FIELD_ID, position: 3, isVisible: true, size: 150 },
  ],
});
