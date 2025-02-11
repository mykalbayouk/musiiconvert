'use client';
import { useState } from "react";
import Slider from "@mui/material/Slider";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import getSheetMusic from "../musicModel/basicpitch";
import DragAndDropUpload from "../components/dragDrop";
import ClipLoader from "react-spinners/ClipLoader";

export default function Home() {
    const [file, setFile] = useState<File | null>(null);
    
    const [difficulty, setDifficulty] = useState<number>(1);
    const [onsetThresh, setOnsetThresh] = useState<number>(0);
    const [offsetThresh, setOffsetThresh] = useState<number>(0);
    const [minNoteLength, setMinNoteLength] = useState<number>(0);

    const [loading, setLoading] = useState(false);  

    const [pdfFile, setPdfFile] = useState<File | null>(null);

    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const handleFileChange = (file: any) => {
        setFile(file[0]);
    };

    const handleDifficultyChange = (value: number) => {
        setDifficulty(value);
    }

    const handleOnsetThreshChange = (value: number) => {
        switch (value) {
            case 1:
                value = 2;
                break;
            case 2:
                value = 1.5;
                break;
            case 3:
                value = 1;
                break;
            case 4:
                value = 0.8;
                break;
            case 5:
                value = 0.7;
                break;
            case 6:
                value = 0.5;
                break;
        }
        setOnsetThresh(value);
    }

    const handleOffsetThreshChange = (value: number) => {
        switch (value) {
            case 1:
                value = 0.8;
                break;
            case 2:
                value = 0.8;
                break;
            case 3:
                value = 0.5;
                break;
            case 4:
                value = 0.3;
                break;
            case 5:
                value = 0.1;
                break;
            case 6:
                value = 0.1;
                break;
        }
        setOffsetThresh(value);
    }

    const handleMinNoteLengthChange = (value: number) => {
        switch (value) {
            case 1:
                value = 5;
                break;
            case 2:
                value = 5;
                break;
            case 3:
                value = 5;
                break;
            case 4:
                value = 5;
                break;
            case 5:
                value = 3;
                break;
            case 6:
                value = 3;
                break;
        }
        setMinNoteLength(value);
    }
    

    const handlePreUpload = (event: any) => {
        event.preventDefault();
        if (file === null) {
            window.alert('Please Select a File');
            return;
        }
        if (file) {
            setLoading(true);
            getSheetMusic(file, difficulty, onsetThresh, offsetThresh, minNoteLength)
                .then((pdf) => {
                    setPdfFile(pdf);
                })
                .catch((error) => {
                    console.error("Error generating sheet music:", error);
                })
                .finally(() => {
                    setLoading(false);
                });
        } else {
            console.error("No file selected");
        }
        setOpen(true);
    }

    const handleDownload = async (event: any) => {
        event.preventDefault();
        if (pdfFile) {
          const url = URL.createObjectURL(pdfFile);
          const a = document.createElement('a');
          a.href = url;
          a.download = `MusiiConvertSSH.pdf`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
        } else {
          console.error("No PDF file available for download");
        }
    }


    return (
        <div className="bg-gray-900 text-gray-300" style={{ backgroundImage: 'url(/resources/hpbi.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="flex justify-center items-center min-h-screen w-full">
                <div className="bg-[#424242FF] shadow-lg rounded-lg p-8 max-w-lg w-full mx-4 sm:mx-auto">
                    <h1 className="text-bold text-4xl text-center mb-6 font-bold">Add Song</h1>
                    <form className="space-y-6">
                        <div className="w-full">
                            <DragAndDropUpload onUploadComplete={handleFileChange} />
                            <label htmlFor="difficulty" className="block text-bold text-xl text-center mb-1 font-bold">Difficulty</label>
                            <Slider
                                style={{ color: '#B1B1B1FF' }}
                                defaultValue={1}
                                step={1}
                                marks
                                min={1}
                                max={6}
                                valueLabelDisplay="auto"
                                onChange={(event, value) => handleDifficultyChange(Array.isArray(value) ? value[0] : value)}
                            />
                            <p className="text-center mt-2 text-sm text-white-600">
                                Indicate the difficulty level of the song. 1 is the easiest and 6 is the hardest.
                            </p>
                        </div>
                        <button
                            onClick={handlePreUpload}
                            type="submit"
                            className="w-full bg-blue-500 text-white p-3 rounded-lg transition duration-150 hover:bg-blue-600"
                        >
                            Upload
                        </button>
                        <Modal open={open} onClose={handleClose}>
                            <Box sx={{
                                position: 'relative',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: '90%',
                                height: '90%',
                                bgcolor: '#3E3A47',
                                boxShadow: 24,
                                p: 4,
                                borderRadius: '8px',
                                color: 'white',
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <h2 className="text-bold text-4xl text-center mb-6 font-bold">Modify Score</h2>
                                <div className="flex flex-grow">
                                    <div className="w-1/2 pr-4 flex flex-col">
                                        <div className="mt-2 pr-4 flex flex-col space-y-4"> 
                                            <div className="mb-4">
                                                <p className="text-xl text-white mb-2">Onset Threshold</p>
                                                <p className="text-sm text-white mb-2">
                                                    This threshold sets the minimum amplitude for detecting a note onset, filtering out false positives. Higher values will detect more notes.
                                                </p>
                                                <Slider
                                                    style={{ color: '#B1B1B1FF' }}
                                                    defaultValue={3}
                                                    step={1}
                                                    marks
                                                    min={1}
                                                    max={6}
                                                    valueLabelDisplay="auto"
                                                    onChange={(event, value) => handleOnsetThreshChange(Array.isArray(value) ? value[0] : value)}
                                                    sx={{ mx: 1 }}
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <p className="text-xl text-white mb-2">Offset Thresh</p>
                                                <p className="text-sm text-white mb-2">
                                                    This threshold decides if a note continues; if the amplitude drops too low, the note stops or fades. Make this value highter to detect quicker notes.
                                                </p>
                                                <Slider
                                                    style={{ color: '#B1B1B1FF' }}
                                                    defaultValue={3}
                                                    step={1}
                                                    marks
                                                    min={1}
                                                    max={6}
                                                    valueLabelDisplay="auto"
                                                    onChange={(event, value) => handleOffsetThreshChange(Array.isArray(value) ? value[0] : value)}
                                                    sx={{ mx: 1 }}
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <p className="text-xl text-white mb-2">Minimum Note Length</p>
                                                <p className="text-sm text-white mb-2">
                                                    The minimum note length is the minimum duration of a note required to be detected. Make this value higher to detect shorter notes.
                                                </p>
                                                <Slider
                                                    style={{ color: '#B1B1B1FF' }}
                                                    defaultValue={3}
                                                    step={1}
                                                    marks
                                                    min={1}
                                                    max={6}
                                                    valueLabelDisplay="auto"
                                                    onChange={(event, value) => handleMinNoteLengthChange(Array.isArray(value) ? value[0] : value)}
                                                    sx={{ mx: 1 }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-1/2">
                                        {loading ? (
                                            <div className="flex justify-center items-center h-full">
                                                    <ClipLoader color={'#ffffff'} loading={loading} size={150} />
                                            </div>
                                        ) : (
                                            pdfFile && (
                                                <embed
                                                    src={URL.createObjectURL(pdfFile)}
                                                    type="application/pdf"
                                                    width="100%"
                                                    height="100%"
                                                />
                                            )
                                        )}
                                    </div>
                                </div>
                                <p className="text-center mt-4">
                                    Use the sliders to adjust the difficulty of the song. Then press Modify Model to generate the new score.
                                </p>
                                <div className="flex justify-between mt-4">
                                    <button onClick={handlePreUpload} className="w-1/2 bg-gray-500 text-white p-3 rounded-lg transition duration-150 hover:bg-gray-600 mr-2">
                                        Modify Model
                                    </button>
                                    <button onClick={handleDownload} className="w-1/2 bg-blue-500 text-white p-3 rounded-lg transition duration-150 hover:bg-blue-600 ml-2">
                                        Download
                                    </button>
                                </div>
                            </Box>
                        </Modal>
                    </form>
                </div>
            </div>
        </div >
    )
}
