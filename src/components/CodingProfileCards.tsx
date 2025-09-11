import { motion } from "framer-motion";

type Props = {
  data: any;
  platform: "leetcode" | "codeforces";
  hovered: boolean;
};

const CodingProfileCards = ({ data, platform, hovered }: Props) => {
  if (!hovered) return null;

  // Extract data based on platform
  const profile =
    platform === "leetcode"
      ? {
          username: data.matchedUser.username,
          avatar: data.matchedUser.profile.userAvatar,
          ranking: data.matchedUser.profile.ranking,
          rating: data.userContestRanking?.rating ?? "N/A",
          contests: data.userContestRanking?.attendedContestsCount ?? 0,
        }
      : {
          username: data.result[0].handle,
          avatar: data.result[0].avatar,
          ranking: data.result[0].rank,
          rating: data.result[0].rating,
          contests: data.result[0].maxRank,
        };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2 }}
      className="absolute left-40 bottom-5 z-50 w-72 rounded-2xl bg-white shadow-xl p-4 text-gray-800 border border-gray-200"
    >
      <div className="flex items-center gap-3">
        <img
          src={profile.avatar}
          alt="avatar"
          className="w-12 h-12 rounded-full border"
        />
        <div>
          <h3 className="font-semibold text-lg">{profile.username}</h3>
          <p className="text-sm text-gray-500 capitalize">{platform}</p>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
        <div className="flex flex-col">
          <span className="font-medium">Rating</span>
          <span>{profile.rating}</span>
        </div>
        <div className="flex flex-col">
          <span className="font-medium">Rank</span>
          <span>{profile.ranking}</span>
        </div>
        <div className="flex flex-col">
          <span className="font-medium">Contests</span>
          <span>{profile.contests}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default CodingProfileCards;
