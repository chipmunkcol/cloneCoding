import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { width } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { __getComment, __deleteComment } from '../../../../Redux/modules/comment'

const DetailPageComment = ({reload, setReload}) => {

const dispatch = useDispatch()
const {isLoading, error, comment} = useSelector((state)=>state.comments)
console.log(comment)


useEffect(()=>{
    dispatch(__getComment())
    

},[reload])

if (comment.length === 0) {
    return (<div style={{backgroundcolor:'yellow', width:'800px', height:'800px'}}><h1>로딩중 입니다...</h1></div>)
}

    return (
        <div style={{ display: 'flex' ,flexDirection:'column', justifyContent: 'space-between', marginLeft: '10px', marginTop: '5px' }}>

        {
            comment.map((val)=>
                <div key={val.id} style={{ display: 'flex', margin:'0 0 20px 0'}}>
                    <IdPersonImg src='images/noImg.jpg' ></IdPersonImg>
                    <div style={{width:'90%'}}>
                        <span style={{ marginLeft: '5px', fontWeight: '700' }}>댓글id: {val.id}</span>
                        <span style={{ marginLeft: '5px' }}>{val.content}</span>
                        <div style={{display:'flex', flexDirection:'row'}}>
                            <div style={{ marginLeft: '5px', marginTop: '-2px', marginRight: '10px', width:'28%'}}> val.likeCount</div>
                            <EditComment type='button' onClick={()=>{
                                console.log(val.id)
                                dispatch(__deleteComment(val.id))
                                setTimeout(() => {
                                    setReload(!reload)
                                }, 500);
                            }}><FontAwesomeIcon icon={faTrashCan} /></EditComment>
                        </div>
                    </div>
                    <img src='images/heart.png' style={{ width: '30px', height: '30px' ,marginRight:'15px'}}></img>
                </div>
            )
        }
            
            
            

            
        </div>
    )
}

const IdPersonImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50px;
`

const EditComment = styled.div`
    width: 90%;
    font-weight: 800;
    margin-left: 6px;
    opacity: 0;
:hover {
opacity: 1;
}
`

export default DetailPageComment