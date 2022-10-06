import React, { useState, useEffect, useContext } from "react";
import { Card, Typography, Button, Box } from "@mui/material";
import db from "../../Data/firebase";
import { useNavigate } from "react-router-dom";
import { CartItemsContext } from "../../App";
export default function SingleBookElement({
  title,
  id,
  author,
  price,
  image,
  isInCart,
}) {
  const [cartText, setcartText] = useState("Add to Cart");
  const [addedToCart, setAddedToCart] = useState(false);
  const { totalItemInCart, SetTotalItemInCart } = useContext(CartItemsContext);
  const cartButton = async () => {
    if (!addedToCart) {
      setcartText("Adding");
      await db.collection("bookList").doc(id).update({ isInCart: true });

      setAddedToCart(true);
      setcartText("Remove");
      SetTotalItemInCart(totalItemInCart + 1);
    } else {
      setcartText("Removing");
      await db.collection("bookList").doc(id).update({ isInCart: false });
      setcartText("Add to Cart");
      setAddedToCart(false);
      SetTotalItemInCart(totalItemInCart - 1);
    }
  };
  useEffect(() => {
    setAddedToCart(isInCart);
    setcartText(isInCart ? "Remove" : "Add to Cart");
  }, []);
  let navigate = useNavigate();

  const navigateToSingleBook = () => {
    navigate("/book/" + id);
  };
  return (
    <Card
      variant="solid"
      sx={{
        maxWidth: 200,
        mt: 5,
        mr: 7,
      }}
    >
      <Card>
        <img
          src={image}
          onClick={navigateToSingleBook}
          alt=""
          style={{ width: "100%", height: "300px" }}
        />
      </Card>
      <Typography
        fontSize="20px"
        fontWeight="xlg"
        onClick={navigateToSingleBook}
      >
        {title.length < 18 ? title : title.slice(0, 17) + "..."}
      </Typography>
      <Box>
        <Box>
          <Typography>{author}</Typography>
          <Typography fontWeight="xl">Rs.{price}</Typography>
        </Box>
        <Button variant="contained" onClick={cartButton} sx={{ width: "100%" }}>
          <Typography fontSize="20px">{cartText}</Typography>
        </Button>
      </Box>
    </Card>
  );
}
