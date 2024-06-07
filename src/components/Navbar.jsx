import { Box, Flex, Button, Spacer } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useSupabaseAuth } from "../integrations/supabase/auth.jsx";

const Navbar = () => {
  const { session, logout } = useSupabaseAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <Box bg="teal.500" px={4} py={2}>
      <Flex alignItems="center">
        <Box fontWeight="bold" color="white">
          MyApp
        </Box>
        <Spacer />
        {session && (
          <Button colorScheme="teal" variant="outline" onClick={handleLogout}>
            Logout
          </Button>
        )}
      </Flex>
    </Box>
  );
};

export default Navbar;