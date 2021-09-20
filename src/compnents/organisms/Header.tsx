import { useRef, useState, VFC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorOpen, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { Flex, Box, Spacer, Text, Stack } from "@chakra-ui/layout";
import { Link, useHistory } from "react-router-dom";
import { useAuthState } from "../../hooks/useAuthState";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/modal";
import { useDisclosure } from "@chakra-ui/hooks";
import { firebaseAuth } from "../../config/firebase";
import { signOut } from "@firebase/auth";
import { Button } from "@chakra-ui/button";
import { SecondaryButton } from "../atoms/SecondaryButton";

export const Header: VFC = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const auth = useAuthState();
  const history = useHistory();
  const cancelRef = useRef<any>();

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
      <Box pr={5} textAlign="center">
        {auth ? (
          <button onClick={onOpen}>
            <FontAwesomeIcon icon={faUserAlt} size="lg" />
            <p>マイページ</p>
          </button>
        ) : (
          <button>
            <FontAwesomeIcon icon={faDoorOpen} size="lg" />
            <p>ログイン</p>
          </button>
        )}
      </Box>
      <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>マイページ</DrawerHeader>
            <DrawerBody>
              <Stack spacing={8}>
                <Link to="/">
                  <Text>Home</Text>
                </Link>
                <Text
                  onClick={() => {
                    setIsAlertOpen(true);
                  }}
                  _hover={{ cursor: "pointer" }}
                >
                  ログアウト
                </Text>
              </Stack>
            </DrawerBody>
            <DrawerFooter>
              <p>てすと2</p>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
      <AlertDialog
        isOpen={isAlertOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              本当にログアウトしますか？
            </AlertDialogHeader>

            <AlertDialogBody>
              ログアウト後は再度ログインページよりログインしてください。
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onCloseAlert}>
                いいえ
              </Button>
              <SecondaryButton onClick={onClickLogout} isLoading={isLoading}>
                はい
              </SecondaryButton>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Flex>
  );
};
