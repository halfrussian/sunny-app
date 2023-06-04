import React from 'react';
import styled from 'styled-components';


 const Navigation = () => {

    return (
        <Wrapper>
            {/* d-flex justify-content-center align-items-center */}
         <div className="container-fluid bg-black ">
            <div className="row d-flex ">
            
                <div className="col-2">
                    <img src="https://i.redd.it/bl6y69o11u3b1.jpg" alt="" style={{width: '100px', height: '100px', borderRadius:'50%'}} />
                </div>
                <div className='col-2 text-center nav-text'>
                    <h3 className='mt-4 pt-1 pb-1 texter text-light mx-3'
                    onClick={()=> {window.open('https://open.spotify.com/artist/44sEbS87pglRNlgY6QBpo0')}}
                    >Spotify</h3>
                    
                </div>
                <div className='col-2 text-center nav-text'>
                    <h3 className='mt-4 pt-1 pb-1 texter text-light'
                    onClick={()=> {window.open('https://www.youtube.com/watch?v=PbaYWDDuicI')}}
                    >Youtube</h3>
                    
                </div>
                
                <div className='col-2 text-center nav-text'>
                    <h3 className='mt-4 pt-1 pb-1 texter text-light'
                    onClick={()=> {window.open('https://www.instagram.com/sizzlin_sunny/')}}
                    >Instagram</h3>
                </div>
            </div>
        </div>   
        </Wrapper>
     
    )
}

const Wrapper = styled.div`
.texter{
    font-size: 20;
    color: white
    transition: 2s !important; 
}
    .bg-black: {
        background-color: black

    }
    .texter:hover{
        cursor: pointer;
        transform: scale(1.1);
    }
    .nav-text {
        font-size:20px !important;
    }
    @media (max-width: 700px) {
        .texter {
            margin-top: 35px !important;
            font-size: 15px !important;
        }
      }
    
`
export default Navigation 