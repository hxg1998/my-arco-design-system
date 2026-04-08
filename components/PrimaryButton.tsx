import React from 'react';
import { Button, ButtonProps } from '@arco-design/web-react';

export type PrimaryButtonProps = ButtonProps;

export function PrimaryButton(props: PrimaryButtonProps) {
  return <Button type="primary" {...props} />;
}

export default PrimaryButton;
