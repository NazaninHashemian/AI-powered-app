//Implementation detail
const conversation = new Map<string, string>();

export const conversationRepository = {
    getLastResponseId(conversationId: string) {
        return conversation.get(conversationId)
    },
    setLastResponseId(conversationId: string, responseId: string) {
        conversation.set(conversationId, responseId);
    }    

}

