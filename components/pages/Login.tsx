/** @format */
'use client'
import { LogIn } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

interface LoginValues {
  name: string
  password: string
}

const initialValues: LoginValues = {
  name: '',
  password: '',
}

const validateSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  password: Yup.string().required('Password required'),
})
const Login = () => {
  const router = useRouter()

  const handleSubmit = (
    values: LoginValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    console.log(values)

    setSubmitting(false)
    router.push('/prayer-request/admin/dashboard')
  }

  return (
    <div className='fixed inset-0 z-50 flex flex-col items-center justify-center min-h-screen bg-white/30 backdrop-blur-sm p-4 rouonded-lg'>
      <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
        <div className='bg-white shadow-2xl rounded-2xl flex w-2/3 max-w-4xl overflow-hidden'>
          {/* Left: Login Section */}
          <div className='w-3/5 p-8 flex flex-col items-center justify-center'>
            <Image
              src='/images/logo1.png'
              alt='Church Logo'
              width={200}
              height={200}
              className='mb-6'
            />

            <Formik
              initialValues={initialValues}
              validationSchema={validateSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className='w-full max-w-sm space-y-4'>
                  <Field
                    name='name'
                    type='text'
                    placeholder='Name'
                    className='w-full border border-gray-300 rounded-md px-3 py-2 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400'
                  />
                  <ErrorMessage
                    name='name'
                    component='div'
                    className='text-red-500 text-sm mt-0.5 text-left'
                  />
                  <Field
                    name='password'
                    type='password'
                    placeholder='Password'
                    className='w-full border border-gray-300 rounded-md px-3 py-2 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400'
                  />
                  <ErrorMessage
                    name='password'
                    component='div'
                    className='text-red-500 text-sm mt-1 text-left'
                  />
                  <button
                    type='submit'
                    className='w-50 flex items-center justify-center m-auto bg-yellow-400 text-black font-semibold py-2 rounded-md hover:bg-black hover:text-white transition-colors'
                  >
                    Login
                    <span className='text-xl ml-2'>
                      <LogIn />
                    </span>
                  </button>
                </Form>
              )}
            </Formik>
          </div>

          {/* Right: Intro Section */}
          <div className='w-2/5 bg-yellow-400 text-black flex flex-col items-center justify-center px-10'>
            <h2 className='text-2xl font-bold mb-2'>Hello, Admin!</h2>
            <div className='border-t-2 border-black w-10 mb-3'></div>
            <p className='text-sm text-center'>
              Your prayer wall updates await. Manage your requests with ease.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Login
