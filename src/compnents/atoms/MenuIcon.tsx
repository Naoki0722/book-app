import { Box } from "@chakra-ui/layout";
import { faDoorOpen, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { VFC } from "react";

type Props = {
  auth: boolean;
  onOpen: () => void;
};

export const MenuIcon: VFC<Props> = (props) => {
  const { auth, onOpen } = props;
  return (
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
  );
};
