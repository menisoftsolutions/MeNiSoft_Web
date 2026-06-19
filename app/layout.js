// import 'swiper/css';
// import "swiper/css/navigation";
// import "swiper/css/pagination";
import "/public/assets/css/bootstrap.min.css"        
import "/public/assets/css/all.min.css"
import "/public/assets/css/animate.css"
import "/public/assets/css/magnific-popup.css"
import "/public/assets/css/meanmenu.css"
import "/public/assets/css/swiper-bundle.min.css"
import "/public/assets/css/nice-select.css"
import "/public/assets/css/main.css"
import "/public/assets/css/custom.css"

import { Kumbh_Sans } from 'next/font/google'

const kumbh = Kumbh_Sans({
    weight: ['300', '400', '500', '600', '700','800','900'],
    subsets: ['latin'],
    display: 'swap',
})

export const metadata = {
  title: 'Menisoft - IT Solutions & Services Company',
  description:
    'Menisoft Solutions Pvt. Ltd. delivers innovative IT services including website development, web applications, mobile app development, SaaS platforms, custom software solutions, cloud deployment, API integration, digital marketing, SEO, and business automation products like MeNiGallery.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${kumbh.className}`}>{children}</body>
    </html>
  )
}
