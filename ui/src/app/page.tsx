'use client'

import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from 'react-aria-components'
import { Controller, useForm } from 'react-hook-form'

import axios, { AxiosError } from 'axios'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  const { handleSubmit, control } = useForm({
    defaultValues: {
      phone: '',
      id: '',
    },
  })
  const onSubmit = async (data: any) => {
    try {
      const { status, data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/login/login`,
        {
          withCredentials: true,
        },
      )
      if (status === 200 && data.signedIn) {
        console.log('success')
        router.push('/payment')
      } else {
        throw new Error('unexpected error')
      }
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        console.log(error.message)
      } else {
        console.log(error)
      }
    }

    // axios.get('https://localhost:7232/login').then(({ status, data }) => {
    //   if (status === 200 && data.welcome) {
    //     console.log('yay')
    //   }
    // })
  }

  return (
    <>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        className="m-auto w-[min(100%-30px,640px)] rounded-[20px] bg-[#FFFFFF] p-20-30,640-1024 shadow-[0_2px_15px_#0000001a]"
      >
        <Controller
          control={control}
          name="phone"
          rules={{ required: 'זה שדה חובה' }}
          render={({
            field: { name, value, onChange, onBlur, ref },
            fieldState: { invalid, error },
          }) => (
            <TextField
              name={name}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              isRequired
              validationBehavior="aria"
              isInvalid={invalid}
              className="flex flex-col"
            >
              <Label className="text-22-24,640-1024 font-[500] text-[#1f2b7f]">
                *מה הטלפון שלך?
              </Label>
              <Input
                ref={ref}
                placeholder="050-0000000"
                className="mt-[30px] h-[55px] bg-[#f6f6f6] px-[16px] text-16-20,640-1024 font-[600] text-[#1f2b7f] placeholder:font-[500] placeholder:text-[#6e6d71]"
              />
              <FieldError className="mt-[6px] text-[14px] font-[500] text-[#fa4646]">
                {error?.message}
              </FieldError>
            </TextField>
          )}
        />

        <Controller
          control={control}
          name="id"
          rules={{ required: 'זה שדה חובה' }}
          render={({
            field: { name, value, onChange, onBlur, ref },
            fieldState: { invalid, error },
          }) => (
            <TextField
              name={name}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              isRequired
              validationBehavior="aria"
              isInvalid={invalid}
              className="mt-[30px] flex flex-col"
            >
              <Label className="text-22-24,640-1024 font-[500] text-[#1f2b7f]">
                *מה מספר תעודת הזהות שלך?
              </Label>
              <Input
                ref={ref}
                placeholder="000000000"
                className="mt-[30px] h-[55px] bg-[#f6f6f6] px-[16px] text-16-20,640-1024 font-[600] text-[#1f2b7f] placeholder:font-[500] placeholder:text-[#6e6d71]"
              />
              <FieldError className="mt-[6px] text-[14px] font-[500] text-[#fa4646]">
                {error?.message}
              </FieldError>
            </TextField>
          )}
        />
        <Button
          type="submit"
          className="mt-[30px] flex items-center gap-[10px] rounded-[33px] bg-[#FA4646] px-[32px] py-[12px] text-[17px] text-white shadow-[0_2px_17px_#fa464673]"
        >
          המשך
        </Button>
      </Form>
    </>
  )
}
