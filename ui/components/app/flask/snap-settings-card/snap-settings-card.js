import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Card from '../../../ui/card';
import Box from '../../../ui/box';

import {
  Color,
  AlignItems,
  JustifyContent,
  DISPLAY,
  Size,
  BorderRadius,
} from '../../../../helpers/constants/design-system';
import { Icon, ICON_NAMES, ICON_SIZES, Text } from '../../../component-library';
import SnapAvatar from '../snap-avatar';

const SnapSettingsCard = ({ name, url, onClick, className, snapId }) => {
  return (
    <Card
      className={classnames('snap-settings-card', className)}
      onClick={onClick}
      borderRadius={BorderRadius.LG}
    >
      <Box
        display={DISPLAY.FLEX}
        alignItems={AlignItems.center}
        justifyContent={JustifyContent.center}
      >
        <Box>
          <SnapAvatar snapId={snapId} />
        </Box>
        <Box marginLeft={4}>
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
        <Box marginLeft={4} className="snap-settings-card__caret">
          <Icon
            name={ICON_NAMES.ARROW_RIGHT}
            size={ICON_SIZES.LG}
            color={Color.textMuted}
          />
        </Box>
      </Box>
    </Card>
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
   * Additional className added to the root div of the SnapSettingsCard component
   */
  className: PropTypes.string,
  /**
   * ID of a snap.
   */
  snapId: PropTypes.string.isRequired,
};

export default SnapSettingsCard;
