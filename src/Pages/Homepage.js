import React  from 'react';
import styled from 'styled-components';
import Navigation from '../components/navbar';

const HomePage = () => {

    const testFunction = () => {     

    }

    return (
  

    <Wrapper>
    <Navigation />
{/* spotify  */}
    <div className="container-fluid bg-red">
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <img src="https://i.redd.it/z0pvwp4tdv3b1.png" alt="" className='img-fluid head-image p-5'/>
                </div> 
                <div className="col-9 col-md-6 col-sm-12">
                    <span className=' d-flex mt-5'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/512px-Twitter_Verified_Badge.svg.png?20230122073352" alt=""
                         className='check mt-2'/>
                        <p class="text-light para mt-2 ml-5">Verified Artist</p>
                    </span>
                    <h1 class="text-light">Sizzlin Sunny</h1>
                    <button 
                    onClick={()=> {window.open('https://open.spotify.com/artist/44sEbS87pglRNlgY6QBpo0');}}
                    className='button rounded-pill lg-btn btn pill-rounded btn-dark text-white px-5 mb-4'>Listen</button>
                </div>
            </div>
    </div> 
{/*  */}
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-3 col-md-6  col-sm-12 bg-dark to-music-button " onClick={()=> {window.open('https://open.spotify.com/artist/44sEbS87pglRNlgY6QBpo0')}}>
                <p className='text-light  mt-3  spot-btn'> <span className='mx-4'>1</span>  <img src='https://i.scdn.co/image/ab67616d0000b2738787b39b5924914695ecd97e' 
                className='albumimage'
                /> <span className='mx-4'>Haters</span> </p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12  bg-dark to-music-button" onClick={()=> {window.open('https://open.spotify.com/track/6oa2oyqL2AAocHUzsJwXWP')}}>
                <p className='text-light  mt-3 spot-btn'> <span className='mx-4'>2</span> <img src='https://i.scdn.co/image/ab67616d0000b27378c865631faa228c93c5deb4' 
                className='albumimage'
                /> <span className='mx-4'>Blaze</span> </p>
            </div>
            <div className="col-lg-3 col-md-6  col-sm-12 bg-dark to-music-button" onClick={()=> {window.open('https://open.spotify.com/artist/44sEbS87pglRNlgY6QBpo0')}}>
                <p className='text-light  mt-3 spot-btn'> <span className='mx-4'>3</span> <img src='https://i.scdn.co/image/ab67616d00001e02256d18c87f105a98f0d6ca04' 
                className='albumimage'
                /> <span className='mx-4'>Greatness</span> </p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 bg-dark to-music-button" onClick={()=> {window.open('https://open.spotify.com/track/6KeTb9xT00Wr33eSE6DZwW')}}>
                <p className='text-light  mt-3 spot-btn'> <span className='mx-4'>4</span> <img src='https://i.scdn.co/image/ab67616d0000b2738787b39b5924914695ecd97e' 
                className='albumimage'
                /> <span className='mx-4'>Numbers</span> </p>
            </div>
        </div>
    </div>    
{/* aobbut  */}
    <div className="container-fluid bg-blue">
        <div className="row mx-auto">
            <div className="col-lg-9 col-md-8 col-sm-12">
            <h1 class="text-light">Who am I?</h1>
            <h5 className='text-light  para'>Lorem, ipsum dolor sit amet consectetur 
            asoluta voluptatibus 
            reprehenderit voluptatem ratione nulla 
            necessitatibus assumenda eum omnis, nihil molestias temporibus 
            eius minus vero consectetur tempora laborum? Omnis.</h5>
                  </div>
            <div className="col-lg-3 col-md-4 col-sm-12">
             <img src="https://i.redd.it/8468iv4qvv3b1.jpg" alt="" className='img-fluid head-image p-5'/>
            </div>
        </div>
    </div>

    {/* greay filler */}
    <div className="container-fluid bg-dark">
        <div className="row ">
        <div className="col-lg-4 col-md-6 col-sm-12">
             <img src="https://i.redd.it/ppqv7nk8iw3b1.jpg" alt="" className='img-fluid hea-image mt-3 mb-3'/>
        </div>
         <div className="col-lg-8 col-md-6 col-sm-12 ">
            <h1 class="text-light">Mission</h1>
            <h5 className='text-light para'>Lorem, ipsum dolor sit amet consectetu
             asoluta voluptatibus reprehenderit voluptatem ratione nulla necessitatibus 
             assumenda eum omnis, nihil molestias temporibus eius minus vero consectetur 
             tempora laborum? Omnis.</h5>   
        </div>
        </div>
    </div>
{/* contact  */}
    <div className="container-fluid ">
        <div className="row ">
            <div className="col-lg-6 col-md-6 col-sm-12 p-5">
                <h1 class="text-dark mb-5">Talk to me</h1>
            <button 
                    onClick={()=> {window.open('https://www.instagram.com/sizzlin_sunny/');}}
                    className='button rounded-pill lg-btn btn pill-rounded btn-danger px-5'>Contact</button>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 mx-auto">
                <img src="https://i.redd.it/cx4id33y2w3b1.jpg" alt="" className='img-fluid nike'/>
            </div>
        </div>
    </div>
    </Wrapper>     
)
}

const Wrapper = styled.div`
.spot-btn {
    font-size: 20px;
    transition: 2s !important; 
}
.spot-btn:hover {
    font-size: 25px;
    transition: 2s !important; 
}

.nike {
   
}
.button {
    font-size: 25px;
}

.bottom-img-bg {
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('https://i.redd.it/cx4id33y2w3b1.jpg');
    background-size:cover;
    background-position: 20% 24% ;
}

.bg-blue {
    background-color: #2A6D8A;

}

.to-music-button:hover {
    cursor: pointer
}
.albumimage {
width:60px ;
}
.para {
    font-size: 30px;
}
.check {
    width: 40px;
    height: 40px;
}

.bg-red {
    background-color: #8E2624;
}
.header-image {
    
}
.head-image {
    border-radius: 50%;
}
h1 {
    font-size: 150px ;
}
.header: {
   
}

@media (max-width: 1800px) {
    h1 {
        font-size: 80px ;
    }
    .para {
        font-size: 25px;
    }
  
  }
  @media (max-width: 700px) {
    .hea-image {
        display: none;
    }
    h1 {
        font-size: 50px ;
    }
    .para {
        font-size: 20px;
    }
    .button {
        font-size: 15px;
    }
  }

`

export default HomePage