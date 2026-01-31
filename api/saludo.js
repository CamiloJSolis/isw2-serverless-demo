export default function handler(req,res) {
  const nombre = req.query.nombre || "anónimo";
  
  res.status(200).json({
    mensaje:"こんにちは${nombre}!",
    curso:"ソフトウェアエンジニアリング二",
    timestamp:new Date().toISOString()
  });
}
