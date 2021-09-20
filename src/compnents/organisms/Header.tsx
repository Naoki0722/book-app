import { memo, useRef, useState, VFC } from "react";
import { Flex, Box, Spacer, Text } from "@chakra-ui/layout";
import { Link, useHistory } from "react-router-dom";
import { useAuthState } from "../../hooks/useAuthState";

import { useDisclosure } from "@chakra-ui/hooks";
import { firebaseAuth } from "../../config/firebase";
import { signOut } from "@firebase/auth";
import { AlertLogout } from "../molecules/AlertLogout";
import { DrawerMenu } from "../molecules/DrawerMenu";
import { MenuIcon } from "../atoms/MenuIcon";

export const Header: VFC = memo(() => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const auth = useAuthState();
  const history = useHistory();
  const cancelRef = useRef<HTMLButtonElement>(null);

  const onCloseAlert = () => {
    setIsAlertOpen(false);
  };

  const onClickLogout = () => {
    setLoading(true);
    signOut(firebaseAuth)
      .then(() => {
        alert("ログアウトしました");
        setLoading(false);
        history.push("/login");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <Flex h={16} align="center" backgroundColor="cyan.300">
      <Box pl={5}>
        <Text fontSize="lg">
          <Link to="/">Book-review</Link>
        </Text>
      </Box>
      <Spacer />
      <MenuIcon auth={auth} onOpen={onOpen} />
      <DrawerMenu
        isOpen={isOpen}
        onClose={onClose}
        setIsAlertOpen={setIsAlertOpen}
      />
      <AlertLogout
        isAlertOpen={isAlertOpen}
        cancelRef={cancelRef}
        onClose={onClose}
        onCloseAlert={onCloseAlert}
        onClickLogout={onClickLogout}
        isLoading={isLoading}
      />
    </Flex>
  );
});
