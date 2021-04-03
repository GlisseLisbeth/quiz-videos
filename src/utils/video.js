
import { useState, useEffect, useRef } from 'react';

const Video = () => {
  const [{ isRecording, url }, setRecordingStatus] = useState(0);
  const [{ stream, mediaRecorder }, setVideoController] = useState({});

  const userVideoRef = useRef<HTMLVideoElement>(null);
  const chunksRef = useRef([]);

  useEffect(() => {

    (async () => {
      const { stream, mediaRecorder } = await initCamera();
      setVideoController({
        stream,
        mediaRecorder
      });

    })();

  }, []);

  const initCamera = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true
    });

    if (userVideoRef.current) {
      userVideoRef.current.srcObject = stream;
      userVideoRef.current.muted = true;
      userVideoRef.current.play();
    }

    const mediaRecorder = new MediaRecorder(stream);

    mediaRecorder.ondataavailable = e => {
      if (e.data && e.data.size > 0) chunksRef.current.push(e.data);
    }

    return {
      stream,
      mediaRecorder
    }

  }

  const startRecording = async () => {
    let media = mediaRecorder;
    if (!(userVideoRef.current && userVideoRef.current.srcObject)) {
      const { mediaRecorder: m, stream: s } = await initCamera();
      media = m;
      setVideoController({ mediaRecorder: m, stream: s });
    }
    if (media) {
      media.start(1000);

      setRecordingStatus(recording => ({
        ...recording,
        isRecording: true
      }));
    }
  }

  const stopRecording = async () => {
    if (!mediaRecorder || !stream) return;
      mediaRecorder.stop();
      mediaRecorder.onstop = () => {
      try {
        const blob = new Blob(chunksRef.current, { type: chunksRef.current[0].type });
        const url = URL.createObjectURL(blob);
        if (userVideoRef.current) {

          if (!stream) return;
          let tracks = stream.getTracks();

          tracks.forEach(function (track) {
            track.stop();
          });


          userVideoRef.current.srcObject = null;
          chunksRef.current = [];
          setRecordingStatus({
            url,
            isRecording: false
          });

          setVideoController({
            stream: null,
            mediaRecorder: null
          })

        }
      } catch (err) {
        console.log(err)
      }
    }
  }

  return {
    isRecording,
    videoUrl: url,
    userVideoRef,
    startRecording,
    stopRecording,
  }

}

export default Video;