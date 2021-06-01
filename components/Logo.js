import React, { Component } from "react"
import Image from 'next/image'
import Link from 'next/link'
import { debounce, chunk, slice, flatten } from "lodash"
export default class Logos extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div className="grid grid-cols-5 gap-3">
    {
      this.props.data.map(logo => {
        return <div className="logo" key={logo.route}>
          <div className="logo-img"><Image src={logo.route} key={logo.name} alt={logo.name} width={72} height={72} /></div>
          <h3>{logo.name}</h3>
          <div className="download">
            <Image src="/download.svg" width={16} height={16} />
            <Link href={logo.route}><a className="ml-2">SVG</a></Link>
            {/* <Link href={`/logos/${logo}`}><a className="ml-2">PNG</a></Link> */}
          </div>
        </div>
      })
    }
  </div>
  }
}