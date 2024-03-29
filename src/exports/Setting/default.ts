interface IContainerForm {
  margin: string
  padding: string
  backgroundColor: string
}

interface IDataForm {
	text: string
	fontSize: number
}

export interface IFormValues {
  container: IContainerForm
  data: IDataForm
}

export const defaultFormValues: IFormValues = {
	container: {
    margin: '0 20px',
    padding: '20px 0',
    backgroundColor: '#cece72'
  },
  data: {
    text: '文本',
    fontSize: 14,
  }
}
