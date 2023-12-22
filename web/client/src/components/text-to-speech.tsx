"use client"
import React, { useState } from "react"
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder"

export default function TextToSpeech() {
  const recorderControls = useAudioRecorder()
  const [transcript, setTranscript] = useState("")

  const addAudioElement = (blob: Blob) => {
    const url = URL.createObjectURL(blob)
    const audio = document.createElement("audio")
    audio.src = url
    audio.controls = true

    const recognition = new (window as any).webkitSpeechRecognition()

    recognition.onresult = (event: any) => {
      const lastResult = event.results[event.results.length - 1]
      console.log(lastResult)
      setTranscript(lastResult[0].transcript)
    }

    recognition.onend = () => {
      console.log("Speech recognition ended")
    }

    recognition.onerror = (event: any) => {
      console.error("Speech recognition error", event.error)
    }

    const audioBlob = new Blob([blob], { type: "audio/wav" })
    const audioUrl = URL.createObjectURL(audioBlob)
    const audioElement = new Audio(audioUrl)
    console.log({ audioElement, audioBlob, audioUrl })
  }

  return (
    <div>
      <AudioRecorder
        onRecordingComplete={addAudioElement}
        audioTrackConstraints={{
          noiseSuppression: true,
          echoCancellation: true,
        }}
        showVisualizer
      />
      {transcript && <p>Transcript: {transcript}</p>}
    </div>
  )
}
