import React from "react";

const PostLayOut = styled.div``;
const List = styled.div``;

export default function PostView() {
  return (
    <>
      <Header></Header>
      {/* 게시글 */}
      <PostLayOut>
        <UserInfoBox></UserInfoBox>
        <ContentBox></ContentBox>
        <IconBox></IconBox>
        <Date></Date>
      </PostLayOut>
      {/* 댓글 창 */}
      <List>
        <ReplyBox></ReplyBox>
      </List>
      {/* 댓글 입력창 */}
      <ConmentBox></ConmentBox>
    </>
  );
}
