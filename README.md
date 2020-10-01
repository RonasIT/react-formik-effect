# react-formik-effect

> React Formik Effect

[![NPM](https://img.shields.io/npm/v/react-formik-effect.svg)](https://www.npmjs.com/package/react-formik-effect) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @ronas-it/react-formik-effect
```

## Usage

```tsx
import React, { Component } from 'react'

import FormikEffect from '@ronas-it/react-formik-effect'
import 'react-formik-effect/dist/index.css'

class Example extends Component {
  render() {
    return <Formik
     initialValues=...
     onSubmit=...
     validationSchema=...
    > {
        (props: FormikProps<FormikValues>): ReactElement =>
          <form >
            <FormikEffect onChange={() => ...}/>
          </form>
      }
      </Formik>
  }
}
```
