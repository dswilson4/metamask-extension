import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Tooltip from '../../../../../ui/tooltip/tooltip';
import { I18nContext } from '../../../../../../contexts/i18n';

import { useCopyToClipboard } from '../../../../../../hooks/useCopyToClipboard';
import {
  Icon,
  ICON_NAMES,
} from '../../../../../component-library/icon/deprecated';
import { IconColor } from '../../../../../../helpers/constants/design-system';

const CopyRawData = ({ data }) => {
  const t = useContext(I18nContext);
  const [copied, handleCopy] = useCopyToClipboard();

  return (
    <div className="copy-raw-data">
      <Tooltip position="right" title={copied ? t('copiedExclamation') : ''}>
        <button
          onClick={() => {
            handleCopy(data);
          }}
          className="copy-raw-data__button"
        >
          <div className="copy-raw-data__icon">
            <Icon
              name={copied ? ICON_NAMES.COPY_SUCCESS : ICON_NAMES.COPY}
              color={IconColor.iconDefault}
            />
          </div>
          <div className="copy-raw-data__label">
            {t('copyRawTransactionData')}
          </div>
        </button>
      </Tooltip>
    </div>
  );
};

CopyRawData.propTypes = {
  data: PropTypes.string.isRequired,
};

export default CopyRawData;
