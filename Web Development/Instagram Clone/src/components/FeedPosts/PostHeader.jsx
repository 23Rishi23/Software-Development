import {
  Avatar,
  Box,
  Flex,
  Skeleton,
  SkeletonCircle,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { timeSince } from "../../utils/timeSince";
import useFollowUser from "../../hooks/useFollowUser";

const PostHeader = ({ post, creatorProfile }) => {
  const { isUpdating, isFollowing, handleFollowUser } = useFollowUser(
    post.createdBy
  );

  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      w={"full"}
      my={2}
    >
      <Flex alignItems={"center"} gap={2}>
        {creatorProfile ? (
          <Link to={`/${creatorProfile?.username}`}>
            <Avatar
              src={creatorProfile?.profilePicURL}
              alt="user profile pic"
              size={"sm"}
            />
            {console.log(creatorProfile.username)}
          </Link>
        ) : (
          <SkeletonCircle size="10" />
        )}

        <Flex fontSize={12} fontWeight={"bold"} gap="2">
          {creatorProfile ? (
            <Link to={`/${creatorProfile?.username}`}>
              {creatorProfile?.username}
            </Link>
          ) : (
            <Skeleton w={"100px"} h={"10px"} />
          )}

          <Box color={"gray.500"}>• {timeSince(post.createdAt)}</Box>
        </Flex>
      </Flex>
      <Box cursor={"pointer"}>
        <Button
          fontSize={12}
          size={"xs"}
          bg={"transparent"}
          color={"blue.500"}
          fontWeight={"bold"}
          _hover={{ color: "white" }}
          transition={"0.2s ease-in-out"}
          onClick={handleFollowUser}
          isLoading={isUpdating}
        >
          {isFollowing ? "Unfollow" : "Follow"}
        </Button>
      </Box>
    </Flex>
  );
};

export default PostHeader;
