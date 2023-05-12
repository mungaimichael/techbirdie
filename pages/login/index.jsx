import { TextInput } from '@mantine/core'
import { useForm } from '@mantine/hooks'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import loginUser from '../../services/login.api'
import styles from "../../styles/Login.module.css"
const Login = () => {

  const [token, setToken] = useState(null)

  // const router = useRouter();

  // // import useLogin hook
  // const token = '';

  // if (typeof window !== 'undefined') {
  //   token = localStorage.getItem('token');
  // }
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    }

  })


  // useEffect(() => {
  //   // check for token in local storage 
  //   if (token) {
  //     router.push("/home", undefined, { shallow: true })
  //   }
  //   return () => {
  //     localStorage.removeItem("token")
  //   }
  // }, [token]);

  useEffect(() => {
    console.log(token);
  }, [token])
  return (
    <div className={styles.main_wrapper} >
      <div className={styles.form_wrapper}>
        <div className={styles.register_img_wrapper}></div>
        <div className={styles.register_form}>
          <div className={styles.form_heading_wrapper}>
            <h2 className={styles.form_heading}>Login</h2>
            <span className={styles.form_subheading}>login to your account</span>
          </div>
          <form className={styles.form}
            onSubmit={form.onSubmit(values => {
              loginUser(values)
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
                type='password'
                id='password'
                size='lg'
                style={{ width: "500px" }}
                {...form.getInputProps("password")}
              />
            </div>
            <button className={styles.login_button} >login</button>
            <h4 className={styles.register_link}> have an account ? <span className={styles.anchor}>
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

export default Login