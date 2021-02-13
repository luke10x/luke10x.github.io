import React from "react"
import styled from 'styled-components';

const YouTubeDiv = styled.div`
display: flex;
flex-direction: column;
justify-items: center;
align-items: center;
a {
  background: red;
  color: white;
  flex: 0 1;
  padding: 1rem;
  margin: .5rem;
  border-radius: 3px;
  box-shadow: 2px 2px lightgrey;

}

`
function YouTube() {

  return (
    <div>
      <div class="title">🎬 Youtube Channel</div>
      <div class="description">
        Hi, my name is Luke, I am a full stack developer.
        I would like to invite you to my
        <br />
        <YouTubeDiv>
          <a
            class="button"
            href="https://www.youtube.com/channel/UCs_0IjH05wHXhmk12RyWxeQ"
            target="_blank"
          >
            10X Developer channel on Youtube
          </a>
        </YouTubeDiv>
      </div>
    </div>
  )
}

export default YouTube