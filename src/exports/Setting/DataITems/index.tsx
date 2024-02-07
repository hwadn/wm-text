import React from 'react'
import { Form, Input, InputNumber } from 'antd'

const DataItems: React.FC = () => {
  return (
    <>
      <Form.Item label='Text' name={['data', 'text']} >
        <Input/>
      </Form.Item>
      <Form.Item label='Font Size' name={['data', 'fontSize']} >
        <InputNumber addonAfter='px' />
      </Form.Item>
    </>
  )
}

export default DataItems
