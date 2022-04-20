import { Message, MessageReaction, User } from "discord.js";
import { EventData } from "../models/internal-models";
import { JobService, Logger } from '../services/index.js';
import { Reaction } from "./reaction";

export class AddRole implements Reaction {
	public emoji = `🎨`;
	public requireGuild = true;
	public requireSentByClient = false;
	public requireEmbedAuthorTag = false;

	public async execute(
		msgReaction: MessageReaction,
		msg: Message,
		reactor: User,
		data: EventData
	): Promise<void> {
		Logger.info(msgReaction.emoji.toString());
	}
}
