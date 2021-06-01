import React, { Component } from "react"
import Image from 'next/image'
import Link from 'next/link'
export default class Logos extends Component {
  constructor(props) {
    super(props)
    console.log(this.props)
  }

  render() {
    return <div className="grid grid-cols-5 gap-3">
    {
      this.props.data.map(logo => {
        return <div className="logo" key={logo}>
          <div className="logo-img"><Image src={`/logos/${logo}`} key={logo} alt={logo} width={72} height={72} /></div>
          <h3>{ logo.split(".")[0] }</h3>
          <div className="download">
            <Image src="/download.svg" width={16} height={16} />
            <Link href={`/api/download/?filename=${logo}`}><a className="ml-2">SVG</a></Link>
            {/* <Link href={`/logos/${logo}`}><a className="ml-2">PNG</a></Link> */}
          </div>
        </div>
      })
    }
  </div>
  }
}