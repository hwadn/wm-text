import React from 'react'
import { IFormValues } from '../Setting'

interface IComponentProps {
	formValues: IFormValues
}

export const Component: React.FC<IComponentProps> = ({ formValues }) => {
	const { container, data } = formValues || {}
  const { fontSize, text } = data || {}
	return (
    <div style={{ display: 'flex', justifyContent: 'center', ...container, fontSize }}>
      <span>{text}</span>
    </div>
  )
}
