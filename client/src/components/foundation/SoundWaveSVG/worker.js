import { map, zip, mean, chunk, max as maxlo } from 'lodash-es';

/**
 * @param {AudioBuffer} buffer
 * @returns {Promise<{ max: number, peaks: number[] }}
 */
function calculate({ channelLeft, channelRight }) {
  // 左の音声データの絶対値を取る
  const leftData = map(channelLeft, Math.abs);
  // 右の音声データの絶対値を取る
  const rightData = map(channelRight, Math.abs);

  // 左右の音声データの平均を取る
  const normalized = map(zip(leftData, rightData), mean);
  // 100 個の chunk に分ける
  const chunks = chunk(normalized, Math.ceil(normalized.length / 100));
  // chunk ごとに平均を取る
  const peaks = map(chunks, mean);
  // chunk の平均の中から最大値を取る
  const max = maxlo(peaks);

  return { max, peaks };
}

self.onmessage = ({ data }) => {
  self.postMessage(calculate(data));
};
