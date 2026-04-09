import React from 'react';
import { Button } from '@arco-design/web-react';

type ArcoButtonProps = React.ComponentProps<typeof Button>;

export interface PrimaryButtonProps extends Omit<ArcoButtonProps, 'type'> {
  /** Whether the button should take the full available width. */
  fullWidth?: boolean;
  /** Minimum width for the regular button. Set 0 to disable. */
  minWidth?: number;
}

const BRAND_PRIMARY = '#3C49DD';
const BRAND_PRIMARY_DARK = '#313CC4';
const BRAND_SHADOW = 'rgba(60, 73, 221, 0.22)';

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  fullWidth = false,
  minWidth = 108,
  style,
  disabled,
  loading,
  ...rest
}) => {
  return (
    <Button
      type="primary"
      disabled={disabled}
      loading={loading}
      style={{
        height: 40,
        minWidth: fullWidth ? '100%' : minWidth,
        width: fullWidth ? '100%' : undefined,
        paddingInline: 18,
        borderRadius: 12,
        borderColor: disabled ? '#C9CDD4' : BRAND_PRIMARY,
        background: disabled
          ? '#F2F3F5'
          : `linear-gradient(135deg, ${BRAND_PRIMARY} 0%, ${BRAND_PRIMARY_DARK} 100%)`,
        color: disabled ? '#86909C' : '#FFFFFF',
        fontSize: 14,
        fontWeight: 600,
        letterSpacing: '0.01em',
        boxShadow: disabled ? 'none' : `0 10px 24px ${BRAND_SHADOW}`,
        transition: 'all 0.2s ease',
        ...style,
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
