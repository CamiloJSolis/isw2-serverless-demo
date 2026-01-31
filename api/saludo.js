export default function handler(req,res) {
  res.status(200).json({
    mensaje:"こんにちはISW2！",
    curso:"ソフトウェアエンジニアリング二",
    timestamp:new Date().toISOString()
  });
}
