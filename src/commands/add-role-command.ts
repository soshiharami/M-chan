import { ChatInputApplicationCommandData, CommandInteraction, PermissionString } from 'discord.js';
import { createRequire } from 'module';

import { EventData } from '../models/internal-models.js';
import { Lang } from '../services/index.js';
import { InteractionUtils, getKeys } from '../utils/index.js';
import { Command, CommandDeferType } from './index.js';

const require = createRequire(import.meta.url);
let Emoji = require('../../config/emoji.json');

export class AddIdRoleCommand implements Command {
    public metadata: ChatInputApplicationCommandData = {
        name: 'role-id',
        description: 'register indonesian hololiver role to reaction command',
    };
    public deferType = CommandDeferType.PUBLIC;
    public requireDev = false;
    public requireGuild = false;
    public requireClientPerms: PermissionString[] = [];
    public requireUserPerms: PermissionString[] = [];

    public async execute(intr: CommandInteraction, data: EventData): Promise<void> {
        const message = await InteractionUtils.send(
            intr,
            Lang.getEmbed('displayEmbeds.role-id', data.lang())
        );

        const emoji = getKeys(Emoji.idn);
        for (var i in emoji) {
            await message.react(emoji[i]);
        }
    }
}

export class AddJp1RoleCommand implements Command {
    public metadata: ChatInputApplicationCommandData = {
        name: 'role-jp1',
        description: 'register indonesian hololiver role to reaction command',
    };
    public deferType = CommandDeferType.PUBLIC;
    public requireDev = false;
    public requireGuild = false;
    public requireClientPerms: PermissionString[] = [];
    public requireUserPerms: PermissionString[] = [];

    public async execute(intr: CommandInteraction, data: EventData): Promise<void> {
        const message = await InteractionUtils.send(
            intr,
            Lang.getEmbed('displayEmbeds.role-jp1', data.lang())
        );

        const emoji = getKeys(Emoji.jp1);
        console.log(emoji);
        for (var i in emoji) {
            await message.react(emoji[i]);
        }
    }
}

export class AddJp2RoleCommand implements Command {
    public metadata: ChatInputApplicationCommandData = {
        name: 'role-jp2',
        description: 'register indonesian hololiver role to reaction command',
    };
    public deferType = CommandDeferType.PUBLIC;
    public requireDev = false;
    public requireGuild = false;
    public requireClientPerms: PermissionString[] = [];
    public requireUserPerms: PermissionString[] = [];

    public async execute(intr: CommandInteraction, data: EventData): Promise<void> {
        const message = await InteractionUtils.send(
            intr,
            Lang.getEmbed('displayEmbeds.role-jp2', data.lang())
        );

        const emoji = getKeys(Emoji.jp2);
        for (var i in emoji) {
            await message.react(emoji[i]);
        }
    }
}

export class AddEnRoleCommand implements Command {
    public metadata: ChatInputApplicationCommandData = {
        name: 'role-en',
        description: 'register indonesian hololiver role to reaction command',
    };
    public deferType = CommandDeferType.PUBLIC;
    public requireDev = false;
    public requireGuild = false;
    public requireClientPerms: PermissionString[] = [];
    public requireUserPerms: PermissionString[] = [];

    public async execute(intr: CommandInteraction, data: EventData): Promise<void> {
        const message = await InteractionUtils.send(
            intr,
            Lang.getEmbed('displayEmbeds.role-en', data.lang())
        );

        const emoji = getKeys(Emoji.en);
        for (var i in emoji) {
            await message.react(emoji[i]);
        }
    }
}
