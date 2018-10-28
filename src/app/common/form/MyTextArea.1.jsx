import React from 'react'
import { Form, Label, TextArea } from 'semantic-ui-react'

const TextBox = ({input, rows, width, type, placeholder, meta: {touched, error}}) => {
  return (
    <Form.Field error={touched && !!error} width={width}>
      <TextArea autoHeight {...input} placeholder={placeholder} rows={rows}></TextArea>
      {touched && error && <Label basic color='red'>{error}</Label>}
    </Form.Field>
  )
}

export default TextBox


//    <TextArea autoHeight placeholder='Try adding multiple lines' />