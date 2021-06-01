import Image from 'next/image'
import Link from 'next/link'

export default function Logos({ data }) {
  return <div className="grid grid-cols-5 gap-3">
    {
      data.map(logo => {
        return <div className="logo shadow-md p-4 rounded" key={logo}>
          <div className="logo-img flex justify-center items-center h-24"><Image src={`/logos/${logo}`} key={logo} alt={logo} width={72} height={72} /></div>
          <h3 className="flex items-center opacity-50 text-sm">
            <Image src="/download.svg" width={16} height={16} />
            <Link href={`/api/download/?filename=${logo}`}><a className="ml-2">SVG</a></Link>
            {/* <Link href={`/logos/${logo}`}><a className="ml-2">PNG</a></Link> */}
          </h3>
        </div>
      })
    }
  </div>
}