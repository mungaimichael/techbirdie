import { TextInput } from '@mantine/core'
import { useForm } from '@mantine/hooks'
import Link from 'next/link'
import { useEffect } from 'react'
import useLogin from '../../hooks/useLogin'
import styles from "../../styles/Login.module.css"
const login = () => {

  // import useLogin hook 
  const { data, mutate } = useLogin()

  const form = useForm({
    initialValues: {
      email: "",
      password: ""
    }
  })
  useEffect(() => {
    if (data) {
      console.log(data.data)
    }
  }, [data]);
  return (
    <div className={styles.main_wrapper} >
      <div className={styles.form_wrapper}>
        <div className={styles.register_img_wrapper}></div>
        <div className={styles.register_form}>
          <div className={styles.form_heading_wrapper}>
            <h2 className={styles.form_heading}>Login</h2>
            <span className={styles.form_subheading}>login to your account</span>
          </div>
          <form className={styles.form} onSubmit={form.onSubmit(values => {
            mutate(values)
          })} >
            <div className={styles.input_wrappers}>
              <TextInput
                placeholder='email'
                id='email'
                size='lg'
                style={{ width: "500px" }}
                {...form.getInputProps("email")} />
            </div>
            <div className={styles.input_wrappers}>
              <TextInput
                placeholder='password'
                id='password'
                size='lg'
                style={{ width: "500px" }}
                {...form.getInputProps("password")}
              />
            </div>
            <button className={styles.login_button} >login</button>
            <h4 className={styles.register_link}>Don't have an account ? <span className={styles.anchor}>
              <Link href="/register">register</Link>
            </span>
            </h4>
            <h4 className={styles.home_link}>
              <Link href="/">Home</Link>
            </h4>
          </form>
        </div>
      </div>
    </div >
  )
}

export default login