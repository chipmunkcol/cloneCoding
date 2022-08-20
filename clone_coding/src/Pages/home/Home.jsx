import React from 'react'
import styled from 'styled-components'
import Main from './Main'
import AddButton from './menu-add/AddButton';

const Home = ({openImg, setOpenImg}) => {
  return (
    <div>
      <HomeContainer openImg={openImg}>
        {/* 메뉴-새로운 사진 추가하기버튼입니다 */}
        {openImg ? <AddButton  />:null}
          <HomeInner  onClick={()=>{setOpenImg(false)}}>
          <Main openImg={openImg} setOpenImg={setOpenImg}/>
          </HomeInner>
      </HomeContainer>
          
    </div>
  )
}

const HomeContainer = styled.div `
    position: absolute;
    top:80px; 
    left: 50%;
    transform: translateX(-50%);
    
    width: 100%;
    height: 100%;
    /* 배경회색으로 바꾸기가 안됨 ㅠ */
    background-color:${({ openImg }) => openImg ? 'rgba( 200, 200, 200, 0.9 )' : '#f1f1f1'} ;
    
  `

const HomeInner = styled.div`

    min-width: 700px;
    height: 100%;
    display: flex;
    justify-content: center;
   
`

export default Home