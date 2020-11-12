import { IPost } from "interfaces/interfaces";
import Link from "next/link";
import styled from "styled-components";

interface Props {
  posts: IPost[];
}

export default function PostList({ posts }: Props) {
  return (
    <Posts>
      <Post>
        <Link href={`/post/new`}>
          <PostLink>
            <NewPostContent>
              <NewPostTitle>+</NewPostTitle>
            </NewPostContent>
          </PostLink>
        </Link>
      </Post>
      {posts.map(({ id, title }) => (
        <Post key={id}>
          <Link href={`/post/${id}`}>
            <PostLink>
              <PostContentLHS>
                <PostTitle>{title}</PostTitle>
              </PostContentLHS>

              <PostContentRHS data-side="rhs">
                <PostTitle>{title}</PostTitle>
              </PostContentRHS>
            </PostLink>
          </Link>
        </Post>
      ))}
    </Posts>
  );
}

const baseGrid = "8px";
const colourBodyBackground = "#fefefe";
const colourText = "#ccc";
const colourBackground = "rgb(29, 34, 35)";
const colourBackgroundFolded = "rgb(40, 47, 48)";
const colourBackgroundStripes = "rgba(29, 34, 35, .5)";

const Posts = styled.ol`
  padding: 80px;
  margin: calc(${baseGrid} * 2) auto calc(${baseGrid} * 5);
  display: grid;
  grid-row-gap: calc(${baseGrid} * 8);
  grid-column-gap: calc(${baseGrid} * 6);
  grid-template-columns: repeat(auto-fit, minmax(calc(${baseGrid} * 35), 1fr));
  justify-items: center;
  list-style: none;
`;

const Post = styled.li`
  cursor: pointer;
  perspective: 1000px;
  animation-duration: 0.35s;
  width: calc(${baseGrid} * 35);
  height: calc(${baseGrid} * 35);

  animation-name: animateIn;
  animation-duration: 0.35s;
  animation-fill-mode: both;
  animation-timing-function: ease-in-out;

  &:before {
    content: "";
    position: absolute;
    top: calc(${baseGrid}*-2);
    left: calc(${baseGrid}*-2);
    border: 2px dashed ${colourBackground};
    background-image: repeating-linear-gradient(
      -24deg,
      transparent,
      transparent 4px,
      ${colourBackgroundStripes} 0,
      ${colourBackgroundStripes} 5px
    );
    width: calc(${baseGrid} * 35);
    height: calc(${baseGrid} * 35);
    z-index: -1;
  }
`;

const PostLink = styled.a`
  background-color: ${colourBodyBackground};
  border: 2px solid ${colourBackground};
  display: block;
  width: 100%;
  height: 100%;

  &:after {
    content: "";
    position: absolute;
    top: 50%;
    right: calc(${baseGrid}*3);
    width: calc(${baseGrid}*2);
    height: calc(${baseGrid}*2);
    margin-top: calc(${baseGrid}*-1);
    clip-path: polygon(75% 0, 100% 50%, 75% 100%, 0 100%, 25% 50%, 0 0);
    -webkit-clip-path: polygon(75% 0, 100% 50%, 75% 100%, 0 100%, 25% 50%, 0 0);
    background-color: ${colourBackground};
    opacity: 0;
    transition: opacity 0.5s ease-in, transform 0.3s ease-in-out 0ms;
  }

  &:hover:after {
    opacity: 1;
    transform: translateX(calc(${baseGrid}*1.5));
    transition: opacity 0.5s ease-in, transform 0.3s ease-in-out 0.25s;
  }

  &:hover [data-side="rhs"] {
    background-color: ${colourBackgroundFolded};
    transform: rotateY(-50deg);
  }
`;

const PostContent = styled.div`
  background-color: ${colourBackground};
  color: ${colourText};
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  padding: calc(${baseGrid} * 2);
  display: flex;
  flex-direction: column;
`;

const PostContentLHS = styled(PostContent)`
  clip-path: polygon(0 0, 51% 0, 51% 100%, 0 100%);
  -webkit-clip-path: polygon(0 0, 51% 0, 51% 100%, 0 100%);
`;

const PostContentRHS = styled(PostContent)`
  clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%);
  -webkit-clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%);
  transition: transform 0.5s ease-in-out, background-color 0.4s ease-in-out;
`;

const PostTitle = styled.h2`
  font-size: calc(${baseGrid}*4);
  line-height: 1.125;
  font-weight: 700;
  letter-spacing: -0.02em;
`;

const NewPostContent = styled(PostContent)`
  align-items: center;
  justify-content: center;
`;

const NewPostTitle = styled(PostTitle)`
  font-size: calc(${baseGrid}*16);
  font-weight: 100;
`;