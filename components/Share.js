import React, { Component } from "react"
import {FacebookShareButton,FacebookIcon,TwitterIcon,TwitterShareButton,WeiboIcon,WeiboShareButton} from "next-share"

const shareImg = "https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/q3ZZWz.png";
const shareUrl = "https://logos.manon.icu"
const shareMsg = "Search & download thousands of logos instantly"

export default class Share extends Component {
  render() {
    return <div className="share flex absolute top-4 right-4 z-50">
      <div className="share-item mr-4">
        <TwitterShareButton url={shareUrl} title={shareMsg}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
      </div>
      <div className="share-item mr-4">
        <WeiboShareButton url={shareUrl} title={shareMsg} image={shareImg}>
        <WeiboIcon size={32} round />
      </WeiboShareButton>
      </div>
      <div className="share-item">
        <FacebookShareButton url={shareUrl} title={shareMsg}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      </div>
    </div>
  }
}