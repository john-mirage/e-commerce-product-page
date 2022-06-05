import {Container, Company, Name, Description, Price, CurrentPrice, Discount, Counter, NormalPrice, Count} from "@components/product/product.style";
import IconButton from "@components/icon-button/icon-button";

function Product() {
  return (
    <Container>
      <Company>sneaker company</Company>
      <Name>Fall Limited Edition Sneakers</Name>
      <Description>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</Description>
      <Price>
        <CurrentPrice>$125.00</CurrentPrice>
        <Discount>50%</Discount>
        <NormalPrice>$250.00</NormalPrice>
      </Price>
      <Counter>
        <IconButton />
        <Count>0</Count>
        <IconButton />
      </Counter>
    </Container>
  );
}

export default Product;