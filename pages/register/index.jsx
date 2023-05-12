import { TextInput, Input } from '@mantine/core'
import { useForm } from '@mantine/hooks'
import Link from 'next/link'
import useRegister from '../../hooks/useRegister'
import styles from "../../styles/Register.module.css"

import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react'


const Register = () => {
    const form = useForm({
        initialValues: {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
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

    const [showPassword, setShowPassword] = useState(null);
    const handleShowPass = () => {
        setShowPassword(prev => !prev);
        console.log(showPassword)
    }
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
                                placeholder=' first name'
                                sx={{ width: "400px" }}
                                id="firstname"
                                {...form.getInputProps("firstname")}
                            />
                        </div>
                        <div className={styles.input_wrappers} >
                            <TextInput
                                size='lg'
                                placeholder=' last name'
                                sx={{ width: "400px" }}
                                id="lastname"
                                {...form.getInputProps("lastname")}
                            />
                        </div>
                        <div className={styles.input_wrappers}>
                            <TextInput
                                size='lg'
                                type='email'
                                placeholder=' email'
                                sx={{ width: "400px" }}
                                id="email"
                                {...form.getInputProps("email")}

                            />

                        </div>
                        <div className={styles.input_wrappers}>
                            <Input
                                rightSection={
                                    showPassword ?
                                        <FaEye onClick={handleShowPass} />
                                        : <FaEyeSlash onClick={handleShowPass} />
                                }
                                size='lg'
                                placeholder=' password'
                                sx={{ width: "400px" }}
                                type={
                                    showPassword ? "text" : "password"
                                }
                                id='password'
                                {...form.getInputProps("password")}

                            />
                            {showPassword}
                        </div>
                        <div className={styles.input_wrappers}>
                        </div>

                        <button className={styles.register_button}>
                            sign up
                        </button>
                        <div className={styles.register_link}>
                            already have an account ?
                            <Link href="/login" >Login Here</Link>
                        </div>

                    </form>
                </div>
            </div >

        </div >
    )
}

export default Register


