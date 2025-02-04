import React from 'react';

const ChannelInformation: React.FC<{ channels: Array<{ name_channel: string; description: string; link: string; name_link: string }> }> = ({ channels }) => {
    return (
        <div className="border-l-4 px-5 py-10 border-zinc-600 gap-10 flex flex-col">
            {channels.map((channel, index) => (
                <div key={index} className="channel-item">
                    <h3 className="text-sm text-slate-900">{channel.name_channel}</h3>
                    <p className="text-xs text-zinc-900">{channel.description}</p>
                    <a href={channel.link} className="text-xs text-zinc-600">{channel.name_link}</a>
                </div>                
            ))}
        </div>
    );
};

export default ChannelInformation;
