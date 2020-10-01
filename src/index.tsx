import { useFormikContext } from 'formik'
import { useEffect } from 'react'

interface Props {
  onChange: () => void
}

function FormikEffect(props: Props) {
  const { values } = useFormikContext()

  useEffect(() => {
    props.onChange()
  }, [values])

  return null
}

export default FormikEffect
