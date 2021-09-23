import { Stack, Text } from "@chakra-ui/layout";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/modal";
import { Dispatch, memo, SetStateAction, VFC } from "react";
import { Link } from "react-router-dom";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  setIsAlertOpen: Dispatch<SetStateAction<boolean>>;
};

export const DrawerMenu: VFC<Props> = memo((props) => {
  const { isOpen, onClose, setIsAlertOpen } = props;
  return (
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
              <Link to="/book-regist">
                <Text>Register</Text>
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
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
});
