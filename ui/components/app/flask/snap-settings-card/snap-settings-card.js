import React from 'react';
import PropTypes from 'prop-types';

import Box from '../../../ui/box';

import {
  Color,
  AlignItems,
  JustifyContent,
  DISPLAY,
  Size,
  BLOCK_SIZES,
} from '../../../../helpers/constants/design-system';
import { Icon, ICON_NAMES, ICON_SIZES, Text } from '../../../component-library';
import SnapAvatar from '../snap-avatar';

const SnapSettingsCard = ({ name, url, onClick, snapId }) => {
  return (
    <Box
      className="snap-settings-card"
      display={DISPLAY.FLEX}
      alignItems={AlignItems.center}
      justifyContent={JustifyContent.spaceBetween}
      width={BLOCK_SIZES.FULL}
      onClick={onClick}
      padding={[4, 4, 4, 4]}
    >
      <Box
        display={DISPLAY.FLEX}
        alignItems={AlignItems.center}
        justifyContent={JustifyContent.flexStart}
        width={BLOCK_SIZES.FULL}
      >
        <Box>
          <SnapAvatar snapId={snapId} />
        </Box>
        <Box paddingLeft={4} paddingRight={4} width={BLOCK_SIZES.FULL}>
          <Text className="snap-settings-card__title" size={Size.MD}>
            {name}
          </Text>
          <Text
            className="snap-settings-card__url"
            color={Color.textMuted}
            size={Size.XXS}
          >
            {url}
          </Text>
        </Box>
      </Box>
      <Box className="snap-settings-card__caret">
        <Icon
          name={ICON_NAMES.ARROW_RIGHT}
          size={ICON_SIZES.LG}
          color={Color.textMuted}
        />
      </Box>
    </Box>
  );
};

SnapSettingsCard.propTypes = {
  /**
   * Name of the snap used for the title of the card and fallback letter for the snap icon
   */
  name: PropTypes.string,
  /**
   * Url of the snap website
   */
  url: PropTypes.string,
  /**
   * onClick function of the "See Details" Button
   */
  onClick: PropTypes.func,
  /**
   * ID of a snap.
   */
  snapId: PropTypes.string.isRequired,
};

export default SnapSettingsCard;
