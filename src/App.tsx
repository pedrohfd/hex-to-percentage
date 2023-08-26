import { useState } from 'react'

export const App = () => {
  const [alpha, setAlpha] = useState('')
  const [decimal, setDecimal] = useState('')
  const [hex, setHex] = useState('')

  const fromPercent = (valNum: string) => {
    const decimalValue = Math.round((Number(valNum) * 255) / 100)
    setDecimal(decimalValue.toString())

    if (Number(valNum) < 7) {
      const hexValue = '0' + decimalValue.toString(16).toUpperCase()
      setHex(hexValue)
    } else {
      const hexValue = decimalValue.toString(16).toUpperCase()
      setHex(hexValue)
    }
  }

  const fromDecimal = (valNum: string) => {
    const decimalValue = Math.round(Number(valNum))

    if (Number(valNum) > 16) {
      const hexValue = decimalValue.toString(16).toUpperCase()
      setHex(hexValue)
    } else {
      const hexValue = decimalValue.toString(16).toUpperCase()
      setHex(hexValue)
    }

    setAlpha(Math.round((Number(valNum) / 255) * 100).toString())
  }

  const fromHex = (valNum: string) => {
    const hexValue = Number(valNum).toString(16).toUpperCase()

    if (valNum.length === 0) {
      setDecimal('0')
    } else {
      setDecimal(Math.round(parseInt(valNum, 16)).toString())
    }

    if (valNum.length === 0) {
      setAlpha('0')
    } else {
      setAlpha(Math.round((parseInt(valNum, 16) / 255) * 100).toString())
    }

    setHex(hexValue)
  }

  const fromHexChange = (valNum: string) => {
    let hexValue = ''

    if (Number(valNum) < 10) {
      hexValue = valNum.toUpperCase()
    } else if (
      valNum.toString().toUpperCase() === 'A' ||
      valNum.toString().toUpperCase() === 'B' ||
      valNum.toString().toUpperCase() === 'C' ||
      valNum.toString().toUpperCase() === 'D' ||
      valNum.toString().toUpperCase() === 'E' ||
      valNum.toString().toUpperCase() === 'F'
    ) {
      hexValue = valNum.toUpperCase()
    } else {
      hexValue = valNum.toUpperCase()
    }

    setAlpha(Math.round((parseInt(valNum, 16) / 255) * 100).toString())

    setDecimal(Math.round(parseInt(valNum, 16)).toString())

    setHex(hexValue)
  }

  return (
    <main className='flex flex-col items-center justify-center w-screen h-screen font-poppins bg-violet-500 selection:bg-zinc-50 selection:text-zinc-800'>
      <div className='p-12 border rounded-lg text-zinc-50'>
        <h1 className='mb-10 text-2xl font-semibold'>Alpha to Hex converter</h1>

        <div className='flex flex-col gap-5'>
          <section className='flex items-center justify-between gap-8'>
            <span className='flex items-center gap-4'>
              <h3 className='text-xl'>Alpha</h3>

              <p className='text-md'>0 - 100%</p>
            </span>

            <input
              type='text'
              className='w-20 py-3 text-xl text-center border rounded outline-none bg-violet-500'
              value={alpha}
              onChange={(e) => fromPercent(e.target.value)}
              onChangeCapture={(e) => setAlpha(e.currentTarget.value)}
              placeholder='0'
            />
          </section>

          <section className='flex justify-between gap-8'>
            <span className='flex items-center gap-4'>
              <h3 className='text-xl'>RGB</h3>

              <p className='text-md'>0 - 255</p>
            </span>

            <input
              type='text'
              className='w-20 py-3 text-xl text-center border rounded outline-none bg-violet-500'
              value={decimal}
              onChange={(e) => fromDecimal(e.target.value)}
              onChangeCapture={(e) => setDecimal(e.currentTarget.value)}
              placeholder='0'
            />
          </section>

          <section className='flex justify-between gap-8'>
            <span className='flex items-center gap-4'>
              <h3 className='text-xl'>Hex</h3>

              <p className='text-md'>00 - FF</p>
            </span>

            <input
              type='text'
              className='w-20 py-3 text-xl text-center border rounded outline-none bg-violet-500'
              value={hex}
              onInput={(e) => fromHex(e.currentTarget.value)}
              onChange={(e) => fromHexChange(e.target.value)}
              placeholder='00'
            />
          </section>
        </div>
      </div>
    </main>
  )
}
