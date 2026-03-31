import { useState, useCallback } from "react";
import { DashboardService } from "@/lib/services/dashboard-service";
import { logger } from "@/lib/logger";

export function useComments(onSuccess: () => void) {
  const [isCommenting, setIsCommenting] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [replyingToId, setReplyingToId] = useState<string | null>(null);
  const [replyingToUser, setReplyingToUser] = useState<string | null>(null);

  const handleComment = useCallback(async (requestId: string) => {
    if (!commentText.trim()) return;
    
    setIsCommenting(true);
    logger.info(`Posting comment for request ${requestId}...`);
    
    try {
      const res = await DashboardService.postComment(requestId, commentText, replyingToId);
      
      if (res.error) {
        logger.error(`Error posting comment: ${res.error}`);
        return;
      }

      setCommentText("");
      setReplyingToId(null);
      setReplyingToUser(null);
      onSuccess();
      logger.info("Comment posted successfully.");
    } catch (err: any) {
      logger.error("Caught exception during comment post", err);
    } finally {
      setIsCommenting(false);
    }
  }, [commentText, replyingToId, onSuccess]);

  return {
    commentText,
    setCommentText,
    isCommenting,
    replyingToId,
    setReplyingToId,
    replyingToUser,
    setReplyingToUser,
    handleComment
  };
}
