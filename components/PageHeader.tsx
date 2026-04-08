import React, { ReactNode } from 'react';
import { Breadcrumb, Button, Space, Typography } from '@arco-design/web-react';

const { Title, Text } = Typography;

export interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbItems?: string[];
  actions?: ReactNode;
}

export function PageHeader({
  title,
  subtitle,
  breadcrumbItems = [],
  actions
}: PageHeaderProps) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16 }}>
      <div>
        {breadcrumbItems.length > 0 && (
          <Breadcrumb style={{ marginBottom: 8 }}>
            {breadcrumbItems.map((item) => (
              <Breadcrumb.Item key={item}>{item}</Breadcrumb.Item>
            ))}
          </Breadcrumb>
        )}
        <Title heading={4} style={{ margin: 0 }}>
          {title}
        </Title>
        {subtitle && (
          <Text type="secondary" style={{ display: 'block', marginTop: 4 }}>
            {subtitle}
          </Text>
        )}
      </div>
      <Space>
        {actions ?? <Button type="primary">Create</Button>}
      </Space>
    </div>
  );
}

export default PageHeader;
