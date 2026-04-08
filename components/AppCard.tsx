import React, { ReactNode } from 'react';
import { Card } from '@arco-design/web-react';

export interface AppCardProps {
  title?: ReactNode;
  extra?: ReactNode;
  children: ReactNode;
}

export function AppCard({ title, extra, children }: AppCardProps) {
  return (
    <Card title={title} extra={extra} bordered style={{ borderRadius: 8 }}>
      {children}
    </Card>
  );
}

export default AppCard;
