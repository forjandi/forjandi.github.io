import communicationChannelsConfig from '../config/CommunicationChannels.config'

const CommunicationChannels = () => {
    return (
        <div className="border-l-4 px-5 py-10 border-zinc-600 dark:border-zinc-400 gap-10 flex flex-col">
            {communicationChannelsConfig.map((channel, index) => (
                channel.show && (
                    <div key={index} className={`space-y-2 ${channel.active ? 'opacity-100' : 'opacity-45 pointer-events-none'}`}>
                        <h3 className="text-sm text-slate-900 dark:text-slate-100">{channel.name_channel}</h3>
                        <p className="text-xs text-zinc-900 dark:text-zinc-400">{channel.description}</p>
                        <a href={channel.link} className="text-xs text-zinc-600 dark:text-zinc-400 underline">{channel.name_link}</a>
                    </div>
                )
            ))}
        </div>
    );
};

export default CommunicationChannels;
