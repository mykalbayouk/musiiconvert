import React from 'react';

const TechnologyPage: React.FC = () => {
    const technologies = [
        {
            title: 'Basic Pitch',
            imageUrl: 'https://repository-images.githubusercontent.com/488142653/1c08f969-49ba-41f6-b371-bf2f71eca321',
            description: "I used Basic Pitch to convert an MP3 file into a MIDI file, which was the first step in my two-step process. This tool, developed by Spotify's Audio Intelligence Lab, allowed me to extract pitch and note information from the audio recording quickly and accurately. With its pitch bend detection and ability to handle various instruments, including voice, it provided a high-quality MIDI output. I also adjusted the model’s parameters to fine-tune the conversion, ensuring that the MIDI file closely matched the original recording and set me up for the next step in my process.",
            url: 'https://basicpitch.spotify.com/about',
        },
        {
            title: 'Webmscore',
            imageUrl: 'https://opengraph.githubassets.com/e079ef43d43a376fa1a0f38f642fd36fad040d904c3370116ed19d7d2774e38d/LibreScore/webmscore',
            description: "For the second step in my process, I used the WebMScore library, a web-based version of MuseScore, to convert the MIDI file into sheet music. MuseScore is a powerful, open-source music notation software that allows users to create, edit, and share sheet music with a high degree of precision. By leveraging WebMScore, I was able to generate a visual representation of the MIDI data, making it easier for the user to analyze and interpret the musical structure. This step provided a clear and readable format for musicians or composers who wanted to see the arrangement in traditional notation.",
            url: 'https://github.com/LibreScore/webmscore',
        },
    ];

    return (

        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-900 p-4" style={{ backgroundImage: 'url(/resources/mb.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="flex flex-wrap items-center justify-center w-full">
            {technologies.map((tech, index) => (
            <div key={index} className="border border-gray-300 rounded-lg p-5 w-2/5 bg-[#ABA7B4FF] shadow-lg m-4">
            <h2 className="text-2xl font-bold mb-2 text-gray-900 text-center">{tech.title}</h2>
            <img src={tech.imageUrl} alt={tech.title} className="w-full h-auto mb-2 shadow-md bg-white rounded-lg" />
            <p className="mb-2 text-gray-900">{tech.description}</p>
            <a href={tech.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-xl">Learn more</a>
            </div>
            ))}
            </div>
        </div>
    );
};

export default TechnologyPage;