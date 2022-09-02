import React from 'react'
function randInt(min,max){
    let x=(max-min)+1
    return min+Math.floor(Math.random()*x)
}

export default function Banner(){
    const r = randInt(1,3)
    let banner=""
    let url=""

    switch(r){
        case 1:
            banner='./banners/LoGo1.jpg'
            url='https://process.images.nathab.com/A6dTpd53SmIg0pBfJJhgAz/quality=value:60/cache=expiry:31536000/compress/https://process.images.nathab.com/A6dTpd53SmIg0pBfJJhgAz/quality=value:60/cache=expiry:31536000/compress/https://good-nature-blog-uploads.s3.amazonaws.com/uploads/2017/01/LilyRose97_flickr_Web.jpg'
            break
        case 2:
            banner='./banners/LoGo2.jpg'
            url='https://www.chesterzoo.org/news/record-breaking-animal-numbers/new-figures-reveal-chester-zoo-is-home-to-a-record-35-thousand-animals-17-pictured_red-panda-cubs/'
            break
        case 3:
            banner='./banners/LoGo3.jpg'
            url='https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iySor8COHZQw/v0/-1x-1.jpg'
            break
        default: break
    }

    const bannerClick =()=>{
        window.open(url)
    }

    return(
        <div style={{margin:'20px',textAlign:'center'}}>
            <img src={banner} onClick={bannerClick} style={{cursor:'pointer'}} alt="banner"/>
        </div>
    )

}