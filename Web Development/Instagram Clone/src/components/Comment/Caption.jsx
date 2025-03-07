import { Avatar, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useUserProfileStore from "../../store/userProfileStore";
import { timeSince } from "../../utils/timeSince";

const Caption = ({ post }) => {
  const userProfile = useUserProfileStore((state) => state.userProfile);
  return (
    <Flex gap={4} alignItems={"center"}>
      <Link to={`/${userProfile.username}`}>
        <Avatar src={userProfile.profilePicURL} size={"sm"} />
      </Link>
      <Flex direction={"column"}>
        <Flex gap={2} alignItems={"center"}>
          <Link to={`/${userProfile.username}`}>
            <Text fontWeight={"bold"} fontSize={12}>
              {userProfile.username}
            </Text>
          </Link>
          <Text fontSize={14}>{post.caption}</Text>
          <Text fontSize={12} color={"gray.500"}>
            {timeSince(post.createdAt)}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Caption;
