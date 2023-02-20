import { TextInput } from '@mantine/core'
import { useForm } from '@mantine/hooks'
import Link from 'next/link'
import { useEffect } from 'react'
import useRegister from '../../hooks/useRegister'
import styles from "../../styles/Register.module.css"
const Register = () => {
    const form = useForm({
        initialValues: {
            firstname: "",
            lastname: "",
            email: "",
            confirmemail: "",
            password: "",
            confirmPassword: "",
        }
    })

    // const sendToDatabase = (e) => {
    //     e.preventDefault();
    //     console.log(form.values);

    //     fetch('/api/register', {
    //         method: "POST",
    //         headers: {
    //             'Content-Type': 'Application/json'
    //         },
    //         body: JSON.stringify(form.values)
    //     })
    //         .then(res => res.json())
    //         .then(res => console.log(res))
    //         .catch(err => console.log(err.message))
    // }



    // import useRegister hook
    const { mutate } = useRegister()
    return (
        <div className={styles.container}>
            <div className={styles.form_wrapper}>
                <div className={styles.register_img_wrapper}>
                </div>
                <div className={styles.register_form} >
                    <div className={styles.form_heading_wrapper}>
                        <h3 className={styles.form_heading} >
                            Sign Up Today
                        </h3>
                        <span className={styles.form_subheading} >
                            never miss any action happening in the<span>tech</span>world
                        </span>
                    </div>
                    <form
                        className={styles.form}
                        onSubmit={form.onSubmit((values) => {
                            mutate(values)
                        })}
                    >
                        <div className={styles.input_wrappers}>
                            <TextInput
                                size='lg'
                                placeholder='enter first name'
                                sx={{ width: "400px" }}
                                id="firstname"
                                {...form.getInputProps("firstname")}
                            />

                            <TextInput
                                size='lg'
                                placeholder='enter last name'
                                sx={{ width: "400px" }}
                                id="lastname"
                                {...form.getInputProps("lastname")}
                            />
                        </div>
                        <div className={styles.input_wrappers}>
                            <TextInput
                                size='lg'
                                type='email'
                                placeholder='enter email'
                                sx={{ width: "400px" }}
                                id="email"
                                {...form.getInputProps("email")}

                            />

                            <TextInput
                                size='lg'
                                type='email'
                                placeholder='confirm email'
                                sx={{ width: "400px" }}
                                {...form.getInputProps("confirmemail")}
                                id="confirmemail"
                            />
                        </div>
                        <div className={styles.input_wrappers}>
                            <TextInput
                                size='lg'
                                placeholder='enter password'
                                sx={{ width: "400px" }}
                                type="password"
                                id='password'
                                {...form.getInputProps("password")}

                            />
                            <TextInput
                                size='lg'
                                placeholder='confirm password'
                                sx={{ width: "400px" }}
                                type="password"
                                id='confirmPassword'
                                {...form.getInputProps("confirmPassword")}
                            />
                        </div>
                        <button className={styles.register_button}>
                            sign up
                        </button>
                        <div className={styles.register_link}>
                            already have an account ?
                            <Link href="/login" >Login Here</Link>
                        </div>
                        <h4 className={styles.home_linl}>
                            <Link href="/" >Home</Link>
                        </h4>
                    </form>
                </div>
            </div >

        </div >
    )
}

export default Register