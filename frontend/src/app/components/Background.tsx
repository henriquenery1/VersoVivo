import bgImage from '../../../public/whiteaokNigthOk.png'
import Image from 'next/image'

export default function Background() {
  return (
    <Image
      alt="Background"
      src={bgImage}
      placeholder="blur"
      quality={100}
      fill
      sizes="100vw"
      style={{
        objectFit: 'cover',
        zIndex: -1,
      }}
    />
  )
}