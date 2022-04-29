import { Box } from "@components/container/container.style";

function Container({children, flex}) {
  return (
    <Box flex={flex}>
      {children}
    </Box>
  );
}

export default Container;