import React, { ReactNode } from 'react';
import { Button, Input, Space } from '@arco-design/web-react';

export interface TableToolbarProps {
  actions?: ReactNode;
  searchPlaceholder?: string;
}

export function TableToolbar({
  actions,
  searchPlaceholder = 'Search'
}: TableToolbarProps) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 12
      }}
    >
      <Input.Search allowClear placeholder={searchPlaceholder} style={{ maxWidth: 320 }} />
      <Space>
        {actions ?? <Button type="primary">Add Item</Button>}
      </Space>
    </div>
  );
}

export default TableToolbar;
