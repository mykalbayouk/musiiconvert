# MusiiConvert

MusiiConvert is a tool designed to convert music mp3 files into sheet music. It uses Spotify's Basic-Pitch Model to convert the mp3 file into a MIDI File then that MIDI file is converted into sheet music by using note data/duration.

## Issue

Unfortunately, one of the main libraries (webmcore) is outdated and has issues with being launched in production mode. This is currently an ongoing issue but for now, this only works locally on your machine. I am looking into other libraries or rebuilding them from scratch in the meantime.

## Features

- Convert between multiple audio formats (e.g., MP3, WAV, FLAC, AAC)
- Batch conversion for multiple files
- High-quality audio output
- User-friendly interface

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.
