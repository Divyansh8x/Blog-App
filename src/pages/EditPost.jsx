import React from "react";
import { useState, useEffect } from "react";
import { Container, PostForm } from "../Components/Index.js";
import { useParams, useNavigate } from "react-router-dom";
import appwriteService from "../appwrite/config.js";

const EditPost = () => {
  const [post, setPosts] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) {
          setPosts(post);
        }
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);

  return post ? (
    <div className="py-8">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  ) : null;
};

export default EditPost;
