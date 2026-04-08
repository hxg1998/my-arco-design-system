import React, { ReactNode } from 'react';
import { Form, Grid } from '@arco-design/web-react';

const Row = Grid.Row;
const Col = Grid.Col;

export interface AppFormProps {
  children: ReactNode;
}

export function AppForm({ children }: AppFormProps) {
  return (
    <Form layout="vertical">
      <Row gutter={16}>
        <Col span={24}>{children}</Col>
      </Row>
    </Form>
  );
}

export default AppForm;
