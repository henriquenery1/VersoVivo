import bgImage from '../../public/whiteaokNigthOk.png'
import Image from 'next/image'

export default function Background() {
  return (
    <div className='inset-0 z-0'>
      <Image
        alt="Background"
        src={bgImage}
        quality={100}
        fill
        sizes="100vw"
        />
    </div>
  )
}