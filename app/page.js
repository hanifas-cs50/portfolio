import Image from 'next/image';

export default function Home() {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl m-auto p-8 lg:px-16 flex flex-col lg:flex-row items-center justify-between">
        <Image
          className="rounded-xl"
          src="./2-ELzxldtU6kACf.png"
          width={500}
          height={500}
          quality={80}
          priority={true}
          alt="Picture of the author"
        />
        <div className='w-full pt-8 lg:pl-16 lg:pr-4 xl:pr-0'>
          <h1 className='font-bold text-5xl text-center text-white'>!Hello World!</h1>
          <p className='pt-4 lg:pt-6 font-medium text-lg text-justify text-zinc-400'>
            My hobbies include Physics and Computer science. This Website is for showing my portfolios. You can find some inspiration for your own too, or maybe you can hire me as a Front or Back-end Developer for your website!
          </p>
        </div>
      </div>
    </div>
  )
};