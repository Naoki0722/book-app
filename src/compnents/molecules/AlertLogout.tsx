import { Button } from "@chakra-ui/button";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
} from "@chakra-ui/modal";
import { memo, RefObject, VFC } from "react";
import { SecondaryButton } from "../atoms/SecondaryButton";

type Props = {
  isAlertOpen: boolean;
  cancelRef: RefObject<HTMLButtonElement>;
  onClose: () => void;
  onCloseAlert: () => void;
  onClickLogout: () => void;
  isLoading: boolean;
};

export const AlertLogout: VFC<Props> = memo((props) => {
  const {
    isAlertOpen,
    cancelRef,
    onClose,
    onCloseAlert,
    onClickLogout,
    isLoading,
  } = props;
  return (
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
  );
});
