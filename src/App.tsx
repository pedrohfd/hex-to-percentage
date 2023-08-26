export const App = () => {
  return (
    <main className='w-screen h-screen flex flex-col justify-center items-center font-poppins '>
      <h1 className='text-2xl font-semibold mb-10'>Alpha to Hex converter</h1>

      <div className='flex flex-col gap-5'>
        <section className='flex gap-8 justify-between'>
          <span className='flex gap-4 items-center'>
            <h3 className='text-xl'>Alpha</h3>

            <p className='text-md'>0 - 100%</p>
          </span>

          <input
            type='number'
            className='border rounded w-24 h-12 text-center'
            value={0}
          />
        </section>
        <section className='flex gap-8 justify-between '>
          <span className='flex gap-4 items-center'>
            <h3 className='text-xl'>RGB</h3>

            <p className='text-md'>0 - 255</p>
          </span>

          <input
            type='number'
            className='border rounded w-24 h-12 text-center'
            value={0}
          />
        </section>
        <section className='flex gap-8 justify-between'>
          <span className='flex gap-4 items-center'>
            <h3 className='text-xl'>Hex</h3>

            <p className='text-md'>00 - FF</p>
          </span>

          <input
            type='number'
            className='border rounded w-24 h-12 text-center'
            value={0}
          />
        </section>
      </div>
    </main>
  )
}
