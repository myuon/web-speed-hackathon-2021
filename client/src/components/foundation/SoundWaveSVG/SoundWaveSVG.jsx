import React from 'react';

const runWorker = async (worker, data) => {
  worker.postMessage(data);

  return await new Promise((resolve) => {
    worker.onmessage = ({ data }) => {
      resolve(data);
    };
  });
};

/**
 * @param {ArrayBuffer} data
 * @returns {Promise<{ max: number, peaks: number[] }}
 */
async function calculate(data) {
  if (!data) {
    return { max: 0, peaks: [] };
  }

  const audioCtx = new AudioContext();

  // 音声をデコードする
  /** @type {AudioBuffer} */
  const buffer = await new Promise((resolve, reject) => {
    audioCtx.decodeAudioData(data.slice(0), resolve, reject);
  });

  const worker = new Worker(new URL('./worker.js', import.meta.url));

  return await runWorker(worker, {
    channelLeft: buffer.getChannelData(0),
    channelRight: buffer.getChannelData(1),
  });
}

/**
 * @typedef {object} Props
 * @property {ArrayBuffer} soundData
 */

/**
 * @type {React.VFC<Props>}
 */
const SoundWaveSVG = ({ soundData }) => {
  const uniqueIdRef = React.useRef(Math.random().toString(16));
  const [{ max, peaks }, setPeaks] = React.useState({ max: 0, peaks: [] });

  React.useEffect(() => {
    calculate(soundData).then(({ max, peaks }) => {
      setPeaks({ max, peaks });
    });
  }, [soundData]);

  return (
    <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 1">
      {peaks.map((peak, idx) => {
        const ratio = peak / max;
        return (
          <rect key={`${uniqueIdRef.current}#${idx}`} fill="#2563EB" height={ratio} width="1" x={idx} y={1 - ratio} />
        );
      })}
    </svg>
  );
};

export { SoundWaveSVG };
