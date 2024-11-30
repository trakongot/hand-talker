// import type { Metadata } from 'next/types'

import { Header } from "@/components/Header/Header"
import { InitializeChakra } from "@/components/InitializeChakra/InitializeChakra"


interface Props {
  children: React.ReactNode
}

// export const metadata: Metadata = {
//   metadataBase: new URL('https://handtalk.example.com/'),  // Thay thế với URL thực tế của bạn
//   title: 'HandTalk - Sign Language Recognition',
//   description:
//     'HandTalk is an innovative platform that translates sign language into text or speech, making communication more accessible for the deaf and hard-of-hearing community.',
//   keywords:
//     'sign language, translation, accessibility, deaf, hard of hearing, communication, gesture recognition, AI, speech-to-text, sign language recognition',
//   openGraph: {
//     type: 'website',
//     title: 'HandTalk - Sign Language Recognition',
//     description:
//       'HandTalk is an innovative platform that translates sign language into text or speech, making communication more accessible for the deaf and hard-of-hearing community.',
//     images: 'https://handtalk.example.com/logo.png',  // Thay thế với hình ảnh thực tế
//     siteName: 'HandTalk',
//     url: 'https://handtalk.example.com/',  // Thay thế với URL thực tế
//   },
//   twitter: {
//     title: 'HandTalk - Sign Language Recognition',
//     description:
//       'HandTalk is an innovative platform that translates sign language into text or speech, making communication more accessible for the deaf and hard-of-hearing community.',
//     images: 'https://handtalk.example.com/logo.png',  // Thay thế với hình ảnh thực tế
//     card: 'summary_large_image',
//   },
// }

const AppLayout = (props: Props) => {
  const { children } = props

  return (
    <InitializeChakra>
      <Header />
      {children}
      {/* <Footer /> */}
    </InitializeChakra>
  )
}

export default AppLayout
