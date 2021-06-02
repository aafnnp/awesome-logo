import React, { Component } from "react"
import Image from 'next/image'
import axios from "axios"
export default class Logos extends Component {
  constructor(props) {
    super(props)
  }

  async downloadFile({ filename,filetype}) {
    const result = await axios({
      method:"POST",
      url: "https://apis.manon.icu/logos/",
      data: { filename, filetype }
    })
    console.log(result.data.data,"data")

    const bufferArray = new Uint8Array(result.data.data.data)
    const url = window.URL.createObjectURL(new Blob([bufferArray]));
    const _a = document.createElement("a");
    _a.style.display = 'none';
    _a.href = url
    _a.setAttribute('download', `${filename}.${filetype}`);
    document.body.appendChild(_a);
    _a.click()
    window.URL.revokeObjectURL(_a.href);
    document.body.removeChild(_a)

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
            <span className="ml-2 cursor-pointer" onClick={this.downloadFile.bind(this,{filename:logo.name,filetype:'svg'})}>SVG</span>
            <span className="ml-2 cursor-pointer" onClick={this.downloadFile.bind(this,{filename:logo.name,filetype:'png'})}>PNG</span>
            <span className="ml-2 cursor-pointer" onClick={this.downloadFile.bind(this,{filename:logo.name,filetype:'jpg'})}>JPG</span>
            <span className="ml-2 cursor-pointer" onClick={this.downloadFile.bind(this,{filename:logo.name,filetype:'webp'})}>Webp</span>
          </div>
        </div>
      })
    }
  </div>
  }
}